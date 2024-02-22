class Calculator {
    constructor(id) {
        this.currentDisplay = '';
        let calculatorShell = document.getElementById(id);
        let display = calculatorShell.querySelector('.screen');
        let wipeBtns = calculatorShell.querySelectorAll('[data-action-wipe]');
        let actionBtns = calculatorShell.querySelectorAll('[data-action]');
        let equalBtn = calculatorShell.querySelectorAll('[data-action-equal]');

        actionBtns.forEach(btn => {
            btn.addEventListener('click', e => {
                this.show(display, e.target.getAttribute('data-action'));
            });
        });

        wipeBtns.forEach(btn => {
            btn.addEventListener('click', e => {
                this.wipe(display);
            });
        });

        display.addEventListener('input', e => {
            this.currentDisplay = '';
            this.currentDisplay += e.target.value;
        });

        equalBtn[0].addEventListener('click', e => {
            this.equal(display);
        });
    }
    show(display, n) {
        this.currentDisplay += n;
        display.value = this.currentDisplay;
    };
    wipe(display) {
        this.currentDisplay = '';
        display.value = this.currentDisplay;
    }
    equal(display) {
        this.currentDisplay = eval(this.currentDisplay);
        display.value = this.currentDisplay;
    }
}

let calc = new Calculator('calculator');