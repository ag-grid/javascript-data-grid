class NumberCellFormatter {
    init(params) {

        const text = params.value.toLocaleString(undefined, {style: 'currency', currency: 'EUR'});

        this.eGui = document.createElement('span');
        this.eGui.innerHTML = text;
    }

    getGui() {
        return this.eGui;
    }
}