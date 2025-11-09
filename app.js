(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
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
        skills: ["JavaScript", "React", "Node.js", "API Integration", "AI/ML", "Web Scraping", "Responsive Design"],
        preview: "https://tommynews.up.railway.app/"
    },
    mbtiassistant: {
        title: "MBTI助手 (MBTI Assistant)",
        description: "An interactive MBTI (Myers-Briggs Type Indicator) assistant application that helps users understand themselves and improve their relationships with others. The app provides personalized analysis based on MBTI personality types across different aspects of life including work, relationships, friendships, and family.",
        idea: "The MBTI Assistant was created to help people better understand themselves and others through personality type analysis. Users can explore two main features: '自我了解' (Self Understanding) for personal insights across work, relationships, friendships, family, strengths, and weaknesses; and '與人相處' (Interpersonal Relationships) to analyze compatibility and dynamics between different MBTI types in various relationship contexts (family, friends, romantic partners, colleagues, classmates). This tool makes personality psychology accessible and practical for everyday use.",
        liveUrl: "https://mbtit-tommy.up.railway.app/",
        githubUrl: null,
        skills: ["JavaScript", "React", "Node.js", "AI/ML", "Personality Psychology", "Interactive UI", "Responsive Design"],
        preview: "https://mbtit-tommy.up.railway.app/"
    },
    spindine: {
        title: "Spin & Dine 🍽️",
        description: "A fun and interactive restaurant selection app that lets fate decide your next meal! Spin & Dine helps users discover restaurants near them by using a spinning wheel to randomly select from filtered restaurant options based on rating, distance, and availability.",
        idea: "Spin & Dine was created to solve the common problem of 'where should we eat?' by making restaurant selection fun and exciting. Instead of endless scrolling through restaurant options, users can set their preferences (minimum rating, maximum distance, restaurant status) and let a spinning wheel decide. The app integrates with location services to find nearby restaurants, filters them based on user criteria, and then randomly selects one through an engaging spinning wheel interface. This makes dining decisions quick, fun, and removes the decision fatigue that often comes with choosing where to eat.",
        liveUrl: "https://spindine.netlify.app/",
        githubUrl: null,
        skills: ["JavaScript", "React", "Location API", "Google Maps API", "Restaurant API", "Interactive UI", "Responsive Design"],
        preview: "https://spindine.netlify.app/"
    }
};

(function () {
    const modal = document.getElementById('webapp-modal');
    const modalBody = document.getElementById('webapp-modal-body');
    const closeBtn = document.querySelector('.webapp-modal-close');
    const viewButtons = document.querySelectorAll('.webapp-view-btn');

    // Open modal function
    function openModal(webappId) {
        const appData = webAppData[webappId];
        if (!appData) return;

        modalBody.innerHTML = `
            <div class="webapp-modal-header">
                <h2>${appData.title}</h2>
            </div>
            <div class="webapp-modal-preview">
                <div class="iframe-loading">Loading preview...</div>
                <iframe src="${appData.preview}" frameborder="0" allowfullscreen loading="lazy" onload="this.parentElement.querySelector('.iframe-loading').style.display='none';"></iframe>
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

    closeBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
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







