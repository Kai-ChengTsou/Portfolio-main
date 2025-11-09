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


trialByFireBtn.addEventListener('click', ()=>{
    change(trialByFirePage, '#trial-by-fire-btn')
})

readyToRobBtn.addEventListener('click', function(){
    change(readyToRobPage, '#ready-to-rob-btn')
})

villageRevengerBtn.addEventListener('click', function(){
    change(villageRevengerPage, '#village-revenger-btn')
})

villageProtectorBtn.addEventListener('click', function(){
    change(villageProtectorPage, '#village-protector-btn')
})

theDarkCaveBtn.addEventListener('click', function(){
    change(theDarkCavePage, '#the-dark-cave-btn')
})

futureMissionBtn.addEventListener('click', function(){
    change(futureMissionPage, '#future-mission-btn')
})
function change(name, btnName){
    document.querySelector(".active").classList.remove("active");
    name.classList.add('active');
    document.querySelector(".controls2").style.display = 'flex';
    document.querySelector(".controls").style.display = 'none';
    document.querySelector(".active-btn").classList.remove("active-btn");
    document.querySelector(btnName).classList.add("active-btn");
}


const portfolioPage = document.getElementById('portfolio')

function back() {
    document.querySelector(".active").classList.remove("active");
    portfolioPage.classList.add('active');
    document.querySelector(".controls").style.display = 'flex';
    document.querySelector(".controls2").style.display = 'none';
    document.querySelector(".active-btn").classList.remove("active-btn");
    document.querySelector("#portfolio-btn").classList.add("active-btn");
  };



