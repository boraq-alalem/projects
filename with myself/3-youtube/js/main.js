let toggleMenu = document.querySelector('.header .left-sec a img.menu');
let aside = document.querySelector('.content >.aside');
let overlay = document.querySelector('.content .overlay');
let search = document.querySelector('.search');
let input = document.querySelector('.input');
let overlayInput = document.querySelector('.overlay-input');

toggleMenu.onclick=()=>{
    aside.classList.toggle('toggle')
}

overlay.onclick=()=>{
    aside.classList.toggle('toggle')
}

search.onclick=()=>{
    input.classList.add('toggle');
    overlayInput.classList.add('toggle');
    
}

overlayInput.onclick=()=>{
    input.classList.remove('toggle');
    overlayInput.classList.remove('toggle');
    
}
