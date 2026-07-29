// ─── SUPABASE CONFIGURATION ───
const SUPABASE_URL = 'https://qawdfokessggqnjlfztn.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_y-fsbvqs6zvQj36T79mAVA_kCUGYr4m';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log('✅ app.js loaded successfully');
// ─── MULTI-LANGUAGE SUPPORT ───
let currentLang = localStorage.getItem('lang') || 'en';

const translations = {
    en: {
        // Nav
        appName: 'ExamHub',
        navExams: 'Exams',
        navResources: 'Resources',
        login: 'Login',
        signup: 'Sign Up',
        logout: 'Logout',
        profile: 'Profile',
        myResources: 'My Resources',
        searchPlaceholder: 'Search resources by title or exam...',
        
        // Hero
        heroBadge: "India's Largest Community Platform",
        heroTitle: 'Find <span class="gold">Exam Resources</span><br />Shared by <span class="gold">Toppers</span>',
        heroDesc: 'Join thousands of students sharing the best video lectures, notes, and preparation strategies for JEE, NEET, UPSC, SSC, Railways, and more. Learn from those who\'ve succeeded.',
        browseBtn: '📖 Browse Resources',
        shareBtn: '✨ Share Resources',
        statsResources: 'Resources Shared',
        statsUsers: 'Active Users',
        statsExams: 'Exams Covered',

        // Sections
        examsLabel: '📋 Categories',
        examsTitle: 'Browse by <span class="highlight">Exam</span>',
        examsDesc: 'Select an exam to see all resources shared by the community.',
        resourcesLabel: '📖 Community Resources',
        resourcesTitle: 'Latest <span class="highlight">Study Materials</span>',
        filterAll: 'All Exams',
        sortUpvotes: 'Most Upvoted',
        sortNewest: 'Newest First',
        sortOldest: 'Oldest First',
        loadMore: 'Load More',
        noResources: 'No resources found. Be the first to share!',
        loadingResources: 'Loading resources...',

        // Modals
        shareTitle: '✨ Share a Resource',
        shareDesc: 'Help fellow students by sharing useful study materials.',
        formTitle: 'Title *',
        formExam: 'Exam *',
        formLink: 'Resource Link *',
        formDesc: 'Description',
        formPlaceholderTitle: 'e.g., Best YouTube Playlist for JEE Physics',
        formPlaceholderLink: 'https://youtube.com/playlist?list=...',
        formPlaceholderDesc: "What's special about this resource? Any tips?",
        submitBtn: 'Share Resource',
        
        loginTitle: 'Welcome Back',
        loginDesc: 'Login to access all features.',
        loginEmail: 'Email',
        loginPassword: 'Password',
        loginBtnText: 'Login',
        googleBtn: 'Continue with Google',
        noAccount: "Don't have an account?",
        signupLink: 'Sign Up',

        signupTitle: 'Create Account',
        signupDesc: 'Join the community of learners.',
        signupName: 'Full Name',
        signupEmail: 'Email',
        signupPassword: 'Password (min 6 chars)',
        signupBtnText: 'Sign Up',
        haveAccount: 'Already have an account?',
        loginLink: 'Login',

        commentTitle: '💬 Comments',
        commentPlaceholder: 'Share your thoughts or ask a question...',
        commentPost: 'Post Comment',
        noComments: 'No comments yet. Be the first!',

        // Dynamic Card Labels
        openResource: 'Open Resource',
        noDesc: 'No description provided.',
        uploadedBy: 'Anonymous'
    },
    hi: {
        // Nav
        appName: 'एग्जामहब',
        navExams: 'परीक्षाएं',
        navResources: 'संसाधन',
        login: 'लॉगिन',
        signup: 'साइन अप',
        logout: 'लॉग आउट',
        profile: 'प्रोफ़ाइल',
        myResources: 'मेरे संसाधन',
        searchPlaceholder: 'शीर्षक या परीक्षा से खोजें...',
        
        // Hero
        heroBadge: 'भारत का सबसे बड़ा कम्युनिटी प्लेटफॉर्म',
        heroTitle: 'टॉपर्स द्वारा साझा किए गए <span class="gold">परीक्षा संसाधन</span> खोजें',
        heroDesc: 'JEE, NEET, UPSC, SSC, रेलवे और अन्य परीक्षाओं के लिए सर्वश्रेष्ठ वीडियो लेक्चर, नोट्स और तैयारी रणनीतियाँ साझा करने वाले हजारों छात्रों से जुड़ें।',
        browseBtn: '📖 संसाधन ब्राउज़ करें',
        shareBtn: '✨ संसाधन साझा करें',
        statsResources: 'साझा संसाधन',
        statsUsers: 'सक्रिय उपयोगकर्ता',
        statsExams: 'परीक्षाएं कवर',

        // Sections
        examsLabel: '📋 श्रेणियाँ',
        examsTitle: '<span class="highlight">परीक्षा</span> के अनुसार ब्राउज़ करें',
        examsDesc: 'समुदाय द्वारा साझा किए गए सभी संसाधनों को देखने के लिए एक परीक्षा चुनें।',
        resourcesLabel: '📖 सामुदायिक संसाधन',
        resourcesTitle: 'नवीनतम <span class="highlight">अध्ययन सामग्री</span>',
        filterAll: 'सभी परीक्षाएं',
        sortUpvotes: 'सबसे अधिक वोट',
        sortNewest: 'नवीनतम पहले',
        sortOldest: 'पुराना पहले',
        loadMore: 'और लोड करें',
        noResources: 'कोई संसाधन नहीं मिला। साझा करने वाले पहले व्यक्ति बनें!',
        loadingResources: 'संसाधन लोड हो रहे हैं...',

        // Modals
        shareTitle: '✨ एक संसाधन साझा करें',
        shareDesc: 'उपयोगी अध्ययन सामग्री साझा करके साथी छात्रों की मदद करें।',
        formTitle: 'शीर्षक *',
        formExam: 'परीक्षा *',
        formLink: 'संसाधन लिंक *',
        formDesc: 'विवरण',
        formPlaceholderTitle: 'जैसे, JEE फिजिक्स के लिए सर्वश्रेष्ठ YouTube प्लेलिस्ट',
        formPlaceholderLink: 'https://youtube.com/playlist?list=...',
        formPlaceholderDesc: 'इस संसाधन में विशेष क्या है? कोई टिप्स?',
        submitBtn: 'संसाधन साझा करें',
        
        loginTitle: 'वापसी पर स्वागत है',
        loginDesc: 'सभी सुविधाओं तक पहुंचने के लिए लॉगिन करें।',
        loginEmail: 'ईमेल',
        loginPassword: 'पासवर्ड',
        loginBtnText: 'लॉगिन',
        googleBtn: 'Google के साथ जारी रखें',
        noAccount: 'खाता नहीं है?',
        signupLink: 'साइन अप करें',

        signupTitle: 'खाता बनाएं',
        signupDesc: 'शिक्षार्थियों के समुदाय में शामिल हों।',
        signupName: 'पूरा नाम',
        signupEmail: 'ईमेल',
        signupPassword: 'पासवर्ड (न्यूनतम 6 अक्षर)',
        signupBtnText: 'साइन अप',
        haveAccount: 'पहले से खाता है?',
        loginLink: 'लॉगिन',

        commentTitle: '💬 टिप्पणियाँ',
        commentPlaceholder: 'अपने विचार साझा करें या कोई प्रश्न पूछें...',
        commentPost: 'टिप्पणी पोस्ट करें',
        noComments: 'अभी कोई टिप्पणी नहीं। पहले बनें!',

        // Dynamic Card Labels
        openResource: 'संसाधन खोलें',
        noDesc: 'कोई विवरण नहीं दिया गया।',
        uploadedBy: 'अज्ञात'
    }
};
function getBadge(reputation) {
    if (reputation >= 500) return '🏆';
    if (reputation >= 200) return '⭐';
    if (reputation >= 50) return '💪';
    if (reputation >= 10) return '📚';
    return '🌱';
}

// ─── TRANSLATION HELPERS ───
function t(key) {
    return translations[currentLang]?.[key] || translations.en[key] || key;
}

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('lang', lang);
    applyTranslations();
}

function applyTranslations() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = t(key);
        if (translation) {
            // If it contains HTML (like <span>), set innerHTML; else textContent
            if (translation.includes('<')) {
                el.innerHTML = translation;
            } else {
                el.textContent = translation;
            }
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });

    // Update the HTML lang attribute
    document.documentElement.lang = currentLang;
}

// ─── STATE ───
let currentUser = null;
let currentExamFilter = '';
let currentSort = 'upvotes';
let page = 0;
const PAGE_SIZE = 12;
let isLoading = false;
let hasMore = true;
let currentResourceId = null;
let userVotes = {};

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
    loginModal: $('loginModal'),
    loginForm: $('loginForm'),
    loginEmail: $('loginEmail'),
    loginPassword: $('loginPassword'),
    closeLoginModal: $('closeLoginModal'),
    switchToSignup: $('switchToSignup'),
    googleLoginBtn: $('googleLoginBtn'),
    signupModal: $('signupModal'),
    signupForm: $('signupForm'),
    signupName: $('signupName'),
    signupEmail: $('signupEmail'),
    signupPassword: $('signupPassword'),
    closeSignupModal: $('closeSignupModal'),
    switchToLogin: $('switchToLogin'),
    googleSignupBtn: $('googleSignupBtn'),
    addResourceModal: $('addResourceModal'),
    resourceForm: $('resourceForm'),
    resourceTitle: $('resourceTitle'),
    resourceExam: $('resourceExam'),
    resourceLink: $('resourceLink'),
    resourceDesc: $('resourceDesc'),
    closeModal: $('closeModal'),
    submitResourceBtn: $('submitResourceBtn'),
    commentModal: $('commentModal'),
    commentsContainer: $('commentsContainer'),
    commentForm: $('commentForm'),
    commentInput: $('commentInput'),
    closeCommentModal: $('closeCommentModal'),
    submitCommentBtn: $('submitCommentBtn'),
};

// ─── AUTH FUNCTIONS ───

async function checkAuth() {
    const { data: { user } } = await supabaseClient.auth.getUser();
    if (user) {
        currentUser = user;
        updateUIForLoggedInUser(user);
        await ensureProfile(user);
        await loadUserVotes();
    }
}

function updateUIForLoggedInUser(user) {
    if (elements.authLinks) elements.authLinks.style.display = 'none';
    if (elements.userMenu) elements.userMenu.style.display = 'flex';
    if (elements.userAvatar) {
        elements.userAvatar.src = user.user_metadata?.avatar_url || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(user.user_metadata?.full_name || user.email);
    }
    if (elements.userName) {
        elements.userName.textContent = user.user_metadata?.full_name || user.email?.split('@')[0] || 'User';
    }
}

function updateUIForLoggedOutUser() {
    if (elements.authLinks) elements.authLinks.style.display = 'flex';
    if (elements.userMenu) elements.userMenu.style.display = 'none';
    currentUser = null;
    userVotes = {};
}

async function ensureProfile(user) {
    const { data, error } = await supabaseClient
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
    
    if (error && error.code === 'PGRST116') {
        await supabaseClient.from('profiles').insert({
            id: user.id,
            full_name: user.user_metadata?.full_name || user.email?.split('@')[0],
            avatar_url: user.user_metadata?.avatar_url || null,
            username: user.email?.split('@')[0] + Math.floor(Math.random() * 1000)
        });
    }
}

async function loadUserVotes() {
    if (!currentUser) return;
    
    const { data, error } = await supabaseClient
        .from('votes')
        .select('resource_id, vote_type')
        .eq('user_id', currentUser.id);
    
    if (error) {
        console.error('Error loading user votes:', error);
        return;
    }
    
    data.forEach(vote => {
        userVotes[`${vote.resource_id}-${vote.vote_type}`] = true;
    });
}

async function loginWithEmail(email, password) {
    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
}

async function loginWithGoogle() {
    const { data, error } = await supabaseClient.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: window.location.origin }
    });
    if (error) throw error;
    return data;
}

async function signupWithEmail(email, password, fullName) {
    const { data, error } = await supabaseClient.auth.signUp({
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
    await supabaseClient.auth.signOut();
    updateUIForLoggedOutUser();
    location.reload();
}

// ─── EXAMS ───

async function loadExams() {
    if (!elements.examsGrid) return;
    
    const { data, error } = await supabaseClient
        .from('exams')
        .select('*')
        .order('sector', { ascending: true })
        .order('name', { ascending: true });
    
    if (error) {
        console.error('Error loading exams:', error);
        return;
    }
    
    // Group exams by sector
    const grouped = data.reduce((acc, exam) => {
        const sector = exam.sector || 'Other';
        if (!acc[sector]) acc[sector] = [];
        acc[sector].push(exam);
        return acc;
    }, {});
    
    // Define sector order for display
    const sectorOrder = [
        'Skill Development',  // ⬅️ ADD THIS LINE
        'Foundation', 
        'Engineering', 
        'Medical', 
        'Government Jobs', 
        'Management', 
        'Law', 
        'Design', 
        'Other'
    ];
    
    let html = '';
    sectorOrder.forEach(sector => {
        const exams = grouped[sector];
        if (!exams || exams.length === 0) return;
        
        // Sector header
        const sectorIcons = {
            'Skill Development': '🚀',  // ⬅️ ADD THIS LINE
            'Foundation': '🏫',
            'Engineering': '🔬',
            'Medical': '🩺',
            'Government Jobs': '🏛️',
            'Management': '💼',
            'Law': '⚖️',
            'Design': '🎨',
            'Other': '📚'
        };
        const icon = sectorIcons[sector] || '📚';
        
        html += `
            <div class="exam-sector">
                <div class="exam-sector-header">
                    <span class="exam-sector-icon">${icon}</span>
                    <h3 class="exam-sector-title">${sector}</h3>
                    <span class="exam-sector-count">${exams.length} exams</span>
                </div>
                <div class="exam-sector-grid">
                    ${exams.map(exam => `
                        <div class="exam-card" data-exam-id="${exam.id}" onclick="filterByExam(${exam.id})">
                            <span class="exam-icon">${exam.icon || '📚'}</span>
                            <div class="exam-name">${exam.name}</div>
                            <div class="exam-category">${exam.category || exam.level || ''}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });
    
    elements.examsGrid.innerHTML = html;
    
    // Populate dropdowns (keep existing logic)
    if (elements.resourceExam) {
        elements.resourceExam.innerHTML = '<option value="">Select an exam</option>' +
            data.map(exam => `
                <option value="${exam.id}">${exam.name}</option>
            `).join('');
    }
    
    if (elements.examFilter) {
        elements.examFilter.innerHTML = '<option value="">All Exams</option>' +
            data.map(exam => `
                <option value="${exam.id}">${exam.name}</option>
            `).join('');
    }
}
// ─── SECTOR FILTERS ───
function setupSectorFilters() {
    const filters = document.querySelectorAll('.sector-filter-btn');
    if (!filters.length) return;

    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            filters.forEach(b => b.classList.remove('active'));
            // Add active class to clicked
            btn.classList.add('active');

            const sector = btn.dataset.sector;
            const sectors = document.querySelectorAll('.exam-sector');

            sectors.forEach(sectorEl => {
                if (sector === 'all') {
                    sectorEl.style.display = 'block';
                } else {
                    // Check if the sector header matches the clicked sector
                    const header = sectorEl.querySelector('.exam-sector-title');
                    if (header && header.textContent.trim() === sector) {
                        sectorEl.style.display = 'block';
                    } else {
                        sectorEl.style.display = 'none';
                    }
                }
            });
        });
    });
}
// ─── RESOURCES ───

async function loadResources(reset = true) {
    if (isLoading) return;
    isLoading = true;
    
    if (!elements.resourcesGrid) {
        isLoading = false;
        return;
    }
    
    if (reset) {
        page = 0;
        hasMore = true;
        elements.resourcesGrid.innerHTML = `
    <div class="loading-state">
        <i class="fas fa-spinner fa-spin"></i>
        <p>${t('loadingResources')}</p>
    </div>
`;
    }
    
    let query = supabaseClient
        .from('resources')
        .select(`
            *,
            profiles (full_name, avatar_url),
            exams (name, icon)
        `);
    
    if (currentExamFilter) {
        query = query.eq('exam_id', parseInt(currentExamFilter));
    }
    
    if (elements.searchInput) {
        const searchTerm = elements.searchInput.value.trim();
        if (searchTerm) {
            query = query.ilike('title', `%${searchTerm}%`);
        }
    }
    
    if (currentSort === 'upvotes') {
        query = query.order('upvotes', { ascending: false });
    } else if (currentSort === 'newest') {
        query = query.order('created_at', { ascending: false });
    } else if (currentSort === 'oldest') {
        query = query.order('created_at', { ascending: true });
    }
    
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
        <p>${t('noResources')}</p>
    </div>
`;
        hasMore = false;
        isLoading = false;
        return;
    }
    
    data.forEach(resource => {
        const card = createResourceCard(resource);
        elements.resourcesGrid.appendChild(card);
    });
    
    hasMore = data.length === PAGE_SIZE;
    page++;
    isLoading = false;
    if (elements.loadMoreBtn) {
        elements.loadMoreBtn.style.display = hasMore ? 'inline-flex' : 'none';
    }
    
    if (reset) {
        updateStats();
    }
}
function createResourceCard(resource) {
    const card = document.createElement('div');
    card.className = 'resource-card';
    
    const examName = resource.exams?.name || 'Unknown';
    const examIcon = resource.exams?.icon || '📚';
    const userName = resource.profiles?.full_name || t('uploadedBy');
    const avatarUrl = resource.profiles?.avatar_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}`;
    const createdAt = new Date(resource.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    
    const upvoted = hasUserVoted(resource.id, 1);
    const downvoted = hasUserVoted(resource.id, -1);
    
    card.innerHTML = `
        <div class="resource-header">
            <span class="resource-exam">${examIcon} ${examName}</span>
            <span class="resource-date">${createdAt}</span>
        </div>
        <h4>${resource.title}</h4>
        <div class="resource-description">${resource.description || t('noDesc')}</div>
        
        <!-- ====== APP / WEB LINK ====== -->
        ${resource.resource_type === 'app' ? `
            <a href="${resource.link}" target="_blank" class="resource-app-link">
                📱 Download App
                <span class="app-store-badge">Available on Store</span>
            </a>
        ` : `
            <a href="${resource.link}" target="_blank" class="resource-link">
                <i class="fas fa-external-link-alt"></i> ${t('openResource')}
            </a>
        `}
        
        <!-- ====== AFFILIATE LINK (BOOK PURCHASE) ====== -->
        ${resource.affiliate_link ? `
            <div class="resource-affiliate-section">
                <a href="${resource.affiliate_link}" target="_blank" class="resource-affiliate-link" rel="nofollow sponsored">
                    <i class="fas fa-shopping-cart"></i> 📖 Buy Recommended Book
                    <span class="affiliate-badge">💰 Supports uploader</span>
                </a>
                <small class="affiliate-disclaimer">Affiliate Link: You pay the same price, uploader gets a commission.</small>
            </div>
        ` : ''}
        
        <div class="resource-footer">
            <div class="vote-buttons">
                <button onclick="voteResource(${resource.id}, 1)" class="${upvoted ? 'voted-up' : ''}">
                    <i class="fas fa-arrow-up"></i>
                </button>
                <span class="vote-count" id="voteCount-${resource.id}">${resource.upvotes || 0}</span>
                <button onclick="voteResource(${resource.id}, -1)" class="${downvoted ? 'voted-down' : ''}">
                    <i class="fas fa-arrow-down"></i>
                </button>
            </div>
            <div style="display:flex;align-items:center;gap:12px;">
                <button class="comment-btn" onclick="openComments(${resource.id})">
                    <i class="fas fa-comment"></i> <span id="commentCount-${resource.id}">0</span>
                </button>
                <div class="resource-user">
                    <img src="${avatarUrl}" alt="${userName}" />
                    <span>${getBadge(resource.profiles?.reputation || 0)} ${userName}</span>
                </div>
            </div>
        </div>
    `;
    
    loadCommentCount(resource.id);
    return card;
}
function hasUserVoted(resourceId, voteType) {
    const key = `${resourceId}-${voteType}`;
    return !!userVotes[key];
}
async function voteResource(resourceId, voteType) {
    if (!currentUser) {
        alert('Please login to vote.');
        return;
    }
    
    const existingUp = hasUserVoted(resourceId, 1);
    const existingDown = hasUserVoted(resourceId, -1);
    
    // Remove existing vote if toggling off
    if ((voteType === 1 && existingUp) || (voteType === -1 && existingDown)) {
        const { error: deleteError } = await supabaseClient
            .from('votes')
            .delete()
            .eq('resource_id', resourceId)
            .eq('user_id', currentUser.id);
        
        if (deleteError) {
            console.error('Error removing vote:', deleteError);
            return;
        }
        
        delete userVotes[`${resourceId}-${voteType}`];
        refreshVoteCount(resourceId);
        updateResourceCardVoteStatus(resourceId);
        return;
    }
    
    // Remove opposite vote if switching
    if ((voteType === 1 && existingDown) || (voteType === -1 && existingUp)) {
        const oppositeVoteType = voteType === 1 ? -1 : 1;
        const { error: deleteError } = await supabaseClient
            .from('votes')
            .delete()
            .eq('resource_id', resourceId)
            .eq('user_id', currentUser.id);
        
        if (deleteError) {
            console.error('Error removing opposite vote:', deleteError);
            return;
        }
        
        delete userVotes[`${resourceId}-${oppositeVoteType}`];
    }
    
    // Insert the new vote
    const { error: insertError } = await supabaseClient
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
    
    // ─── 🔥 NEW CODE: UPDATE REPUTATION & KARMA ───
    // This runs AFTER a successful vote to reward the resource owner
    try {
        // Get the resource owner's ID
        const { data: resourceData } = await supabaseClient
            .from('resources')
            .select('user_id')
            .eq('id', resourceId)
            .single();
        
        if (resourceData) {
            // Increase the owner's reputation by 2
            await supabaseClient
                .from('profiles')
                .update({ reputation: supabaseClient.sql`reputation + 2` })
                .eq('id', resourceData.user_id);
            
            // Give the resource owner +2 karma for getting an upvote
            await supabaseClient
                .from('profiles')
                .update({ karma: supabaseClient.sql`karma + 2` })
                .eq('id', resourceData.user_id);
        }
    } catch (repError) {
        console.error('Error updating reputation:', repError);
    }
    // ─── END OF NEW CODE ───
    
    userVotes[`${resourceId}-${voteType}`] = true;
    refreshVoteCount(resourceId);
    updateResourceCardVoteStatus(resourceId);
}


function updateResourceCardVoteStatus(resourceId) {
    const upBtn = document.querySelector(`button[onclick="voteResource(${resourceId}, 1)"]`);
    const downBtn = document.querySelector(`button[onclick="voteResource(${resourceId}, -1)"]`);
    
    if (upBtn) {
        upBtn.classList.toggle('voted-up', hasUserVoted(resourceId, 1));
    }
    if (downBtn) {
        downBtn.classList.toggle('voted-down', hasUserVoted(resourceId, -1));
    }
}

async function refreshVoteCount(resourceId) {
    const { data, error } = await supabaseClient
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

async function openComments(resourceId) {
    currentResourceId = resourceId;
    if (elements.commentModal) {
        elements.commentModal.classList.add('active');
    }
    await loadComments(resourceId);
}

async function loadComments(resourceId) {
    const { data, error } = await supabaseClient
        .from('comments')
        .select(`
            *,
            profiles (full_name, avatar_url)
        `)
        .eq('resource_id', resourceId)
        .order('created_at', { ascending: false });
    
    if (error) {
        console.error('Error loading comments:', error);
        if (elements.commentsContainer) {
            elements.commentsContainer.innerHTML = '<p class="loading-state">Error loading comments.</p>';
        }
        return;
    }
    
    if (data.length === 0) {
        if (elements.commentsContainer) {
            elements.commentsContainer.innerHTML = `
                <div class="loading-state" style="padding:20px 0;">
                    <p>No comments yet. Be the first!</p>
                </div>
            `;
        }
        return;
    }
    
    if (elements.commentsContainer) {
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
}

async function loadCommentCount(resourceId) {
    const { count, error } = await supabaseClient
        .from('comments')
        .select('*', { count: 'exact', head: true })
        .eq('resource_id', resourceId);
    
    if (!error) {
        const el = document.getElementById(`commentCount-${resourceId}`);
        if (el) el.textContent = count || 0;
    }
}

async function updateStats() {
    const { count: resourceCount } = await supabaseClient
        .from('resources')
        .select('*', { count: 'exact', head: true });
    if (elements.totalResources) {
        elements.totalResources.textContent = resourceCount || 0;
    }
    
    const { count: userCount } = await supabaseClient
        .from('profiles')
        .select('*', { count: 'exact', head: true });
    if (elements.totalUsers) {
        elements.totalUsers.textContent = userCount || 0;
    }
}

function filterByExam(examId) {
    currentExamFilter = examId;
    if (elements.examFilter) {
        elements.examFilter.value = examId;
    }
    
    document.querySelectorAll('.exam-card').forEach(card => {
        card.classList.toggle('active', parseInt(card.dataset.examId) === examId);
    });
    
    loadResources(true);
}

let searchTimeout;
if (elements.searchInput) {
    elements.searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => loadResources(true), 500);
    });
}

function openModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ─── EVENT LISTENERS ───

if (elements.loginBtn) {
    elements.loginBtn.addEventListener('click', () => openModal(elements.loginModal));
}

if (elements.signupBtn) {
    elements.signupBtn.addEventListener('click', () => openModal(elements.signupModal));
}

if (elements.heroAddBtn) {
    elements.heroAddBtn.addEventListener('click', () => {
        if (!currentUser) {
            openModal(elements.loginModal);
            return;
        }
        openModal(elements.addResourceModal);
    });
}

if (elements.loginForm) {
    elements.loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        try {
            await loginWithEmail(elements.loginEmail.value, elements.loginPassword.value);
            closeModal(elements.loginModal);
        } catch (error) {
            alert('Login failed: ' + error.message);
        }
    });
}

if (elements.signupForm) {
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
}

if (elements.googleLoginBtn) {
    elements.googleLoginBtn.addEventListener('click', async () => {
        try {
            await loginWithGoogle();
            closeModal(elements.loginModal);
        } catch (error) {
            alert('Google login failed: ' + error.message);
        }
    });
}

if (elements.googleSignupBtn) {
    elements.googleSignupBtn.addEventListener('click', async () => {
        try {
            await loginWithGoogle();
            closeModal(elements.signupModal);
        } catch (error) {
            alert('Google login failed: ' + error.message);
        }
    });
}

if (elements.switchToSignup) {
    elements.switchToSignup.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(elements.loginModal);
        openModal(elements.signupModal);
    });
}

if (elements.switchToLogin) {
    elements.switchToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(elements.signupModal);
        openModal(elements.loginModal);
    });
}

if (elements.closeLoginModal) {
    elements.closeLoginModal.addEventListener('click', () => closeModal(elements.loginModal));
}

if (elements.closeSignupModal) {
    elements.closeSignupModal.addEventListener('click', () => closeModal(elements.signupModal));
}

if (elements.closeModal) {
    elements.closeModal.addEventListener('click', () => closeModal(elements.addResourceModal));
}

if (elements.closeCommentModal) {
    elements.closeCommentModal.addEventListener('click', () => closeModal(elements.commentModal));
}

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal(e.target);
    }
});

if (elements.logoutBtn) {
    elements.logoutBtn.addEventListener('click', logoutUser);
}

if (elements.resourceForm) {
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
        const resourceType = document.getElementById('resourceType').value;
const affiliateLink = document.getElementById('affiliateLink').value.trim();
        if (!title || !examId || !link) {
            alert('Please fill in all required fields.');
            return;
        }
        
        elements.submitResourceBtn.disabled = true;
        elements.submitResourceBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
        
        const { data, error } = await supabaseClient
            .from('resources')
            .insert({
                title,
                exam_id: examId,
                link,
                description,
                user_id: currentUser.id,
                resource_type: resourceType,        // ⬅️ NEW
                affiliate_link: affiliateLink || null  // ⬅️ NEW
            });
        
        elements.submitResourceBtn.disabled = false;
        elements.submitResourceBtn.innerHTML = '<i class="fas fa-upload"></i> Share Resource';
        
        if (error) {
            alert('Error sharing resource: ' + error.message);
            return;
        }
        
        alert('Resource shared successfully! 🎉');
        
        // ─── 🔥 ADD REPUTATION FOR UPLOADING ───
        try {
            await supabaseClient
                .from('profiles')
                .update({ reputation: supabaseClient.sql`reputation + 1` })
                .eq('id', currentUser.id);
            console.log('✅ +1 Reputation added for upload!');
        } catch (repError) {
            console.error('Error updating reputation:', repError);
        }
        
        closeModal(elements.addResourceModal);
        elements.resourceForm.reset();
        loadResources(true);
    });
}
if (elements.commentForm) {
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
        
        const { error } = await supabaseClient
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
}

if (elements.examFilter) {
    elements.examFilter.addEventListener('change', () => {
        currentExamFilter = elements.examFilter.value;
        loadResources(true);
    });
}

if (elements.sortFilter) {
    elements.sortFilter.addEventListener('change', () => {
        currentSort = elements.sortFilter.value;
        loadResources(true);
    });
}

if (elements.loadMoreBtn) {
    elements.loadMoreBtn.addEventListener('click', () => loadResources(false));
}

if (elements.profileLink) {
    elements.profileLink.addEventListener('click', () => {
        alert('Profile feature coming soon!');
    });
}

if (elements.myResourcesLink) {
    elements.myResourcesLink.addEventListener('click', () => {
        alert('My Resources feature coming soon!');
    });
}

// ─── HAMBURGER MENU ───

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        if (navLinks) navLinks.classList.toggle('open');
    });
}

if (navLinks) {
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });
}

// ─── NAV SCROLL EFFECT ───

window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (nav) {
        if (window.scrollY > 40) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    }
});

// ─── AUTH STATE LISTENER ───

supabaseClient.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN' && session?.user) {
        currentUser = session.user;
        updateUIForLoggedInUser(session.user);
        ensureProfile(session.user);
        loadUserVotes();
    }
    if (event === 'SIGNED_OUT') {
        updateUIForLoggedOutUser();
    }
});
// ─── LEADERBOARD (DOUBLE-SAFE) ───
async function loadLeaderboard() {
    const container = document.getElementById('leaderboardContainer');
    if (!container) return;

    // Only fetch users with reputation > 0, sorted descending, limit to 10
    const { data, error } = await supabaseClient
        .from('profiles')
        .select('full_name, reputation, avatar_url')
        .gt('reputation', 0)  // Database filter
        .order('reputation', { ascending: false })
        .limit(10);

    if (error) {
        console.error('Error loading leaderboard:', error);
        container.innerHTML = `
            <div class="leaderboard-empty">
                <span class="empty-icon">⚠️</span>
                <p>Failed to load leaderboard.</p>
            </div>
        `;
        return;
    }

    // Double safety: filter out any user with reputation <= 0
    const filteredData = (data || []).filter(user => (user.reputation || 0) > 0);

    if (filteredData.length === 0) {
        container.innerHTML = `
            <div class="leaderboard-empty">
                <span class="empty-icon">🚀</span>
                <p style="font-size:1.1rem;font-weight:600;color:var(--text-primary);">No contributors yet!</p>
                <p style="font-size:0.9rem;">Be the first to share a resource and get featured here.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filteredData.map((user, index) => {
        let rankClass = '';
        let rankEmoji = '';
        let topTag = '';
        let topTagClass = 'top-tag hidden';

        if (index === 0) { 
            rankClass = 'rank-1'; 
            rankEmoji = '👑'; 
            topTag = '🏆 #1 Contributor';
            topTagClass = 'top-tag';
        } else if (index === 1) { 
            rankClass = 'rank-2'; 
            rankEmoji = '🥈'; 
            topTag = '🥈 #2';
            topTagClass = 'top-tag';
        } else if (index === 2) { 
            rankClass = 'rank-3'; 
            rankEmoji = '🥉'; 
            topTag = '🥉 #3';
            topTagClass = 'top-tag';
        } else {
            rankEmoji = `<span class="rank-number">#${index + 1}</span>`;
        }

        const badge = getBadge(user.reputation || 0);
        const displayName = user.full_name || 'Anonymous';
        const avatar = user.avatar_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&size=72&background=f5c542&color=0b0e1a&bold=true`;
        const rep = user.reputation || 0;
        const karma = user.karma || 0;

        return `
            <div class="leaderboard-card ${rankClass}">
                <div class="rank-badge">${rankEmoji}</div>
                <img class="leaderboard-avatar" src="${avatar}" alt="${displayName}" loading="lazy" />
                <div class="leaderboard-name">${displayName}</div>
                <div class="leaderboard-badge">${badge}</div>
                <span class="${topTagClass}">${topTag}</span>
                <div class="leaderboard-stats">
                    <div class="stat-item">
                        <span class="stat-number">${rep}</span>
                        <span class="stat-label">XP</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">${karma}</span>
                        <span class="stat-label">Karma</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}
// ─── UPDATE TAB COUNTS ───
async function updateTabCounts() {
    // Count resources
    const { count: resourceCount } = await supabaseClient
        .from('resources')
        .select('*', { count: 'exact', head: true });
    
    const examBtn = document.querySelector('[data-tab="exams"]');
    const resourceBtn = document.querySelector('[data-tab="resources"]');
    
    if (examBtn) examBtn.textContent = `📚 Exams (${resourceCount || 0})`;
    if (resourceBtn) resourceBtn.textContent = `📖 Resources (${resourceCount || 0})`;
}
// ─── SMART SEARCH PLACEHOLDER ───
async function setSmartPlaceholder() {
    const input = document.getElementById('searchInput');
    if (!input) return;

    // Fetch top 3 most popular exams
    const { data } = await supabaseClient
        .from('resources')
        .select('exam_id, exams(name)')
        .not('exam_id', 'is', null)
        .limit(3);
    
    if (data && data.length > 0) {
        const examNames = data.map(r => r.exams?.name).filter(Boolean);
        if (examNames.length > 0) {
            input.placeholder = `🔍 Search for ${examNames.join(', ')}...`;
        }
    }
}
// ─── RECENT RESOURCES (Home Tab) ───
async function loadRecentResources() {
    const container = document.getElementById('recentResourcesContainer');
    if (!container) return;

    const { data, error } = await supabaseClient
        .from('resources')
        .select(`
            *,
            profiles (full_name),
            exams (name, icon)
        `)
        .order('created_at', { ascending: false })
        .limit(6);

    if (error || !data || data.length === 0) {
        container.innerHTML = `
            <div class="recent-resource-item" style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:30px 20px;">
                📭 No resources yet. Be the first to share!
            </div>
        `;
        return;
    }

    container.innerHTML = data.map(resource => `
        <div class="recent-resource-item" onclick="switchTab('resources')">
            <div class="recent-exam">${resource.exams?.icon || '📚'} ${resource.exams?.name || 'General'}</div>
            <div class="recent-title-text">${resource.title}</div>
            <div class="recent-user">👤 ${resource.profiles?.full_name || 'Anonymous'} • ${new Date(resource.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
        </div>
    `).join('');
}

// ─── SWITCH TAB HELPER ───
function switchTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabName);
    });
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.toggle('active', content.id === `tab-${tabName}`);
    });
    if (tabName === 'resources') loadResources(true);
    if (tabName === 'leaderboard') loadLeaderboard();
}
// ─── STUDY PODS ───
let currentRoomId = null;
let currentPodExamId = null;
let podTimerInterval = null;
let podTimeLeft = 2700; // 45 minutes in seconds

// Populate Exam dropdown in Pod Creator
async function populatePodExams() {
    const select = document.getElementById('podExam');
    if (!select) return;

    const { data, error } = await supabaseClient
        .from('exams')
        .select('id, name')
        .order('name');

    if (error) {
        console.error('Error loading exams for pods:', error);
        return;
    }

    select.innerHTML = '<option value="">Select an exam</option>' +
        data.map(exam => `<option value="${exam.id}">${exam.name}</option>`).join('');
}

// Create a new Study Pod
async function createPod() {
    const user = await supabaseClient.auth.getUser();
    if (!user.data.user) {
        alert('Please login first to start a pod.');
        return;
    }

    const examId = document.getElementById('podExam').value;
    const topic = document.getElementById('podTopic').value.trim();
    const maxPeople = parseInt(document.querySelector('.pod-mode-btn.active')?.dataset.mode || '4');
    const userId = user.data.user.id;

    if (!examId) {
        alert('Please select an exam.');
        return;
    }

    // Generate a unique room code
    const roomCode = Math.random().toString(36).substring(2, 8).toUpperCase();

    // Insert the room
    const { data: roomData, error: roomError } = await supabaseClient
        .from('study_rooms')
        .insert({
            room_code: roomCode,
            host_id: userId,
            exam_id: parseInt(examId),
            topic: topic || null,
            max_people: maxPeople,
            current_people: 1,
            status: 'waiting'
        })
        .select()
        .single();

    if (roomError) {
        console.error('Error creating pod:', roomError);
        alert('Failed to create pod. Please try again.');
        return;
    }

    // Add the host as a participant
    await supabaseClient
        .from('room_participants')
        .insert({
            room_id: roomData.id,
            user_id: userId,
            is_host: true,
            is_ready: true
        });

    alert(`✅ Pod created! Share this code: ${roomCode}`);
    enterPodRoom(roomData.id);
}

// Join an existing pod using a code
async function joinPodByCode() {
    const code = prompt('Enter the 6-digit Pod Code:');
    if (!code) return;

    const { data, error } = await supabaseClient
        .from('study_rooms')
        .select('*')
        .eq('room_code', code.toUpperCase())
        .eq('status', 'waiting')
        .single();

    if (error || !data) {
        alert('❌ Invalid or expired pod code. Please check and try again.');
        return;
    }

    enterPodRoom(data.id);
}

// Enter the Pod Room (UI switch)
async function enterPodRoom(roomId) {
    const user = await supabaseClient.auth.getUser();
    if (!user.data.user) return;

    currentRoomId = roomId;

    // Get room details
    const { data: room, error } = await supabaseClient
        .from('study_rooms')
        .select('*, exams(name)')
        .eq('id', roomId)
        .single();

    if (error) {
        console.error('Error fetching room:', error);
        return;
    }

    // Add current user as participant if not already
    const { data: existing } = await supabaseClient
        .from('room_participants')
        .select('*')
        .eq('room_id', roomId)
        .eq('user_id', user.data.user.id)
        .single();

    if (!existing) {
        await supabaseClient
            .from('room_participants')
            .insert({
                room_id: roomId,
                user_id: user.data.user.id,
                is_host: false,
                is_ready: true
            });

        // Increment current_people
        await supabaseClient
            .from('study_rooms')
            .update({ current_people: room.current_people + 1 })
            .eq('id', roomId);
    }

    // Store exam ID for resource loading
    currentPodExamId = room.exam_id;

    // Show the pod room, hide main content
    document.getElementById('podRoom').style.display = 'flex';
    document.querySelector('.tab-content.active')?.classList.remove('active');
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));

    // Set room title
    document.getElementById('podRoomTitle').textContent = `📚 ${room.exams?.name || 'Study'} Pod`;

    // Load resources for this exam
    loadPodResources();

    // Load participants
    loadPodParticipants(roomId);

    // Load existing chat messages
    loadPodChat(roomId);

    // Listen for real-time updates (URL, participants, chat)
    listenToPodChanges(roomId);

    // Start timer
    startPodTimer();

    // Update the URL input and iframe if there's a shared URL
    if (room.shared_url) {
        document.getElementById('sharedIframe').src = room.shared_url;
        document.getElementById('sharedUrlInput').value = room.shared_url;
    }

    // Subscribe to presence
    subscribeToPodPresence(roomId);
}

// Load resources for the pod's exam
async function loadPodResources() {
    const container = document.getElementById('podResourceList');
    if (!container || !currentPodExamId) return;

    const { data, error } = await supabaseClient
        .from('resources')
        .select('id, title, link')
        .eq('exam_id', currentPodExamId)
        .limit(10);

    if (error || !data || data.length === 0) {
        container.innerHTML = '<span style="font-size:0.75rem; color:var(--text-muted);">No resources available for this exam.</span>';
        return;
    }

    container.innerHTML = data.map(resource => `
        <button onclick="loadResourceToPod(${resource.id})" style="background:var(--bg-card); border:1px solid rgba(255,255,255,0.06); color:var(--text-secondary); padding:4px 14px; border-radius:100px; font-size:0.7rem; cursor:pointer; white-space:nowrap; transition:var(--transition);">
            📄 ${resource.title.substring(0, 20)}${resource.title.length > 20 ? '...' : ''}
        </button>
    `).join('');
}

// Load a resource into the shared browser
async function loadResourceToPod(resourceId) {
    const { data, error } = await supabaseClient
        .from('resources')
        .select('link')
        .eq('id', resourceId)
        .single();

    if (data) {
        document.getElementById('sharedUrlInput').value = data.link;
        loadSharedUrl(data.link);
    }
}

// Load shared URL into iframe and broadcast to everyone
// ─── LOAD SHARED URL (HANDLES ALL YOUTUBE FORMATS) ───
async function loadSharedUrl(url) {
    if (!currentRoomId) return;

    let embedUrl = url;

    try {
        // 1. YouTube Watch URL (e.g., watch?v=VIDEO_ID)
        if (url.includes('youtube.com/watch')) {
            const urlObj = new URL(url);
            const videoId = urlObj.searchParams.get('v');
            if (videoId) {
                embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1`;
            }
        }
        // 2. YouTube Shorts (e.g., youtube.com/shorts/VIDEO_ID)
        else if (url.includes('youtube.com/shorts/')) {
            const videoId = url.split('shorts/')[1]?.split('?')[0];
            if (videoId) {
                embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1`;
            }
        }
        // 3. YouTube Playlist (e.g., youtube.com/playlist?list=LIST_ID)
        else if (url.includes('youtube.com/playlist')) {
            const urlObj = new URL(url);
            const listId = urlObj.searchParams.get('list');
            if (listId) {
                embedUrl = `https://www.youtube.com/embed/videoseries?list=${listId}&autoplay=1`;
            }
        }
        // 4. YouTu.be Short Link (e.g., youtu.be/VIDEO_ID)
        else if (url.includes('youtu.be/')) {
            const videoId = url.split('youtu.be/')[1]?.split('?')[0];
            if (videoId) {
                embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1`;
            }
        }
        // 5. YouTube Channel or User Page (CANNOT be embedded)
        else if (url.includes('youtube.com/@') || url.includes('youtube.com/c/') || url.includes('youtube.com/user/') || url.includes('youtube.com/channel/')) {
            alert('⚠️ YouTube Channel pages cannot be embedded. Please paste a specific VIDEO or PLAYLIST link instead.');
            embedUrl = 'about:blank';
        }
    } catch (e) {
        console.warn('URL parsing error, using original:', e);
    }

    const { error } = await supabaseClient
        .from('study_rooms')
        .update({
            shared_url: embedUrl,
            shared_url_updated_at: new Date().toISOString()
        })
        .eq('id', currentRoomId);

    if (error) {
        console.error('Error loading shared URL:', error);
        alert('Failed to load URL. Please try again.');
    }
}

// Listen for real-time changes in the pod
function listenToPodChanges(roomId) {
    // URL changes
    supabaseClient
        .channel('pod-url-' + roomId)
        .on(
            'postgres_changes',
            {
                event: 'UPDATE',
                schema: 'public',
                table: 'study_rooms',
                filter: `id=eq.${roomId}`
            },
            (payload) => {
                if (payload.new.shared_url) {
                    const iframe = document.getElementById('sharedIframe');
                    if (iframe && iframe.src !== payload.new.shared_url) {
                        iframe.src = payload.new.shared_url;
                        document.getElementById('sharedUrlInput').value = payload.new.shared_url;
                    }
                }
            }
        )
        .subscribe();

    // Participants changes
    supabaseClient
        .channel('pod-participants-' + roomId)
        .on(
            'postgres_changes',
            {
                event: '*',
                schema: 'public',
                table: 'room_participants',
                filter: `room_id=eq.${roomId}`
            },
            () => {
                loadPodParticipants(roomId);
            }
        )
        .subscribe();

    // Chat messages
    supabaseClient
        .channel('pod-chat-' + roomId)
        .on(
            'postgres_changes',
            {
                event: 'INSERT',
                schema: 'public',
                table: 'pod_chat_messages',
                filter: `room_id=eq.${roomId}`
            },
            (payload) => {
                displayChatMessage(payload.new);
            }
        )
        .subscribe();
}

// Load participants
async function loadPodParticipants(roomId) {
    const container = document.getElementById('podParticipantsList');
    if (!container) return;

    const { data, error } = await supabaseClient
        .from('room_participants')
        .select('user_id, is_host, profiles(full_name, avatar_url)')
        .eq('room_id', roomId);

    if (error || !data) return;

    container.innerHTML = data.map(p => `
        <div style="display:flex; align-items:center; gap:8px; padding:4px 8px; background:var(--bg-card); border-radius:6px;">
            <img src="${p.profiles?.avatar_url || 'https://ui-avatars.com/api/?name=' + (p.profiles?.full_name || 'User')}" style="width:24px; height:24px; border-radius:50%;" />
            <span style="font-size:0.85rem;">${p.profiles?.full_name || 'Anonymous'} ${p.is_host ? '👑' : ''}</span>
        </div>
    `).join('');

    // Update count correctly (fetch max_people from room)
const { data: roomData } = await supabaseClient
    .from('study_rooms')
    .select('max_people')
    .eq('id', roomId)
    .single();
const maxPeople = roomData?.max_people || 4;
document.getElementById('podPeopleCount').textContent = `👥 ${data.length}/${maxPeople}`;
}

// Send chat message
async function sendPodMessage() {
    const input = document.getElementById('podChatInput');
    const message = input.value.trim();
    if (!message || !currentRoomId) return;

    const user = await supabaseClient.auth.getUser();
    if (!user.data.user) return;

    await supabaseClient
        .from('pod_chat_messages')
        .insert({
            room_id: currentRoomId,
            user_id: user.data.user.id,
            message: message
        });

    input.value = '';
}

// Display chat message
function displayChatMessage(msg) {
    const container = document.getElementById('podChatMessages');
    if (!container) return;

    const div = document.createElement('div');
    div.style.cssText = 'padding:4px 8px; background:var(--bg-card); border-radius:4px;';
    div.innerHTML = `<strong style="color:var(--gold);">${msg.profiles?.full_name || 'Anonymous'}:</strong> ${msg.message}`;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

// Load existing chat messages
async function loadPodChat(roomId) {
    const container = document.getElementById('podChatMessages');
    if (!container) return;

    const { data, error } = await supabaseClient
        .from('pod_chat_messages')
        .select('*, profiles(full_name)')
        .eq('room_id', roomId)
        .order('created_at', { ascending: true });

    if (error || !data) return;

    container.innerHTML = '';
    data.forEach(msg => displayChatMessage(msg));
}

// Start the 45-minute timer
function startPodTimer() {
    if (podTimerInterval) clearInterval(podTimerInterval);
    podTimeLeft = 2700;
    updateTimerDisplay();

    podTimerInterval = setInterval(() => {
        podTimeLeft--;
        updateTimerDisplay();

        if (podTimeLeft <= 0) {
            clearInterval(podTimerInterval);
            alert('⏰ Time is up! Great job studying!');
        }
    }, 1000);
}

function updateTimerDisplay() {
    const mins = Math.floor(podTimeLeft / 60);
    const secs = podTimeLeft % 60;
    document.getElementById('podTimerDisplay').textContent =
        `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Leave pod
async function leavePod() {
    if (!currentRoomId) return;

    if (!confirm('Are you sure you want to leave the pod?')) return;

    const user = await supabaseClient.auth.getUser();
    if (user.data.user) {
        await supabaseClient
            .from('room_participants')
            .update({ left_at: new Date().toISOString() })
            .eq('room_id', currentRoomId)
            .eq('user_id', user.data.user.id);

        await supabaseClient
            .from('study_rooms')
            .update({ current_people: supabaseClient.sql`current_people - 1` })
            .eq('id', currentRoomId);
    }

    // Close the pod room
    document.getElementById('podRoom').style.display = 'none';
    if (podTimerInterval) clearInterval(podTimerInterval);
    currentRoomId = null;

    // Show the Study Pods tab again
    document.querySelector('[data-tab="pods"]')?.click();
    location.reload(); // Reload to reset everything
}

// Subscribe to presence (optional: shows who is online)
function subscribeToPodPresence(roomId) {
    // This is a placeholder for future presence features
    console.log('Subscribed to presence for room:', roomId);
}

// Load waiting pods
async function loadWaitingPods() {
    const container = document.getElementById('waitingPodsContainer');
    if (!container) return;

    const { data, error } = await supabaseClient
        .from('study_rooms')
        .select('*, exams(name), profiles(full_name)')
        .eq('status', 'waiting')
        .order('created_at', { ascending: false })
        .limit(10);

    if (error || !data || data.length === 0) {
        container.innerHTML = `
            <div class="loading-state" style="padding:20px 0;">
                <span style="font-size:2rem;display:block;">🤝</span>
                <p>No active pods right now. Create one!</p>
            </div>
        `;
        return;
    }

    container.innerHTML = data.map(room => `
        <div class="waiting-pod-item" style="background:var(--bg-card); border-radius:var(--radius-sm); padding:16px 20px; margin-bottom:12px; border:1px solid rgba(255,255,255,0.04); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
            <div>
                <h4 style="margin:0;">${room.exams?.name || 'Unknown Exam'}</h4>
                <span style="font-size:0.8rem; color:var(--text-muted);">${room.topic || 'General'}</span>
                <span style="font-size:0.75rem; color:var(--text-muted); display:block;">👥 ${room.current_people}/${room.max_people}</span>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
                <span style="font-size:0.7rem; background:var(--gold-dim); padding:2px 10px; border-radius:100px; color:var(--gold);">Code: ${room.room_code}</span>
                <button onclick="joinPodByCode()" class="btn-primary" style="padding:6px 18px; font-size:0.8rem;">Join</button>
            </div>
        </div>
    `).join('');
}

// ─── POD EVENT LISTENERS ───
document.addEventListener('DOMContentLoaded', () => {
    // Start Pod button
    document.getElementById('startPodBtn')?.addEventListener('click', createPod);

    // Load URL button
    document.getElementById('loadUrlBtn')?.addEventListener('click', () => {
        const url = document.getElementById('sharedUrlInput').value.trim();
        if (url) loadSharedUrl(url);
    });

    // Enter key on URL input
    document.getElementById('sharedUrlInput')?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') document.getElementById('loadUrlBtn').click();
    });

    // Leave pod button
    document.getElementById('leavePodBtn')?.addEventListener('click', leavePod);

    // Chat send button
    document.getElementById('podChatSendBtn')?.addEventListener('click', sendPodMessage);

    // Enter key on chat input
    document.getElementById('podChatInput')?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') sendPodMessage();
    });

    // Viewer tabs (Browser vs Whiteboard)
    document.querySelectorAll('.viewer-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.viewer-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const view = tab.dataset.view;
            document.getElementById('sharedBrowser').style.display = view === 'browser' ? 'flex' : 'none';
            document.getElementById('whiteboardPanel').style.display = view === 'whiteboard' ? 'flex' : 'none';
            if (view === 'whiteboard') {
    setTimeout(() => {
        if (window.resizeWhiteboard) window.resizeWhiteboard();
    }, 100);
}
        });
    });

// ─── POD MODE BUTTONS ───
document.querySelectorAll('.pod-mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.pod-mode-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});
}); // ⬅️ ADD THIS LINE TO CLOSE THE DOMContentLoaded LISTENER
// ─── WHITEBOARD SETUP ───
let currentTool = 'pen';
let currentColor = '#f5c542';
let isDrawing = false;
let lastX = 0, lastY = 0;

const canvas = document.getElementById('whiteboardCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d');

    // ─── INITIAL STROKE SETTINGS ───
    ctx.strokeStyle = currentColor;
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';  // Added for smoother lines

    // ─── RESIZE CANVAS (properly preserves white background) ───
    function resizeCanvas() {
        if (!canvas.parentElement) return;
        const rect = canvas.parentElement.getBoundingClientRect();
        // Set new size
        canvas.width = rect.width - 4;
        canvas.height = rect.height - 4;
        // Redraw white background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // Restore stroke style after resize
        ctx.strokeStyle = currentTool === 'eraser' ? '#ffffff' : currentColor;
        ctx.lineWidth = currentTool === 'eraser' ? 20 : 3;
    }

    // Initial resize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Expose resize for tab switcher
    window.resizeWhiteboard = resizeCanvas;

    // ─── DRAWING EVENTS ───
    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        const rect = canvas.getBoundingClientRect();
        lastX = e.clientX - rect.left;
        lastY = e.clientY - rect.top;
    });

    canvas.addEventListener('mousemove', (e) => {
        if (!isDrawing) return;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.stroke();

        lastX = x;
        lastY = y;
    });

    canvas.addEventListener('mouseup', () => { isDrawing = false; });
    canvas.addEventListener('mouseleave', () => { isDrawing = false; });

    // ─── TOOL BUTTONS ───
    document.querySelectorAll('.wb-tool').forEach(toolBtn => {
        toolBtn.addEventListener('click', () => {
            document.querySelectorAll('.wb-tool').forEach(t => t.classList.remove('active'));
            toolBtn.classList.add('active');
            currentTool = toolBtn.dataset.tool;

            if (currentTool === 'eraser') {
                ctx.strokeStyle = '#ffffff';
                ctx.lineWidth = 20;
            } else if (currentTool === 'clear') {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                // Reset to pen after clearing
                const penBtn = document.querySelector('.wb-tool[data-tool="pen"]');
                if (penBtn) penBtn.click();
            } else {
                ctx.strokeStyle = currentColor;
                ctx.lineWidth = 3;
            }
        });
    });

    // ─── COLOR PICKER ───
    document.getElementById('wbColor')?.addEventListener('input', (e) => {
        currentColor = e.target.value;
        if (currentTool === 'pen') {
            ctx.strokeStyle = currentColor;
        }
    });
}   
// ─── INIT ───
async function init() {
    await checkAuth();
    await loadExams();
    await loadResources(true);
    await loadLeaderboard();
    await loadRecentResources();  // ⬅️ ALREADY ADDED
    await updateTabCounts();      // ⬅️ ADD THIS LINE
    await setSmartPlaceholder(); // ⬅️ DON'T FORGET TO ADD THIS LINE INSIDE init()
    await populatePodExams();   // ⬅️ ADD THIS
    await loadWaitingPods();    // ⬅️ ADD THIS
    applyTranslations();
    setupSectorFilters();
    setupTabs(); // ⬅️ ADD THIS LINE
}

// ─── LANGUAGE SWITCHER (must be called after DOM loads) ───
document.addEventListener('DOMContentLoaded', () => {
    const langSwitcher = document.getElementById('langSwitcher');
    if (langSwitcher) {
        langSwitcher.value = currentLang;
        langSwitcher.addEventListener('change', (e) => {
            setLanguage(e.target.value);
            loadResources(true);
        });
    }
});
// ─── TAB SWITCHER (FIXED FOR PODS) ───
function setupTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = {
        home: document.getElementById('tab-home'),
        exams: document.getElementById('tab-exams'),
        leaderboard: document.getElementById('tab-leaderboard'),
        resources: document.getElementById('tab-resources'),
        pods: document.getElementById('tab-pods')  // ⬅️ THIS LINE WAS MISSING
    };

    if (!tabs.length) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update buttons
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Update content
            const tabName = tab.dataset.tab;
            Object.keys(contents).forEach(key => {
                const content = contents[key];
                if (content) {
                    content.classList.toggle('active', key === tabName);
                }
            });

            // Refresh content when switching tabs
            if (tabName === 'resources') loadResources(true);
            if (tabName === 'leaderboard') loadLeaderboard();
            if (tabName === 'pods') {
                // Load waiting pods and populate exam dropdown when clicking Pods tab
                loadWaitingPods();
                populatePodExams();
            }
        });
    });
}

// ─── START THE APP ───
init();
