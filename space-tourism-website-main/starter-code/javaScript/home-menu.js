let situetion = true;

const $hanburgerMenu = document.querySelector('.c-header__hamburger-menu');

function addMobalBar() {
    const $header = document.querySelector('.js-header');
    const $main = document.querySelector('main');

    if (situetion) {
        const humburgerSVG =
            '<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="50px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>';

        $main.style.zIndex = '-1';
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            $hanburgerMenu.innerHTML = humburgerSVG;
        }, 600);
    } else {
        const closeSVG =
            '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="30"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>';

        $main.style.zIndex = '0';
        document.body.style.overflow = '';
        $hanburgerMenu.innerHTML = closeSVG;

    }

    $header.classList.toggle('is-active', situetion);
    situetion = !situetion;
}
$hanburgerMenu.addEventListener('click', addMobalBar);