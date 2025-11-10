(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
})();

const projectsBtn = document.getElementsByClassName('btn-hover')

const trialByFireBtn = document.getElementById('trialbyfire-btn');
const trialByFirePage = document.getElementById('TrialByFire');
const readyToRobBtn = document.getElementById('readytorob-btn');
const readyToRobPage = document.getElementById('ReadyToRob');
const villageRevengerBtn = document.getElementById('villagerevenger-btn');
const villageRevengerPage = document.getElementById('VillageRevenger');
const villageProtectorBtn = document.getElementById('villageprotector-btn');
const villageProtectorPage = document.getElementById('VillageProtector');
const theDarkCaveBtn = document.getElementById('thedarkcave-btn');
const theDarkCavePage = document.getElementById('TheDarkCave');
const futureMissionBtn = document.getElementById('futuremission-btn');
const futureMissionPage = document.getElementById('FutureMission');
const controlElement = document.querySelector('.control')


if (trialByFireBtn && trialByFirePage) {
    trialByFireBtn.addEventListener('click', ()=>{
        change(trialByFirePage, '#trial-by-fire-btn')
    })
}

if (readyToRobBtn && readyToRobPage) {
    readyToRobBtn.addEventListener('click', function(){
        change(readyToRobPage, '#ready-to-rob-btn')
    })
}

if (villageRevengerBtn && villageRevengerPage) {
    villageRevengerBtn.addEventListener('click', function(){
        change(villageRevengerPage, '#village-revenger-btn')
    })
}

if (villageProtectorBtn && villageProtectorPage) {
    villageProtectorBtn.addEventListener('click', function(){
        change(villageProtectorPage, '#village-protector-btn')
    })
}

if (theDarkCaveBtn && theDarkCavePage) {
    theDarkCaveBtn.addEventListener('click', function(){
        change(theDarkCavePage, '#the-dark-cave-btn')
    })
}

if (futureMissionBtn && futureMissionPage) {
    futureMissionBtn.addEventListener('click', function(){
        change(futureMissionPage, '#future-mission-btn')
    })
}
function change(name, btnName){
    if (!name) return;
    const activeSection = document.querySelector(".active");
    const controls2 = document.querySelector(".controls2");
    const controls = document.querySelector(".controls");
    const activeBtn = document.querySelector(".active-btn");
    const targetBtn = document.querySelector(btnName);
    
    if (activeSection) activeSection.classList.remove("active");
    name.classList.add('active');
    if (controls2) controls2.style.display = 'flex';
    if (controls) controls.style.display = 'none';
    if (activeBtn) activeBtn.classList.remove("active-btn");
    if (targetBtn) targetBtn.classList.add("active-btn");
}


const portfolioPage = document.getElementById('portfolio')

function back() {
    if (!portfolioPage) return;
    const activeSection = document.querySelector(".active");
    const controls = document.querySelector(".controls");
    const controls2 = document.querySelector(".controls2");
    const activeBtn = document.querySelector(".active-btn");
    const portfolioBtn = document.querySelector("#portfolio-btn");
    
    if (activeSection) activeSection.classList.remove("active");
    portfolioPage.classList.add('active');
    if (controls) controls.style.display = 'flex';
    if (controls2) controls2.style.display = 'none';
    if (activeBtn) activeBtn.classList.remove("active-btn");
    if (portfolioBtn) portfolioBtn.classList.add("active-btn");
  };



