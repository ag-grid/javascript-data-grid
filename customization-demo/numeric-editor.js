class NumericCellEditor {
    init(params) {
        this.textInput = document.createElement('input');
        this.textInput.value = params.value;

        this.textInput.addEventListener('keypress', (event) => {
            if (!isNumeric(event)) {
                event.preventDefault();
            }

            function isNumeric(event) {
                return /\d/.test(event.key);
            }
        });

        this.textInput.addEventListener('keydown', (event) => {
            if (event.keyCode === 39 || event.keyCode === 37) {
                event.stopPropagation();
            }
        });
    }

    getGui() {
        return this.textInput;
    }

    afterGuiAttached() {
        if (this.textInput) this.textInput.focus();
    };

    getValue() {
        return Number(this.textInput.value);
    };
}
