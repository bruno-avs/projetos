const $floatingMenu = document.querySelector('#floating-menu');

const $alertNorthingSelected = document.querySelector('#alert-northing-selected');
const $hrNorthingSelected = document.querySelector('#hr-northing-selected');

const clearBox = box => { box.innerHTML = '' };
const numbersSelected = [];

const $button = document.querySelector('#button-submit');
$button.addEventListener('click', event => {
    event.stopPropagation()

    const addNoSelectionAlert = () => {
        const addElementToAlertBox = (box, content) => {
            box.innerHTML = content;
        }

        const alertContent = `<i class="fa-solid fa-triangle-exclamation">
        </i> Please select a number`;
        const hrContent = `<hr>`;

        addElementToAlertBox($alertNorthingSelected, alertContent);
        addElementToAlertBox($hrNorthingSelected, hrContent);
    }

    if (numbersSelected.length === 0) {
        addNoSelectionAlert()
    } else {
        clearBox($floatingMenu);
       const svgImage = `
      <img src ="images/illustration-thank-you.svg" alt="img-thanks" id = "img-thanks">`;
        const divSelectedItems = `
      <div id="status-of-select-items">You selected ${numbersSelected.length} out of 5</div>`;
        const h1Thanks = `
      <h1 id="h1-thanks">Thank you!</h1>`;
        const pContent = `
      <p id="p-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus libero excepturi natus, culpa hic eligendi lorem.</p>`;

        $floatingMenu.innerHTML = `
    <div id="div-img-thanks">
      ${svgImage}
    </div>
    <div id="floating-box-status-selected">
      ${divSelectedItems}
    </div>
    <div id="floating-box-content-thanks">
      ${h1Thanks}
      ${pContent}
    </div>
    `
    }
})
// add numbers and modify style background numbers
const $boxSelect = document.querySelector('#floating-box-select-numbers');

$boxSelect.addEventListener('click', event => {
    event.stopPropagation()

    const styleSelectNumber = (indexOfSelectedNumber, backgroundColor, color) => {
        const $selectedNumberBox = document
            .querySelectorAll('.numbers-select')[indexOfSelectedNumber];
        $selectedNumberBox.style.background = backgroundColor;
        $selectedNumberBox.style.color = color;
    }
    const addSelectedNumber = number => {
        const indexOfNumberSelected = numbersSelected.indexOf(number)
        if (indexOfNumberSelected !== -1) {
            numbersSelected.splice(indexOfNumberSelected, 1)
            styleSelectNumber(number - 1, '#85858528', '#909294');
        } else {
            numbersSelected.push(number);
            styleSelectNumber(number - 1, '#909294', 'white');
        }
    }
    const events = event.target;
    const valueNumbers = events.attributes;

    if (valueNumbers.class !== undefined) {
        if (valueNumbers.class.value === 'numbers-select') {
            clearBox($alertNorthingSelected);
            clearBox($hrNorthingSelected);
            addSelectedNumber(valueNumbers.value.value);
        }
    }
})

