let mainLlink = document.querySelector(".toggle-megamenu");
let otherLinks = document.querySelector(".other-links");
let m = 0;
mainLlink.onclick = () => {
    st();
    m += 1;
    if (m == 4) {
        m = 0;
    }
    console.log(m);
}

function st() {
    if (m % 2 == 0) {
        otherLinks.style.cssText = `
        opacity:1;
        transform: translateY(0);
        display: grid;
    `;
    } else {
        otherLinks.style.cssText = `
        opacity:0;
        transform: translateY(20px);
        display: grid;
    `;
    }
}
window.onkeyup = (e) => {
    if (m % 2 == 1 && e.keyCode == 27) {
        otherLinks.style.cssText = `
        opacity:0;
        transform: translateY(20px);
        display: grid;
    `;
    }
    m += 1;
    if (m == 4) {
        m = 0;
    }
}

// start our-skills
let ourSkills = document.querySelector('.our-skills');
let fillProg = document.querySelectorAll('.our-skills .fill-prog');
let fillNum = document.querySelectorAll('.our-skills .fill-num');
let skillsHand = false;


function skillsProgres(e) {
    let goald = e.parentElement.dataset.prog;
    let courentProg = 0;
    let timeSkillsProg = setInterval(() => {
        e.style.width = `${courentProg}%`;
        goald <= courentProg ? clearInterval(timeSkillsProg) : courentProg++;;
    }, 1500 / goald);
}

function skillsNumber(e) {
    let goald = e.parentElement.dataset.prog;
    let courentProg = 0;
    let timeSkillsProg = setInterval(() => {
        e.innerHTML = `${courentProg}%`;
        e.style.left = `calc(${courentProg}% - 20px)`;
        goald <= courentProg ? clearInterval(timeSkillsProg) : courentProg++;;
    }, 1500 / goald);
}

window.addEventListener('scroll',()=>{
    if (window.scrollY >= ourSkills.offsetTop - 250 && window.scrollY <= ourSkills.offsetTop && !skillsHand) {
        skillsHand = true;

        fillNum.forEach(li => {
            skillsNumber(li);
        });
        
        fillProg.forEach(li => {
            skillsProgres(li);
        });
    }
});

// end our-skills

// start event

let days = document.querySelector('.days');
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

let day,
    hour,
    minute,
    second;

setInterval(() => {
    let date = new Date().getTime();
    let end = new Date('dec 31 2022/ 23:59:59').getTime();
    let diff = end - date;

    day = diff / (1000 * 60 * 60 * 24);
    hour = (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
    minute = (diff % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60) / (1000 * 60);
    second = ((diff % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60) % (1000 * 60)) / 1000;

    days.innerHTML = parseInt(day) < 10 ? `0${parseInt(day)}` : parseInt(day);
    hours.innerHTML = parseInt(hour) < 10 ? `0${parseInt(hour)}` : parseInt(hour);
    minutes.innerHTML = parseInt(minute) < 10 ? `0${parseInt(minute)}` : parseInt(minute);
    seconds.innerHTML = parseInt(second) < 10 ? `0${parseInt(second)}` : parseInt(second);
}, 1000);

// end event

// start stats
let liStats = document.querySelectorAll('.stats .container .card .number');
let stats = document.querySelector('.stats');
let statsHand = false;

function countStats(el) {
    let goald = el.dataset.number;
    let timeStats = setInterval(() => {
        el.textContent == goald ?
            clearInterval(timeStats) :
            el.textContent++;
    }, 2000 / goald);
}

window.addEventListener('scroll',()=>{
    if (window.scrollY >= stats.offsetTop - 250 && window.scrollY <= stats.offsetTop && !statsHand) {
        statsHand = true;
        liStats.forEach(li => {
            countStats(li);
        });
    }
})

// end stats




