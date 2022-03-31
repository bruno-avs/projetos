const $menuTogge = document.getElementById('div-hunburger');
let cliched = false;
$menuTogge.addEventListener('click', event => {
    event.stopPropagation();
    
    if(!cliched){
       const $boxTogge = document.getElementById('box-togge');
       const $divHunburger = document.getElementById('div-hunburger');
       const $hunburgerDvs = document.querySelectorAll('.hunburger-dvs');
       const $ulMenu = document.getElementById('menu-bar');


       $ulMenu.id = 'menu-bar-on';
       $boxTogge.id = 'box-togge-on';
       $divHunburger.id = 'div-hunburger-on';
       $hunburgerDvs.forEach(div => {
           div.className = 'hunburger-dvs-on';
       })
       
    }else{

    }

})
