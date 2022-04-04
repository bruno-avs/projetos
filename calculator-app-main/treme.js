const $rangeTheme = document.querySelector(".js-nav__treme-button");
const $calculatorArea = document.querySelector(".js-calculator-area")
let treme_2 = 'on2';
let treme_3 = 'on3';

const treme3 = () => {
    document.body.style.background = 'hsl(268, 75%, 9%)';
    $calculatorArea.classList.remove(treme_2)
    $calculatorArea.classList.add(treme_3);
}
const treme2 = () => {
    document.body.style.background = 'hsl(0, 0%, 90%)';
    $calculatorArea.classList.remove(treme_3)
    $calculatorArea.classList.add(treme_2);
}
const treme1 = () => {
    document.body.style.background = 'hsl(222, 26%, 31%)';
    $calculatorArea.classList.remove(treme_3, treme_2)

}
$rangeTheme.addEventListener('mouseup', event => {
    event.stopPropagation()
    const rangeValue = Number($rangeTheme.value)
    if (rangeValue < 33) treme1();
    if (rangeValue > 33) treme2();
    if (rangeValue > 66) treme3();
})