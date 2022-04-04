class Calculator {
    constructor(resultArea, operatorsButtons, buttonsOperators) {
        this.resultArea = document.querySelector(resultArea);
        this.operatorsButtons = document.querySelector(operatorsButtons);
        this.buttonsOperators = document.querySelector(buttonsOperators);
        this.values = '';
        // quando usamos uma função de callback no addeventlistener o this passa a referencia o objeto clicado 
        //pra resover isso é só mudar a referencia usando o método bind
        this.startFunctions = this.startFunctions.bind(this);
    }
    filterValues(value) {
        const iDoNotWant = ['del', '=', 'reset']
            .filter(item => item === value);
        return iDoNotWant.length === 0 ? true : false;
    }
    deleteLastValue() {
        this.values = this.resultArea.innerText
            .substring(0, this.resultArea.innerText.length - 1);
    }
    clearAllValues() {
        this.values = ''
    }
    calculateValues() {
        this.values = eval(this.values);
    }
    render() {
        const result = this.values
            .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
            .replace('$', '')
            .replace('R', '')

        this.resultArea.innerText = result.replace('*', 'x');
    }
    separateValues(event) {
        const buttonAttributes = event.target.attributes;

        const valueBuntton = buttonAttributes.value
        let valueProperty = ''
        if (valueBuntton !== undefined) valueProperty = buttonAttributes.value.value;


        const classe = buttonAttributes.class.value.split(' ');


        if (classe[1] && this.filterValues(valueProperty)) this.values += valueProperty;
        if (valueProperty == 'reset') this.clearAllValues();
        if (valueProperty == 'del') this.deleteLastValue();
        if (valueProperty == '=') this.calculateValues();
    }
    startFunctions(event) {
        this.separateValues(event)
        this.render()
    }
    addEvent() {
        this.operatorsButtons.addEventListener('click', this.startFunctions);
    }
    startcalculator() {
        this.addEvent();
    }
}

const calculator = new Calculator(
    ".js-result-area",
    ".js-main-operators",
    ".js-operators"
)

calculator.startcalculator();
