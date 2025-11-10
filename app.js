(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            const activeBtn = document.querySelector(".active-btn");
            const activeSection = document.querySelector(".active");
            const targetSection = document.getElementById(button.dataset.id);
            
            if (activeBtn) activeBtn.classList.remove("active-btn");
            this.classList.add("active-btn");
            if (activeSection) activeSection.classList.remove("active");
            if (targetSection) targetSection.classList.add("active");
        })
    });
    const themeBtn = document.querySelector(".theme-btn");
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
        });
    }
})();

// Portfolio Category Switching
(function () {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const categoryContents = document.querySelectorAll('.portfolio-category-content');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetCategory = this.dataset.category;
            
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active-category'));
            // Add active class to clicked button
            this.classList.add('active-category');
            
            // Hide all category contents
            categoryContents.forEach(content => {
                content.classList.remove('active-category-content');
            });
            
            // Show selected category content
            const targetContent = document.getElementById(`${targetCategory}-portfolio`);
            if (targetContent) {
                targetContent.classList.add('active-category-content');
            }
        });
    });
})();

// Web App Modal System
const webAppData = {
    tommynews: {
        title: "湯米新聞 (Tommy News)",
        description: "A comprehensive Taiwanese news aggregation platform that brings together news from multiple major media sources. The app features AI-powered news summarization, category filtering, and real-time updates from trusted news outlets.",
        idea: "The idea behind Tommy News was to create a one-stop platform for Taiwanese news readers. Instead of visiting multiple news websites, users can access news from 中央社, 自由時報, ETtoday, 台視, 新頭殼, and BBC News all in one place. The AI summarization feature helps users quickly understand news articles without reading the full content, making news consumption more efficient.",
        liveUrl: "https://tommynews.up.railway.app/",
        githubUrl: null,
        skills: ["AI Integration", "AI/ML", "Natural Language Processing", "AI-Powered Summarization", "API Integration", "React", "JavaScript"],
        preview: "https://tommynews.up.railway.app/"
    },
    mbtiassistant: {
        title: "MBTI助手 (MBTI Assistant)",
        description: "An interactive MBTI (Myers-Briggs Type Indicator) assistant application that helps users understand themselves and improve their relationships with others. The app provides personalized analysis based on MBTI personality types across different aspects of life including work, relationships, friendships, and family.",
        idea: "The MBTI Assistant was created to help people better understand themselves and others through personality type analysis. Users can explore two main features: '自我了解' (Self Understanding) for personal insights across work, relationships, friendships, family, strengths, and weaknesses; and '與人相處' (Interpersonal Relationships) to analyze compatibility and dynamics between different MBTI types in various relationship contexts (family, friends, romantic partners, colleagues, classmates). This tool makes personality psychology accessible and practical for everyday use.",
        liveUrl: "https://mbtit-tommy.up.railway.app/",
        githubUrl: null,
        skills: ["AI Integration", "AI/ML", "AI-Powered Analysis", "Personality Psychology", "React", "JavaScript", "Interactive UI"],
        preview: "https://mbtit-tommy.up.railway.app/"
    },
    spindine: {
        title: "Spin & Dine 🍽️",
        description: "A fun and interactive restaurant selection app that lets fate decide your next meal! Spin & Dine helps users discover restaurants near them by using a spinning wheel to randomly select from filtered restaurant options based on rating, distance, and availability.",
        idea: "Spin & Dine was created to solve the common problem of 'where should we eat?' by making restaurant selection fun and exciting. Instead of endless scrolling through restaurant options, users can set their preferences (minimum rating, maximum distance, restaurant status) and let a spinning wheel decide. The app integrates with location services to find nearby restaurants, filters them based on user criteria, and then randomly selects one through an engaging spinning wheel interface. This makes dining decisions quick, fun, and removes the decision fatigue that often comes with choosing where to eat.",
        liveUrl: "https://spindine.netlify.app/",
        githubUrl: null,
        skills: ["React", "JavaScript", "Location API", "Google Maps API", "Restaurant API", "Interactive UI"],
        preview: "https://spindine.netlify.app/"
    },
    englishlearning: {
        title: "English Learning Hub 🎓",
        description: "An interactive English learning platform that helps users practice natural conversations in 30 common everyday situations. The app features guided dialogues, free talk mode, and vocabulary building to improve pronunciation, build vocabulary, and gain confidence speaking English.",
        idea: "English Learning Hub was created to make English conversation practice accessible and practical. Instead of traditional textbook learning, users can practice real-world conversations in situations they'll actually encounter - like ordering at a restaurant, asking for directions, or having a job interview. The app offers two learning modes: Guided Dialogues for structured practice with common phrases, and Free Talk Mode for spontaneous conversation practice. This approach helps learners build confidence and fluency by practicing in context, making language learning more engaging and effective than memorizing vocabulary lists.",
        liveUrl: "https://englishlearningconversation.netlify.app/",
        githubUrl: null,
        skills: ["AI Integration", "AI/ML", "Conversational AI", "AI-Powered Dialogues", "Language Learning", "React", "JavaScript"],
        preview: "https://englishlearningconversation.netlify.app/"
    },
    coverletter: {
        title: "Cover Letter Generator 📝",
        description: "An AI-powered cover letter generation tool that helps job seekers create personalized, professional cover letters tailored to specific job applications. The app uses advanced AI to analyze job descriptions and generate compelling cover letters that highlight relevant skills and experiences.",
        idea: "The Cover Letter Generator was created to solve the time-consuming problem of writing customized cover letters for each job application. Instead of starting from scratch every time, users can input their information and job details, and the AI generates a professional, tailored cover letter. This tool helps job seekers save time while ensuring their cover letters are well-written, relevant, and highlight the most important qualifications for each position. The app makes the job application process more efficient and increases the chances of standing out to potential employers.",
        liveUrl: "https://tommycoverletter.up.railway.app/",
        githubUrl: null,
        skills: ["AI Integration", "AI/ML", "Natural Language Processing", "AI-Powered Generation", "Document Generation", "React", "JavaScript"],
        preview: "https://tommycoverletter.up.railway.app/"
    },
    taro: {
        title: "Tommy的神秘塔羅 (Tommy's Mystical Tarot) 🔮",
        description: "A comprehensive mystical divination platform featuring tarot card readings, life path number calculations, and horoscope predictions. The app provides personalized spiritual guidance through interactive tarot readings, numerology insights, and daily/weekly/monthly/yearly horoscope forecasts for all zodiac signs.",
        idea: "Tommy's Mystical Tarot was created to bring ancient divination practices into the modern digital age. The app combines three powerful mystical tools: Tarot Cards for guidance on family, relationships, career, and general life questions; Life Path Numbers (Numerology) to reveal personality traits, talents, and life purpose based on birth dates; and Horoscope readings for all 12 zodiac signs with different time periods. Users can focus on their questions while selecting cards, receive AI-powered interpretations, and explore their spiritual journey through multiple divination methods. This makes mystical guidance accessible, interactive, and personalized for everyone seeking wisdom and insight.",
        liveUrl: "https://tommytaro.up.railway.app/",
        githubUrl: null,
        skills: ["AI Integration", "AI/ML", "AI-Powered Interpretations", "Natural Language Processing", "React", "JavaScript", "Interactive UI"],
        preview: "https://tommytaro.up.railway.app/"
    }
};

(function () {
    const modal = document.getElementById('webapp-modal');
    const modalBody = document.getElementById('webapp-modal-body');
    const closeBtn = document.querySelector('.webapp-modal-close');
    const viewButtons = document.querySelectorAll('.webapp-view-btn');

    // Early return if essential elements are missing
    if (!modal || !modalBody) return;

    // Open modal function
    function openModal(webappId) {
        const appData = webAppData[webappId];
        if (!appData || !modal || !modalBody) return;

        modalBody.innerHTML = `
            <div class="webapp-modal-header">
                <h2>${appData.title}</h2>
            </div>
            <div class="webapp-modal-preview">
                <div class="iframe-loading">Loading preview...</div>
                <iframe src="${appData.preview}" frameborder="0" allowfullscreen loading="lazy" onload="
                    const loading = this.parentElement.querySelector('.iframe-loading');
                    const overlay = this.parentElement.querySelector('.webapp-modal-overlay');
                    if (loading) loading.style.display = 'none';
                    if (overlay) {
                        setTimeout(() => {
                            overlay.style.opacity = '0';
                            overlay.style.pointerEvents = 'none';
                        }, 2000);
                    }
                "></iframe>
                <div class="webapp-modal-overlay">
                    <a href="${appData.liveUrl}" target="_blank" class="webapp-visit-btn">
                        <i class="fas fa-external-link-alt"></i> Visit Live Site
                    </a>
                </div>
            </div>
            <div class="webapp-modal-info">
                <div class="webapp-info-section">
                    <h3><i class="fas fa-info-circle"></i> Description</h3>
                    <p>${appData.description}</p>
                </div>
                <div class="webapp-info-section">
                    <h3><i class="fas fa-lightbulb"></i> The Idea</h3>
                    <p>${appData.idea}</p>
                </div>
                <div class="webapp-info-section">
                    <h3><i class="fas fa-code"></i> Technologies & Skills</h3>
                    <div class="webapp-skills">
                        ${appData.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>
                <div class="webapp-info-section">
                    <h3><i class="fas fa-link"></i> Links</h3>
                    <div class="webapp-links">
                        <a href="${appData.liveUrl}" target="_blank" class="webapp-link-btn">
                            <i class="fas fa-globe"></i> Live Site
                        </a>
                        ${appData.githubUrl ? `<a href="${appData.githubUrl}" target="_blank" class="webapp-link-btn">
                            <i class="fab fa-github"></i> GitHub
                        </a>` : ''}
                    </div>
                </div>
            </div>
        `;

        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    // Close modal function
    function closeModal() {
        if (!modal) return;
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Event listeners for view buttons
    viewButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const webappId = this.dataset.webapp;
            openModal(webappId);
        });
    });

    // Event listeners for clicking on portfolio items/images
    const webappItems = document.querySelectorAll('.webapp-item, .webapp-clickable');
    webappItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Don't open modal if clicking on links or buttons inside
            if (e.target.closest('a') && !e.target.closest('a').classList.contains('webapp-view-btn')) {
                return;
            }
            if (e.target.closest('button')) {
                return;
            }
            
            const webappItem = this.closest('.webapp-item') || this.parentElement.closest('.webapp-item');
            if (webappItem) {
                const webappId = webappItem.dataset.webapp;
                if (webappId) {
                    openModal(webappId);
                }
            }
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal && modal.style.display === 'flex') {
            closeModal();
        }
    });
})();

// Scroll-triggered animations
(function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe portfolio items
    document.addEventListener('DOMContentLoaded', function() {
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        portfolioItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(50px)';
            item.style.transition = `all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.1}s`;
            observer.observe(item);
        });

        // Observe contact cards
        const contactCards = document.querySelectorAll('.contact-card');
        contactCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.1}s`;
            observer.observe(card);
        });

        // Observe about items
        const aboutItems = document.querySelectorAll('.about-item');
        aboutItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = `all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.1}s`;
            observer.observe(item);
        });
    });
})();



// Resume Modal System
(function () {
    const resumeModal = document.getElementById('resume-modal');
    const resumeCloseBtn = document.querySelector('.resume-modal-close');
    const viewResumeBtns = document.querySelectorAll('#view-resume-btn, #view-resume-btn-about');

    // Early return if essential elements are missing
    if (!resumeModal) return;

    // Open resume modal function
    function openResumeModal() {
        if (!resumeModal) return;
        resumeModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    // Close resume modal function
    function closeResumeModal() {
        if (!resumeModal) return;
        resumeModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Event listeners for view resume buttons
    viewResumeBtns.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                openResumeModal();
            });
        }
    });

    // Close button event listener
    if (resumeCloseBtn) {
        resumeCloseBtn.addEventListener('click', closeResumeModal);
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === resumeModal) {
            closeResumeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && resumeModal && resumeModal.style.display === 'flex') {
            closeResumeModal();
        }
    });
})();

// const sections = document.querySelectorAll('.section');
// const sectBtns = document.querySelectorAll('.controls');
// const sectBtn = document.querySelectorAll('.control');
// const allSections = document.querySelectorAll('.main-content');


// function PageTransitions(){
//     for(let i = 0; i < sectBtn.length; i++){
//         sectBtn[i].addEventListener('click', () =>{
//             let currentBtn = document.querySelectorAll('.active-btn');
//             currentBtn[0].className = currentBtn[0].className.replace('active.btn', '')
//             this.className += 'active-btn';
//         })
//     }
// }







