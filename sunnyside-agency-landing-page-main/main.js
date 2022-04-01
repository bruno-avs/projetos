const $menuSection = document.querySelector('.menu-section');
const $divHunburger = document.querySelector('.div-hunburger');
let show = true;
$divHunburger.addEventListener('click', event => {
    event.stopPropagation();
    document.body.style.overflow = show ? 'hidden' : 'initial'
    $menuSection.classList.toggle("on", show);
    show = !show;
})