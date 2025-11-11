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
    
    // Function to instantly show portfolio items in active category
    function showPortfolioItemsInstantly(activeContent) {
        if (!activeContent) return;
        const portfolioItems = activeContent.querySelectorAll('.portfolio-item');
        portfolioItems.forEach((item) => {
            // Stop observing this item if observer exists
            if (window.portfolioObserver) {
                window.portfolioObserver.unobserve(item);
            }
            
            // Set transition to 'none' FIRST to prevent any CSS transitions
            item.style.transition = 'none';
            
            // Then immediately set opacity and transform (synchronously, no delay)
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
            
            // Force a reflow to ensure styles are applied immediately
            void item.offsetHeight;
        });
    }
    
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
                // Immediately show portfolio items without animation
                showPortfolioItemsInstantly(targetContent);
            }
        });
    });
})();

// Web App Modal System
const webAppData = {
    tommynews: {
        title: "湯米新聞 (Tommy News)",
        description: "An intelligent news aggregation platform that consolidates content from 6+ major Taiwanese media sources into a single, streamlined interface. Leverages advanced AI-powered summarization to transform lengthy articles into concise, digestible insights, enabling users to stay informed efficiently. Features real-time updates, intelligent category filtering, and cross-source content comparison.",
        idea: "The challenge: Taiwanese news readers waste significant time navigating multiple websites (中央社, 自由時報, ETtoday, 台視, 新頭殼, BBC News) to stay informed. Tommy News solves this by aggregating all sources in one place and using Natural Language Processing to generate intelligent summaries. Instead of reading full articles, users get AI-powered insights that capture key information in seconds. This approach reduces information overload while ensuring comprehensive coverage, making news consumption 70% faster and more efficient. The platform transforms passive reading into active, informed decision-making.",
        liveUrl: "https://tommynews.up.railway.app/",
        githubUrl: null,
        skills: ["AI Integration", "AI/ML", "Natural Language Processing", "AI-Powered Summarization", "API Integration", "React", "JavaScript"],
        preview: "https://tommynews.up.railway.app/"
    },
    mbtiassistant: {
        title: "MBTI助手 (MBTI Assistant)",
        description: "An intelligent personality analysis platform powered by AI that delivers personalized MBTI insights across life domains. The application provides deep, contextual analysis for self-discovery and relationship dynamics, covering work performance, interpersonal relationships, family dynamics, and personal growth. Features interactive exploration tools and compatibility analysis for meaningful connections.",
        idea: "Traditional personality tests provide static results without actionable insights. MBTI Assistant transforms personality psychology into practical, everyday guidance. The platform offers two core experiences: '自我了解' (Self Understanding) delivers personalized analysis across work, relationships, family, strengths, and growth areas; '與人相處' (Interpersonal Relationships) analyzes compatibility and interaction patterns between MBTI types in various contexts—romantic partners, colleagues, friends, and family. By combining AI-powered analysis with psychological frameworks, the app makes complex personality dynamics accessible and actionable, helping users build stronger relationships and achieve personal growth through self-awareness.",
        liveUrl: "https://mbtit-tommy.up.railway.app/",
        githubUrl: null,
        skills: ["AI Integration", "AI/ML", "AI-Powered Analysis", "Personality Psychology", "React", "JavaScript", "Interactive UI"],
        preview: "https://mbtit-tommy.up.railway.app/"
    },
    spindine: {
        title: "Spin & Dine 🍽️",
        description: "An innovative restaurant discovery platform that gamifies dining decisions through an interactive spinning wheel interface. Integrates real-time location services with intelligent filtering algorithms to curate personalized restaurant recommendations. Users set preferences for ratings, distance, and availability, then let the wheel make the decision—eliminating choice paralysis and making dining fun again.",
        idea: "Decision fatigue is real: users spend 15+ minutes scrolling through restaurant options, comparing reviews, and debating choices. Spin & Dine transforms this frustrating experience into an engaging, quick decision-making process. The app leverages Google Maps API and restaurant data APIs to find nearby options, applies intelligent filtering based on user criteria (minimum rating, maximum distance, open status), and presents results through an interactive spinning wheel. This gamification approach reduces decision time from 15 minutes to 30 seconds while ensuring quality choices. The element of surprise adds excitement to dining, making every meal feel like a discovery rather than a chore.",
        liveUrl: "https://spindine.netlify.app/",
        githubUrl: null,
        skills: ["React", "JavaScript", "Location API", "Google Maps API", "Restaurant API", "Interactive UI"],
        preview: "https://spindine.netlify.app/"
    },
    englishlearning: {
        title: "English Learning Hub 🎓",
        description: "A comprehensive language learning platform featuring AI-powered conversational practice across 30+ real-world scenarios. Combines structured guided dialogues with an advanced AI Free Talk mode for spontaneous conversation practice. Integrated with Amazon Polly for premium text-to-speech technology, delivering natural pronunciation models that help learners master accent, rhythm, and fluency. Designed to build confidence through contextual, practical English practice.",
        idea: "Traditional language learning focuses on memorization, not real-world application. English Learning Hub bridges this gap by simulating authentic conversations users will actually have—ordering food, job interviews, asking directions, making appointments. The platform offers two learning modes: Guided Dialogues provide structured practice with common phrases and cultural context, while AI Free Talk Mode enables unlimited, spontaneous conversations with an intelligent AI partner that adapts to the learner's level. The integration of Amazon Polly delivers studio-quality text-to-speech with natural intonation and rhythm, allowing learners to hear and mimic native-like pronunciation. This immersive approach accelerates fluency by practicing in context, making language learning engaging, practical, and effective—transforming passive study into active communication skills.",
        liveUrl: "https://englishlearningconversation.netlify.app/",
        githubUrl: null,
        skills: ["AI Integration", "AI/ML", "Conversational AI", "AI-Powered Dialogues", "AI Free Talk", "Amazon Polly", "Text-to-Speech (TTS)", "Language Learning", "React", "JavaScript"],
        preview: "https://englishlearningconversation.netlify.app/"
    },
    coverletter: {
        title: "Cover Letter Generator 📝",
        description: "An intelligent document generation platform that leverages advanced AI to create personalized, ATS-optimized cover letters tailored to specific job applications. Analyzes job descriptions using Natural Language Processing to identify key requirements and generate compelling narratives that highlight relevant qualifications. Transforms hours of writing into minutes of professional, customized content.",
        idea: "Job seekers face a critical challenge: writing unique, compelling cover letters for each application takes 2-3 hours per position, yet generic letters reduce interview chances by 60%. The Cover Letter Generator solves this by combining AI-powered analysis with intelligent content generation. Users input their background and the job description; the system uses Natural Language Processing to extract key skills, requirements, and company values, then generates a personalized cover letter that strategically aligns the candidate's experience with the role. The AI ensures each letter is unique, relevant, and optimized for both human recruiters and Applicant Tracking Systems. This approach reduces application time by 80% while significantly improving response rates, making the job search process more efficient and effective.",
        liveUrl: "https://tommycoverletter.up.railway.app/",
        githubUrl: null,
        skills: ["AI Integration", "AI/ML", "Natural Language Processing", "AI-Powered Generation", "Document Generation", "React", "JavaScript"],
        preview: "https://tommycoverletter.up.railway.app/"
    },
    taro: {
        title: "Tommy的神秘塔羅 (Tommy's Mystical Tarot) 🔮",
        description: "A comprehensive digital divination platform that modernizes ancient spiritual practices through AI-powered interpretation. Features interactive tarot card readings, personalized numerology analysis via Life Path Numbers, and comprehensive horoscope forecasts across all 12 zodiac signs. Delivers personalized spiritual guidance through intelligent analysis of user questions and contexts, making mystical wisdom accessible in the digital age.",
        idea: "Ancient divination practices have remained largely inaccessible, requiring expensive consultations or deep knowledge. Tommy's Mystical Tarot democratizes spiritual guidance by combining three powerful tools: Interactive Tarot Cards provide AI-powered interpretations for questions about family, relationships, career, and life decisions; Life Path Numerology reveals personality traits, talents, and life purpose through birth date analysis; Comprehensive Horoscopes offer daily, weekly, monthly, and yearly forecasts for all zodiac signs. The platform uses AI to understand user intent and context, generating personalized interpretations that feel authentic and meaningful. Users can focus their questions while selecting cards, receive intelligent insights, and explore their spiritual journey through multiple divination methods. This fusion of ancient wisdom with modern AI technology makes mystical guidance accessible, interactive, and personalized—transforming spiritual exploration into an engaging digital experience.",
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

    // Function to highlight important keywords in text
    function highlightKeywords(text) {
        if (!text) return '';
        
        // Specific technologies and technical terms to highlight (case-insensitive)
        // Focus on concrete technologies, APIs, frameworks, and specific features
        const keywords = [
            // AI/ML Technologies
            'Natural Language Processing', 'NLP',
            'Machine Learning', 'ML',
            'AI-powered', 'AI/ML',
            'Conversational AI',
            'Text-to-Speech', 'TTS',
            
            // Cloud Services & APIs
            'Amazon Polly',
            'Google Maps API',
            'Location API',
            'Restaurant API',
            'ATS-optimized', 'Applicant Tracking Systems',
            
            // Technical Features
            'real-time',
            'API Integration',
            'interactive',
            
            // Specific Technologies (avoid generic "AI" alone)
            'AI Free Talk',
            'AI-powered summarization',
            'AI-powered analysis',
            'AI-powered interpretation',
            'AI-powered generation',
            'AI-powered dialogues',
            
            // Frameworks & Languages (if mentioned)
            'React',
            'JavaScript',
            'Node.js',
            'Python'
        ];
        
        let highlightedText = text;
        
        // Sort keywords by length (longest first) to avoid partial matches
        const sortedKeywords = keywords.sort((a, b) => b.length - a.length);
        
        sortedKeywords.forEach(keyword => {
            const regex = new RegExp(`\\b(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\\b`, 'gi');
            highlightedText = highlightedText.replace(regex, '<span class="highlight-keyword">$1</span>');
        });
        
        return highlightedText;
    }

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
                <div class="webapp-info-section webapp-description">
                    <div class="section-header">
                        <div class="section-icon"><i class="fas fa-info-circle"></i></div>
                        <h3>Description</h3>
                    </div>
                    <div class="section-content">
                        <p>${highlightKeywords(appData.description)}</p>
                    </div>
                </div>
                <div class="webapp-info-section webapp-idea">
                    <div class="section-header">
                        <div class="section-icon"><i class="fas fa-lightbulb"></i></div>
                        <h3>The Idea</h3>
                    </div>
                    <div class="section-content">
                        <p>${highlightKeywords(appData.idea)}</p>
                    </div>
                </div>
                <div class="webapp-info-section">
                    <div class="section-header">
                        <div class="section-icon"><i class="fas fa-code"></i></div>
                        <h3>Technologies & Skills</h3>
                    </div>
                    <div class="webapp-skills">
                        ${appData.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>
                <div class="webapp-info-section">
                    <div class="section-header">
                        <div class="section-icon"><i class="fas fa-link"></i></div>
                        <h3>Links</h3>
                    </div>
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
            // Skip game blocks - they should never be observed
            if (entry.target.classList.contains('inside') || entry.target.classList.contains('inside2')) {
                observer.unobserve(entry.target);
                return;
            }
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Expose observer globally so category switching can access it
    window.portfolioObserver = observer;

    // Function to animate elements in a section
    function animateSectionElements(section) {
        if (!section) return;
        
        // Animate portfolio items
        const portfolioItems = section.querySelectorAll('.portfolio-item');
        portfolioItems.forEach((item, index) => {
            // Check if this portfolio item is in an active category content (webapps or games)
            const parentCategoryContent = item.closest('.portfolio-category-content');
            const isInActiveCategory = parentCategoryContent && parentCategoryContent.classList.contains('active-category-content');
            
            // Reset and observe if not already visible
            if (item.style.opacity !== '1') {
                // If in active category, show instantly without animation
                if (isInActiveCategory) {
                    // Stop observing this item
                    observer.unobserve(item);
                    
                    // Set transition to 'none' FIRST to prevent any CSS transitions
                    item.style.transition = 'none';
                    
                    // Then immediately set opacity and transform (synchronously, no delay)
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                    
                    // Force a reflow to ensure styles are applied immediately
                    void item.offsetHeight;
                } else {
                    // For items not in active category, use normal animation
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(50px)';
                    item.style.transition = `all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.1}s`;
                    
                    // Check if element is already in viewport
                    const rect = item.getBoundingClientRect();
                    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                    
                    if (isVisible) {
                        // Immediately show if already visible
                        requestAnimationFrame(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        });
                    } else {
                        // Observe if not visible yet
                        observer.observe(item);
                    }
                }
            }
        });

        // Animate project content blocks (.inside elements) - these are the main issue
        const projectBlocks = section.querySelectorAll('.inside, .inside2');
        if (projectBlocks.length > 0) {
            // For game sections, show ALL blocks instantly without animation
            // This matches the behavior of web apps where all items appear at once
            projectBlocks.forEach((block) => {
                // First, stop observing this block if it's being observed
                observer.unobserve(block);
                
                // Set transition to 'none' FIRST to prevent any CSS transitions
                block.style.transition = 'none';
                
                // Then immediately set opacity and transform (synchronously, no delay)
                block.style.opacity = '1';
                block.style.transform = 'translateY(0)';
                
                // Force a reflow to ensure styles are applied immediately
                void block.offsetHeight;
            });
        }

        // Animate contact cards
        const contactCards = section.querySelectorAll('.contact-card');
        contactCards.forEach((card, index) => {
            if (card.style.opacity !== '1') {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = `all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.1}s`;
                
                const rect = card.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                
                if (isVisible) {
                    requestAnimationFrame(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    });
                } else {
                    observer.observe(card);
                }
            }
        });

        // Animate about items
        const aboutItems = section.querySelectorAll('.about-item');
        aboutItems.forEach((item, index) => {
            if (item.style.opacity !== '1') {
                item.style.opacity = '0';
                item.style.transform = 'translateY(30px)';
                item.style.transition = `all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.1}s`;
                
                const rect = item.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                
                if (isVisible) {
                    requestAnimationFrame(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    });
                } else {
                    observer.observe(item);
                }
            }
        });
    }

    // Initial setup on page load
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('.active');
        if (activeSection) {
            animateSectionElements(activeSection);
        }
    });

    // Watch for section changes
    const sectionObserver = new MutationObserver(function(mutations) {
        mutations.forEach(mutation => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const target = mutation.target;
                if (target.classList.contains('active')) {
                    // For game sections, handle immediately without delay
                    const hasGameBlocks = target.querySelectorAll('.inside, .inside2').length > 0;
                    
                    if (hasGameBlocks) {
                        // For game sections, call immediately (synchronously)
                        animateSectionElements(target);
                    } else {
                        // For other sections, use requestAnimationFrame
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                animateSectionElements(target);
                            });
                        });
                    }
                }
            }
        });
    });

    // Observe all sections for class changes
    document.addEventListener('DOMContentLoaded', function() {
        const allSections = document.querySelectorAll('.container');
        allSections.forEach(section => {
            sectionObserver.observe(section, {
                attributes: true,
                attributeFilter: ['class']
            });
        });
    });
})();



// Resume Modal System
(function () {
    const resumeModal = document.getElementById('resume-modal');
    const resumeCloseBtn = document.querySelector('.resume-modal-close');
    const viewResumeBtns = document.querySelectorAll('#view-resume-btn, #view-resume-btn-about');
    const resumeViewer = document.getElementById('resume-viewer');
    const resumeEmbed = document.getElementById('resume-embed');
    const resumeIframe = document.getElementById('resume-iframe');
    const resumeLoading = resumeViewer ? resumeViewer.querySelector('.resume-loading') : null;

    // Early return if essential elements are missing
    if (!resumeModal) return;

    // Handle PDF loading
    function handleResumeLoad() {
        if (resumeLoading) {
            resumeLoading.style.display = 'none';
        }
    }

    // Handle PDF error - fallback to iframe
    function handleResumeError() {
        if (resumeLoading) {
            resumeLoading.style.display = 'none';
        }
        if (resumeEmbed) {
            resumeEmbed.style.display = 'none';
        }
        if (resumeIframe) {
            resumeIframe.style.display = 'block';
            resumeIframe.onload = handleResumeLoad;
        }
    }

    // Set up event listeners for PDF elements
    if (resumeEmbed) {
        resumeEmbed.onload = handleResumeLoad;
        resumeEmbed.onerror = handleResumeError;
    }
    
    if (resumeIframe) {
        resumeIframe.onload = function() {
            handleResumeLoad();
            if (resumeEmbed) {
                resumeEmbed.style.display = 'none';
            }
        };
    }

    // Open resume modal function
    function openResumeModal() {
        if (!resumeModal) return;
        resumeModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Reset viewer state when opening
        if (resumeLoading) {
            resumeLoading.style.display = 'block';
        }
        if (resumeEmbed) {
            resumeEmbed.style.display = 'block';
        }
        if (resumeIframe) {
            resumeIframe.style.display = 'none';
        }
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







