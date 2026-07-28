// ─── ROLE MODELS DATA ───
const roleModels = [
    {
        name: 'Dr. A.P.J. Abdul Kalam',
        title: 'Missile Man of India',
        bio: 'From a small town in Tamil Nadu to the President of India. His journey inspires millions to dream beyond their circumstances.',
        achievement: '🇮🇳 Bharat Ratna • 11th President'
    },
    {
        name: 'Kalpana Chawla',
        title: 'Astronaut & Pioneer',
        bio: 'Born in Karnal, she became the first Indian woman in space. A symbol of courage, curiosity, and breaking barriers.',
        achievement: '🚀 NASA Astronaut • Padma Bhushan'
    },
    {
        name: 'Ratan Tata',
        title: 'Industrialist & Philanthropist',
        bio: 'Transformed the Tata Group into a global powerhouse while staying rooted in ethics and giving back to society.',
        achievement: '🏭 Padma Vibhushan • Legend of Industry'
    },
    {
        name: 'PV Sindhu',
        title: 'Badminton Champion',
        bio: 'From Hyderabad to Olympic silver and World Championship gold. She redefined what Indian women can achieve in sports.',
        achievement: '🏸 Olympic Medalist • Padma Bhushan'
    },
    {
        name: 'Sundar Pichai',
        title: 'CEO of Alphabet & Google',
        bio: 'Born in Chennai, he rose from humble beginnings to lead one of the world\'s most influential tech companies.',
        achievement: '💻 Forbes Top CEOs • IIT Kharagpur Alumnus'
    },
    {
        name: 'Mirabai Chanu',
        title: 'Weightlifting Star',
        bio: 'From a small village in Manipur to Olympic silver in Tokyo. Her grit and discipline are an inspiration to every young Indian.',
        achievement: '🏋️ Olympic Silver • Padma Shri'
    }
];

// ─── CAREER DATA (UPGRADED) ───
const careerData = [
    {
        id: 1,
        title: 'Software Engineer',
        category: 'tech',
        icon: '💻',
        desc: 'Build the future of India\'s digital economy. High demand in AI, cloud, and product development.',
        education: 'B.Tech/B.E. in CS/IT or MCA',
        salary: '₹6-30 LPA (Entry to Senior)',
        exams: 'JEE Main, GATE',
        colleges: 'IITs, NITs, IIITs, BITS Pilani',
        tags: ['AI/ML', 'Full Stack', 'Remote Work']
    },
    {
        id: 2,
        title: 'Data Scientist',
        category: 'tech',
        icon: '📊',
        desc: 'Turn data into decisions. One of the most sought-after roles with massive growth in Indian startups and MNCs.',
        education: 'B.Tech/M.Tech in CS/Stats or M.Sc Stats',
        salary: '₹8-35 LPA',
        exams: 'GATE, IIT JAM',
        colleges: 'IITs, ISI, IISC',
        tags: ['Python', 'ML', 'Analytics']
    },
    {
        id: 3,
        title: 'Investment Banker',
        category: 'business',
        icon: '🏦',
        desc: 'Drive India\'s financial markets. Work with top firms on M&A, IPOs, and wealth management.',
        education: 'MBA (Finance) or CFA',
        salary: '₹12-50 LPA',
        exams: 'CAT, GMAT, CFA',
        colleges: 'IIMs, ISB, XLRI',
        tags: ['Finance', 'MBA', 'High Pay']
    },
    {
        id: 4,
        title: 'Entrepreneur',
        category: 'business',
        icon: '🚀',
        desc: 'Build your own venture. India\'s startup ecosystem is booming with funding, mentors, and government support.',
        education: 'Any degree (MBA recommended)',
        salary: '₹5-100+ LPA (Varies)',
        exams: 'CAT (optional)',
        colleges: 'Any (IITs/IIMs recommended)',
        tags: ['Startup', 'Innovation', 'Leadership']
    },
    {
        id: 5,
        title: 'UX/UI Designer',
        category: 'creative',
        icon: '🎨',
        desc: 'Shape the user experience of products used by millions. A perfect blend of creativity and technology.',
        education: 'B.Des/B.Sc Design or B.Tech',
        salary: '₹5-25 LPA',
        exams: 'UCEED, NID DAT',
        colleges: 'IITs, NID, NIFT',
        tags: ['Design', 'Figma', 'User Research']
    },
    {
        id: 6,
        title: 'Digital Marketing Specialist',
        category: 'creative',
        icon: '📱',
        desc: 'Help brands grow in the digital world. India\'s internet boom has created endless opportunities.',
        education: 'BBA/MBA or B.Com',
        salary: '₹4-20 LPA',
        exams: 'CAT, MAT',
        colleges: 'IIMs, Symbiosis, MICA',
        tags: ['SEO', 'Content', 'Social Media']
    },
    {
        id: 7,
        title: 'Doctor (MBBS / MD)',
        category: 'science',
        icon: '🩺',
        desc: 'Serve the nation through healthcare. With India\'s growing population, doctors are always in high demand.',
        education: 'MBBS + MD/MS',
        salary: '₹8-50 LPA',
        exams: 'NEET, NEET PG',
        colleges: 'AIIMS, CMC Vellore, State Medical Colleges',
        tags: ['Medicine', 'Surgery', 'Public Health']
    },
    {
        id: 8,
        title: 'Biotech Researcher',
        category: 'science',
        icon: '🧬',
        desc: 'Work at the intersection of biology and technology. India is emerging as a global hub for biotech innovation.',
        education: 'B.Sc/M.Sc Biotech or B.Tech Biotech',
        salary: '₹4-18 LPA',
        exams: 'GATE, IIT JAM',
        colleges: 'IITs, NITs, IISc',
        tags: ['Genomics', 'Drug Discovery', 'Research']
    },
    {
        id: 9,
        title: 'Civil Services (IAS/IPS)',
        category: 'govt',
        icon: '🏛️',
        desc: 'Serve the nation and bring change at the policy level. The most respected career path in India.',
        education: 'Any Graduate (Any Stream)',
        salary: '₹56,000-2,50,000/month',
        exams: 'UPSC CSE',
        colleges: 'Any (Coaching recommended)',
        tags: ['UPSC', 'Administration', 'Policy']
    },
    {
        id: 10,
        title: 'Lawyer / Legal Advisor',
        category: 'govt',
        icon: '⚖️',
        desc: 'Defend justice and shape the legal landscape. Corporate law, criminal law, and constitutional practice are booming.',
        education: 'BA LLB / BBA LLB / LLM',
        salary: '₹5-30 LPA',
        exams: 'CLAT, AILET',
        colleges: 'NLUs, Jindal Global, GLC Mumbai',
        tags: ['Litigation', 'Corporate', 'Constitutional']
    }
];

// ─── RESOURCES DATA (UPGRADED WITH REAL LINKS) ───
const resourcesData = [
    {
        icon: '🎓',
        title: 'SWAYAM / NPTEL',
        desc: 'Free courses from top IITs and NITs. Certificates recognised by UGC. Learn anything from engineering to humanities.',
        link: 'https://swayam.gov.in/',
        linkText: 'Start Learning'
    },
    {
        icon: '💼',
        title: 'Internshala',
        desc: 'India\'s leading internship platform. Get real-world experience while studying. 50,000+ internships available.',
        link: 'https://internshala.com/',
        linkText: 'Find Internships'
    },
    {
        icon: '🏦',
        title: 'PMKVY & Skill India',
        desc: 'Government-backed skill development programs. Free training with job placement support across India.',
        link: 'https://www.pmkvyofficial.org/',
        linkText: 'Apply Now'
    },
    {
        icon: '📚',
        title: 'Coursera (Free Courses)',
        desc: 'World-class courses from top global universities. Financial aid available for Indian students.',
        link: 'https://www.coursera.org/',
        linkText: 'Browse Courses'
    },
    {
        icon: '🇮🇳',
        title: 'National Career Service',
        desc: 'Ministry of Labour\'s portal with job matching, career counselling, and skill development resources.',
        link: 'https://www.ncs.gov.in/',
        linkText: 'Visit Portal'
    },
    {
        icon: '🌐',
        title: 'Startup India',
        desc: 'Resources for aspiring entrepreneurs — funding, mentorship, tax benefits, and incubation support.',
        link: 'https://www.startupindia.gov.in/',
        linkText: 'Explore'
    },
    {
        icon: '📺',
        title: 'Physics Wallah',
        desc: 'Free JEE/NEET preparation on YouTube. One of India\'s most popular ed-tech platforms for competitive exams.',
        link: 'https://www.youtube.com/c/PhysicsWallah',
        linkText: 'Watch Now'
    },
    {
        icon: '💻',
        title: 'CodeWithHarry',
        desc: 'Free programming tutorials in Hindi. Learn Python, JavaScript, Web Development, and more.',
        link: 'https://www.youtube.com/c/CodeWithHarry',
        linkText: 'Start Coding'
    }
];

// ─── QUIZ QUESTIONS (UPGRADED) ───
const quizQuestions = [
    {
        q: 'What kind of work excites you the most?',
        options: [
            'Building websites, apps, and software',
            'Designing visual content and experiences',
            'Working with numbers and business strategy',
            'Researching and experimenting in labs',
            'Serving society through administration'
        ],
        map: ['tech', 'creative', 'business', 'science', 'govt']
    },
    {
        q: 'What is your preferred way of working?',
        options: [
            'Deep focus on coding and problem-solving',
            'Collaborating with teams on creative projects',
            'Analyzing markets and making business decisions',
            'Working independently in a research environment',
            'Leading and managing public initiatives'
        ],
        map: ['tech', 'creative', 'business', 'science', 'govt']
    },
    {
        q: 'Which subject do you enjoy the most?',
        options: [
            'Mathematics and Computer Science',
            'Arts, Design, and Communication',
            'Economics and Business Studies',
            'Biology, Chemistry, and Physics',
            'Political Science and Law'
        ],
        map: ['tech', 'creative', 'business', 'science', 'govt']
    },
    {
        q: 'What salary range are you aiming for after 5 years?',
        options: [
            '₹10-25 LPA (High growth potential)',
            '₹8-20 LPA (Creative industries)',
            '₹12-40 LPA (Finance and business)',
            '₹8-18 LPA (Research and healthcare)',
            '₹10-25 LPA (Government services)'
        ],
        map: ['tech', 'creative', 'business', 'science', 'govt']
    },
    {
        q: 'Where do you see yourself in 10 years?',
        options: [
            'Leading a tech team or starting a tech company',
            'Running a creative agency or design studio',
            'Managing a business or as a startup founder',
            'Publishing research or running a lab',
            'Serving as a senior bureaucrat or judge'
        ],
        map: ['tech', 'creative', 'business', 'science', 'govt']
    }
];

// ─── RENDER FUNCTIONS ───

function renderModels() {
    const grid = document.getElementById('modelsGrid');
    grid.innerHTML = roleModels.map(m => `
        <div class="model-card">
            <div class="model-avatar">${m.name.charAt(0)}</div>
            <h3>${m.name}</h3>
            <div class="model-title">${m.title}</div>
            <div class="model-bio">${m.bio}</div>
            <span class="model-achievement">${m.achievement}</span>
        </div>
    `).join('');
}

function renderCareers(filter = 'all') {
    const grid = document.getElementById('careersGrid');
    const filtered = filter === 'all' ? careerData : careerData.filter(c => c.category === filter);

    if (filtered.length === 0) {
        grid.innerHTML = `<p style="color:var(--text-muted);grid-column:1/-1;text-align:center;padding:40px 0;">No careers found.</p>`;
        return;
    }

    grid.innerHTML = filtered.map(c => `
        <div class="career-card">
            <span class="icon">${c.icon}</span>
            <h4>${c.title}</h4>
            <div class="career-category">${c.category}</div>
            <p>${c.desc}</p>
            <div class="career-detail"><strong>🎓 Education:</strong> ${c.education}</div>
            <div class="career-detail"><strong>💰 Salary:</strong> ${c.salary}</div>
            <div class="career-detail"><strong>📝 Exams:</strong> ${c.exams}</div>
            <div class="career-detail"><strong>🏛️ Colleges:</strong> ${c.colleges}</div>
            <div class="career-tags">
                ${c.tags.map(t => `<span>${t}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function renderResources() {
    const grid = document.getElementById('resourcesGrid');
    grid.innerHTML = resourcesData.map(r => `
        <div class="resource-card">
            <span class="r-icon">${r.icon}</span>
            <h5>${r.title}</h5>
            <p>${r.desc}</p>
            <a href="${r.link}" target="_blank" class="resource-link">
                ${r.linkText} →
            </a>
        </div>
    `).join('');
}

// ─── FILTERS ───
let activeFilter = 'all';

function setupFilters() {
    const buttons = document.querySelectorAll('#careerFilters button');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeFilter = btn.dataset.filter;
            renderCareers(activeFilter);
        });
    });
}

// ─── QUIZ ───
let currentQ = 0;
const answers = [];

function renderQuiz() {
    const container = document.getElementById('quizContent');
    const q = quizQuestions[currentQ];
    const total = quizQuestions.length;

    container.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
            <span style="font-size:0.75rem;color:var(--text-muted);font-weight:500;">Question ${currentQ+1} of ${total}</span>
            <span style="font-size:0.75rem;color:var(--gold);font-weight:600;">${Math.round((currentQ+1)/total*100)}%</span>
        </div>
        <div class="question">${q.q}</div>
        <div class="options">
            ${q.options.map((opt, idx) => `
                <label>
                    <input type="radio" name="quiz" value="${idx}" ${answers[currentQ] === idx ? 'checked' : ''} />
                    ${opt}
                </label>
            `).join('')}
        </div>
    `;

    document.getElementById('prevBtn').disabled = currentQ === 0;
    const nextBtn = document.getElementById('nextBtn');
    if (currentQ === total - 1) {
        nextBtn.textContent = '📊 See Results';
    } else {
        nextBtn.textContent = 'Next →';
    }

    if (answers[currentQ] !== undefined) {
        const radios = container.querySelectorAll('input[name="quiz"]');
        if (radios[answers[currentQ]]) radios[answers[currentQ]].checked = true;
    }

    document.getElementById('resultPlaceholder').style.display = 'block';
    document.getElementById('resultContent').style.display = 'none';
    document.getElementById('resetBtn').style.display = 'none';
}

function getSelected() {
    const selected = document.querySelector('input[name="quiz"]:checked');
    return selected ? parseInt(selected.value) : null;
}

function showResult() {
    const counts = { tech: 0, creative: 0, business: 0, science: 0, govt: 0 };
    for (let i = 0; i < answers.length; i++) {
        const val = answers[i];
        if (val !== undefined && val !== null) {
            const cat = quizQuestions[i].map[val];
            if (cat && counts[cat] !== undefined) counts[cat]++;
        }
    }

    let topCat = 'tech';
    let topCount = 0;
    for (const [cat, count] of Object.entries(counts)) {
        if (count > topCount) {
            topCount = count;
            topCat = cat;
        }
    }

    const matched = careerData.filter(c => c.category === topCat);
    const catLabel = { tech: 'Technology', creative: 'Creative & Media', business: 'Business & Finance',
        science: 'Science & Health', govt: 'Government & Law' } [topCat] || topCat;

    const placeholder = document.getElementById('resultPlaceholder');
    const resultContent = document.getElementById('resultContent');
    placeholder.style.display = 'none';
    resultContent.style.display = 'block';
    document.getElementById('resetBtn').style.display = 'inline-flex';

    const matchPercentage = Math.round((topCount / quizQuestions.length) * 100);

    resultContent.innerHTML = `
        <h4>🎯 Your Top Career Cluster: ${catLabel}</h4>
        <div class="match-badge">${matchPercentage}% Match</div>
        <p style="margin-top:12px;">
            <strong>Recommended careers:</strong> ${matched.map(c => c.title).join(', ')}
        </p>
        <p style="margin-top:12px;font-size:0.9rem;color:var(--text-secondary);">
            Based on your interests, you're best suited for careers in <strong style="color:var(--gold);">${catLabel}</strong>.
            Check the <a href="#careers" style="color:var(--gold);">Career Paths</a> section for detailed scope, education, and salary information.
        </p>
        <div style="margin-top:16px;display:flex;gap:8px;flex-wrap:wrap;">
            ${matched.slice(0,3).map(c => `<span style="background:var(--gold-dim);padding:4px 14px;border-radius:100px;font-size:0.75rem;border:1px solid var(--border-gold);color:var(--gold);">${c.icon} ${c.title}</span>`).join('')}
        </div>
        <p style="margin-top:16px;font-size:0.85rem;color:var(--text-muted);">
            💡 Explore the <a href="#resources" style="color:var(--gold);">Study Resources</a> section to start your learning journey.
        </p>
    `;
}

function setupQuiz() {
    renderQuiz();

    document.getElementById('nextBtn').addEventListener('click', () => {
        const selected = getSelected();
        if (selected === null) {
            alert('Please select an option to continue.');
            return;
        }
        answers[currentQ] = selected;

        if (currentQ === quizQuestions.length - 1) {
            showResult();
            return;
        }
        currentQ++;
        renderQuiz();
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
        if (currentQ > 0) {
            currentQ--;
            renderQuiz();
        }
    });

    document.getElementById('resetBtn').addEventListener('click', () => {
        for (let i = 0; i < answers.length; i++) answers[i] = undefined;
        currentQ = 0;
        document.getElementById('resultContent').style.display = 'none';
        document.getElementById('resultPlaceholder').style.display = 'block';
        document.getElementById('resetBtn').style.display = 'none';
        renderQuiz();
    });
}

// ─── NAV ───
function setupNav() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('open'));
    });

    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 40) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    });
}

// ─── SMOOTH SCROLL ───
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ─── INIT ───
document.addEventListener('DOMContentLoaded', () => {
    renderModels();
    renderCareers('all');
    renderResources();
    setupFilters();
    setupQuiz();
    setupNav();
});
