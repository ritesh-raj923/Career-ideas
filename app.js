// ─── SUPABASE CONFIGURATION ───
// REPLACE WITH YOUR VALUES FROM SUPABASE DASHBOARD
const SUPABASE_URL = 'https://qawdfokessggqnjlfztn.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_y-fsbvqs6zvqj36t779mAVA_kCUGY_';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ─── STATE ───
let currentUser = null;
let currentExamFilter = '';
let currentSort = 'upvotes';
let page = 0;
const PAGE_SIZE = 12;
let isLoading = false;
let hasMore = true;
let currentResourceId = null;

// ─── DOM REFS ───
const $ = (id) => document.getElementById(id);

const elements = {
    examsGrid: $('examsGrid'),
    resourcesGrid: $('resourcesGrid'),
    examFilter: $('examFilter'),
    sortFilter: $('sortFilter'),
    searchInput: $('searchInput'),
    totalResources: $('totalResources'),
    totalUsers: $('totalUsers'),
    loadMoreBtn: $('loadMoreBtn'),
    
    // Auth
    authLinks: $('authLinks'),
    userMenu: $('userMenu'),
    userAvatar: $('userAvatar'),
    userName: $('userName'),
    loginBtn: $('loginBtn'),
    signupBtn: $('signupBtn'),
    logoutBtn: $('logoutBtn'),
    profileLink: $('profileLink'),
    myResourcesLink: $('myResourcesLink'),
    heroAddBtn: $('heroAddBtn'),
    
    // Login Modal
    loginModal: $('loginModal'),
    loginForm: $('loginForm'),
    loginEmail: $('loginEmail'),
    loginPassword: $('loginPassword'),
    closeLoginModal: $('closeLoginModal'),
    switchToSignup: $('switchToSignup'),
    googleLoginBtn: $('googleLoginBtn'),
    
    // Signup Modal
    signupModal: $('signupModal'),
    signupForm: $('signupForm'),
    signupName: $('signupName'),
    signupEmail: $('signupEmail'),
    signupPassword: $('signupPassword'),
    closeSignupModal: $('closeSignupModal'),
    switchToLogin: $('switchToLogin'),
    googleSignupBtn: $('googleSignupBtn'),
    
    // Resource Modal
    addResourceModal: $('addResourceModal'),
    resourceForm: $('resourceForm'),
    resourceTitle: $('resourceTitle'),
    resourceExam: $('resourceExam'),
    resourceLink: $('resourceLink'),
    resourceDesc: $('resourceDesc'),
    closeModal: $('closeModal'),
    submitResourceBtn: $('submitResourceBtn'),
    
    // Comment Modal
    commentModal: $('commentModal'),
    commentsContainer: $('commentsContainer'),
    commentForm: $('commentForm'),
    commentInput: $('commentInput'),
    closeCommentModal: $('closeCommentModal'),
    submitCommentBtn: $('submitCommentBtn'),
};

// ─── AUTH FUNCTIONS ───

async function checkAuth() {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
        currentUser = user;
        updateUIForLoggedInUser(user);
        await ensureProfile(user);
    }
}

function updateUIForLoggedInUser(user) {
    elements.authLinks.style.display = 'none';
    elements.userMenu.style.display = 'flex';
    elements.userAvatar.src = user.user_metadata?.avatar_url || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(user.user_metadata?.full_name || user.email);
    elements.userName.textContent = user.user_metadata?.full_name || user.email?.split('@')[0] || 'User';
}

function updateUIForLoggedOutUser() {
    elements.authLinks.style.display = 'flex';
    elements.userMenu.style.display = 'none';
    currentUser = null;
}

async function ensureProfile(user) {
    const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
    
    if (error && error.code === 'PGRST116') {
        // Profile doesn't exist, create it
        await supabase.from('profiles').insert({
            id: user.id,
            full_name: user.user_metadata?.full_name || user.email?.split('@')[0],
            avatar_url: user.user_metadata?.avatar_url || null,
            username: user.email?.split('@')[0] + Math.floor(Math.random() * 1000)
        });
    }
}

// ─── AUTH: Login ───

async function loginWithEmail(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
}

async function loginWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: window.location.origin }
    });
    if (error) throw error;
    return data;
}

async function signupWithEmail(email, password, fullName) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: { full_name: fullName }
        }
    });
    if (error) throw error;
    return data;
}

async function logoutUser() {
    await supabase.auth.signOut();
    updateUIForLoggedOutUser();
    location.reload();
}

// ─── EXAMS ───

async function loadExams() {
    const { data, error } = await supabase
        .from('exams')
        .select('*')
        .order('name');
    
    if (error) {
        console.error('Error loading exams:', error);
        return;
    }
    
    // Render exams grid
    elements.examsGrid.innerHTML = data.map(exam => `
        <div class="exam-card" data-exam-id="${exam.id}" onclick="filterByExam(${exam.id})">
            <span class="exam-icon">${exam.icon || '📚'}</span>
            <div class="exam-name">${exam.name}</div>
            <div class="exam-category">${exam.category}</div>
        </div>
    `).join('');
    
    // Populate dropdown in add resource form
    elements.resourceExam.innerHTML = '<option value="">Select an exam</option>' +
        data.map(exam => `
            <option value="${exam.id}">${exam.name}</option>
        `).join('');
    
    // Populate filter dropdown
    elements.examFilter.innerHTML = '<option value="">All Exams</option>' +
        data.map(exam => `
            <option value="${exam.id}">${exam.name}</option>
        `).join('');
}

// ─── RESOURCES ───

async function loadResources(reset = true) {
    if (isLoading) return;
    isLoading = true;
    
    if (reset) {
        page = 0;
        hasMore = true;
        elements.resourcesGrid.innerHTML = `
            <div class="loading-state">
                <i class="fas fa-spinner fa-spin"></i>
                <p>Loading resources...</p>
            </div>
        `;
    }
    
    let query = supabase
        .from('resources')
        .select(`
            *,
            profiles (full_name, avatar_url),
            exams (name, icon)
        `);
    
    // Apply exam filter
    if (currentExamFilter) {
        query = query.eq('exam_id', parseInt(currentExamFilter));
    }
    
    // Apply search
    const searchTerm = elements.searchInput.value.trim();
    if (searchTerm) {
        query = query.ilike('title', `%${searchTerm}%`);
    }
    
    // Apply sorting
    if (currentSort === 'upvotes') {
        query = query.order('upvotes', { ascending: false });
    } else if (currentSort === 'newest') {
        query = query.order('created_at', { ascending: false });
    } else if (currentSort === 'oldest') {
        query = query.order('created_at', { ascending: true });
    }
    
    // Pagination
    const from = page * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
    
    const { data, error } = await query;
    
    if (error) {
        console.error('Error loading resources:', error);
        elements.resourcesGrid.innerHTML = `
            <div class="loading-state">
                <p>Error loading resources. Please try again.</p>
            </div>
        `;
        isLoading = false;
        return;
    }
    
    if (reset) {
        elements.resourcesGrid.innerHTML = '';
    }
    
    if (data.length === 0 && page === 0) {
        elements.resourcesGrid.innerHTML = `
            <div class="loading-state">
                <span style="font-size:3rem;display:block;">📭</span>
                <p>No resources found. Be the first to share!</p>
            </div>
        `;
        hasMore = false;
        isLoading = false;
        return;
    }
    
    // Render each resource
    data.forEach(resource => {
        const card = createResourceCard(resource);
        elements.resourcesGrid.appendChild(card);
    });
    
    hasMore = data.length === PAGE_SIZE;
    page++;
    isLoading = false;
    elements.loadMoreBtn.style.display = hasMore ? 'inline-flex' : 'none';
    
    // Update stats
    if (reset) {
        updateStats();
    }
}

function createResourceCard(resource) {
    const card = document.createElement('div');
    card.className = 'resource-card';
    
    const examName = resource.exams?.name || 'Unknown';
    const examIcon = resource.exams?.icon || '📚';
    const userName = resource.profiles?.full_name || 'Anonymous';
    const avatarUrl = resource.profiles?.avatar_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}`;
    const createdAt = new Date(resource.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    
    card.innerHTML = `
        <div class="resource-header">
            <span class="resource-exam">${examIcon} ${examName}</span>
            <span class="resource-date">${createdAt}</span>
        </div>
        <h4>${resource.title}</h4>
        <div class="resource-description">${resource.description || 'No description provided.'}</div>
        <a href="${resource.link}" target="_blank" class="resource-link">
            <i class="fas fa-external-link-alt"></i> Open Resource
        </a>
        <div class="resource-footer">
            <div class="vote-buttons">
                <button onclick="voteResource(${resource.id}, 1)" class="${hasUserVoted(resource.id, 1) ? 'voted-up' : ''}">
                    <i class="fas fa-arrow-up"></i>
                </button>
                <span class="vote-count" id="voteCount-${resource.id}">${resource.upvotes || 0}</span>
                <button onclick="voteResource(${resource.id}, -1)" class="${hasUserVoted(resource.id, -1) ? 'voted-down' : ''}">
                    <i class="fas fa-arrow-down"></i>
                </button>
            </div>
            <div style="display:flex;align-items:center;gap:12px;">
                <button class="comment-btn" onclick="openComments(${resource.id})">
                    <i class="fas fa-comment"></i> <span id="commentCount-${resource.id}">0</span>
                </button>
                <div class="resource-user">
                    <img src="${avatarUrl}" alt="${userName}" />
                    <span>${userName}</span>
                </div>
            </div>
        </div>
    `;
    
    // Load comment count for this resource
    loadCommentCount(resource.id);
    
    return card;
}

// ─── VOTING ───

let userVotes = {};

function hasUserVoted(resourceId, voteType) {
    const key = `${resourceId}-${voteType}`;
    return userVotes[key] || false;
}

async function voteResource(resourceId, voteType) {
    if (!currentUser) {
        alert('Please login to vote.');
        return;
    }
    
    // Check if user already voted
    const { data: existing, error: checkError } = await supabase
        .from('votes')
        .select('*')
        .eq('resource_id', resourceId)
        .eq('user_id', currentUser.id)
        .single();
    
    if (existing) {
        // User already voted, remove it (toggle off)
        const { error: deleteError } = await supabase
            .from('votes')
            .delete()
            .eq('resource_id', resourceId)
            .eq('user_id', currentUser.id);
        
        if (deleteError) {
            console.error('Error removing vote:', deleteError);
            return;
        }
        
        // Refresh the vote count
        refreshVoteCount(resourceId);
        return;
    }
    
    // Insert new vote
    const { error: insertError } = await supabase
        .from('votes')
        .insert({
            resource_id: resourceId,
            user_id: currentUser.id,
            vote_type: voteType
        });
    
    if (insertError) {
        console.error('Error voting:', insertError);
        alert('Error voting. Please try again.');
        return;
    }
    
    // Refresh the vote count
    refreshVoteCount(resourceId);
}

async function refreshVoteCount(resourceId) {
    const { data, error } = await supabase
        .from('resources')
        .select('upvotes, downvotes')
        .eq('id', resourceId)
        .single();
    
    if (data) {
        const countEl = document.getElementById(`voteCount-${resourceId}`);
        if (countEl) {
            countEl.textContent = data.upvotes || 0;
        }
    }
}

// ─── COMMENTS ───

async function openComments(resourceId) {
    currentResourceId = resourceId;
    elements.commentModal.classList.add('active');
    await loadComments(resourceId);
}

async function loadComments(resourceId) {
    const { data, error } = await supabase
        .from('comments')
        .select(`
            *,
            profiles (full_name, avatar_url)
        `)
        .eq('resource_id', resourceId)
        .order('created_at', { ascending: false });
    
    if (error) {
        console.error('Error loading comments:', error);
        elements.commentsContainer.innerHTML = '<p class="loading-state">Error loading comments.</p>';
        return;
    }
    
    if (data.length === 0) {
        elements.commentsContainer.innerHTML = `
            <div class="loading-state" style="padding:20px 0;">
                <p>No comments yet. Be the first!</p>
            </div>
        `;
        return;
    }
    
    elements.commentsContainer.innerHTML = data.map(comment => `
        <div class="comment-item">
            <div class="comment-header">
                <img src="${comment.profiles?.avatar_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(comment.profiles?.full_name || 'User')}`}" />
                <span class="comment-user">${comment.profiles?.full_name || 'Anonymous'}</span>
                <span class="comment-time">${new Date(comment.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
            </div>
            <div class="comment-text">${comment.content}</div>
        </div>
    `).join('');
}

async function loadCommentCount(resourceId) {
    const { count, error } = await supabase
        .from('comments')
        .select('*', { count: 'exact', head: true })
        .eq('resource_id', resourceId);
    
    if (!error) {
        const el = document.getElementById(`commentCount-${resourceId}`);
        if (el) el.textContent = count || 0;
    }
}

// ─── STATS ───

async function updateStats() {
    // Total resources
    const { count: resourceCount } = await supabase
        .from('resources')
        .select('*', { count: 'exact', head: true });
    elements.totalResources.textContent = resourceCount || 0;
    
    // Total users
    const { count: userCount } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true });
    elements.totalUsers.textContent = userCount || 0;
}

// ─── FILTERS ───

function filterByExam(examId) {
    currentExamFilter = examId;
    elements.examFilter.value = examId;
    
    // Highlight active exam
    document.querySelectorAll('.exam-card').forEach(card => {
        card.classList.toggle('active', parseInt(card.dataset.examId) === examId);
    });
    
    loadResources(true);
}

// ─── SEARCH ───

let searchTimeout;
elements.searchInput.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => loadResources(true), 500);
});

// ─── MODAL HELPERS ───

function openModal(modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ─── EVENT LISTENERS ───

// Auth buttons
elements.loginBtn.addEventListener('click', () => openModal(elements.loginModal));
elements.signupBtn.addEventListener('click', () => openModal(elements.signupModal));
elements.heroAddBtn.addEventListener('click', () => {
    if (!currentUser) {
        openModal(elements.loginModal);
        return;
    }
    openModal(elements.addResourceModal);
});

// Login form
elements.loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
        await loginWithEmail(elements.loginEmail.value, elements.loginPassword.value);
        closeModal(elements.loginModal);
        location.reload();
    } catch (error) {
        alert('Login failed: ' + error.message);
    }
});

// Signup form
elements.signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
        await signupWithEmail(
            elements.signupEmail.value,
            elements.signupPassword.value,
            elements.signupName.value
        );
        closeModal(elements.signupModal);
        location.reload();
    } catch (error) {
        alert('Signup failed: ' + error.message);
    }
});

// Google Login
elements.googleLoginBtn.addEventListener('click', async () => {
    try {
        await loginWithGoogle();
        closeModal(elements.loginModal);
    } catch (error) {
        alert('Google login failed: ' + error.message);
    }
});

elements.googleSignupBtn.addEventListener('click', async () => {
    try {
        await loginWithGoogle();
        closeModal(elements.signupModal);
    } catch (error) {
        alert('Google login failed: ' + error.message);
    }
});

// Switch between login and signup
elements.switchToSignup.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal(elements.loginModal);
    openModal(elements.signupModal);
});

elements.switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal(elements.signupModal);
    openModal(elements.loginModal);
});

// Close modals
elements.closeLoginModal.addEventListener('click', () => closeModal(elements.loginModal));
elements.closeSignupModal.addEventListener('click', () => closeModal(elements.signupModal));
elements.closeModal.addEventListener('click', () => closeModal(elements.addResourceModal));
elements.closeCommentModal.addEventListener('click', () => closeModal(elements.commentModal));

// Click outside to close
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal(e.target);
    }
});

// Logout
elements.logoutBtn.addEventListener('click', logoutUser);

// Resource form
elements.resourceForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    if (!currentUser) {
        alert('Please login first.');
        return;
    }
    
    const title = elements.resourceTitle.value.trim();
    const examId = parseInt(elements.resourceExam.value);
    const link = elements.resourceLink.value.trim();
    const description = elements.resourceDesc.value.trim();
    
    if (!title || !examId || !link) {
        alert('Please fill in all required fields.');
        return;
    }
    
    elements.submitResourceBtn.disabled = true;
    elements.submitResourceBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
    
    const { data, error } = await supabase
        .from('resources')
        .insert({
            title,
            exam_id: examId,
            link,
            description,
            user_id: currentUser.id
        });
    
    elements.submitResourceBtn.disabled = false;
    elements.submitResourceBtn.innerHTML = '<i class="fas fa-upload"></i> Share Resource';
    
    if (error) {
        alert('Error sharing resource: ' + error.message);
        return;
    }
    
    alert('Resource shared successfully! 🎉');
    closeModal(elements.addResourceModal);
    elements.resourceForm.reset();
    loadResources(true);
});

// Comment form
elements.commentForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    if (!currentUser) {
        alert('Please login to comment.');
        return;
    }
    
    const content = elements.commentInput.value.trim();
    if (!content) return;
    
    elements.submitCommentBtn.disabled = true;
    elements.submitCommentBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Posting...';
    
    const { error } = await supabase
        .from('comments')
        .insert({
            resource_id: currentResourceId,
            user_id: currentUser.id,
            content
        });
    
    elements.submitCommentBtn.disabled = false;
    elements.submitCommentBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Post Comment';
    
    if (error) {
        alert('Error posting comment: ' + error.message);
        return;
    }
    
    elements.commentInput.value = '';
    await loadComments(currentResourceId);
    loadCommentCount(currentResourceId);
});

// Exam filter
elements.examFilter.addEventListener('change', () => {
    currentExamFilter = elements.examFilter.value;
    loadResources(true);
});

// Sort filter
elements.sortFilter.addEventListener('change', () => {
    currentSort = elements.sortFilter.value;
    loadResources(true);
});

// Load more
elements.loadMoreBtn.addEventListener('click', () => loadResources(false));

// Profile link
elements.profileLink.addEventListener('click', () => {
    alert('Profile feature coming soon!');
});

elements.myResourcesLink.addEventListener('click', () => {
    alert('My Resources feature coming soon!');
});

// ─── HAMBURGER MENU ───

document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('open');
    });
});

// ─── NAV SCROLL EFFECT ───

window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
});

// ─── AUTH STATE LISTENER ───

supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN' && session?.user) {
        currentUser = session.user;
        updateUIForLoggedInUser(session.user);
        ensureProfile(session.user);
        location.reload();
    }
    if (event === 'SIGNED_OUT') {
        updateUIForLoggedOutUser();
    }
});

// ─── INIT ───

async function init() {
    await checkAuth();
    await loadExams();
    await loadResources(true);
}

init();

// ─── KEEP YOUR EXISTING FUNCTIONS BELOW ───
// (renderModels, renderCareers, renderResources, setupFilters, setupQuiz, setupNav, etc.)
