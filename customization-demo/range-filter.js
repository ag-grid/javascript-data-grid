class RangeFilter {
    init(params) {
        this.params = params;

        this.filter = '';

        this.form = document.createElement('form');
        this.input = document.createElement('input');
        const button = document.createElement('button');

        this.form.appendChild(this.input);
        this.form.appendChild(button);

        this.input.name = 'filter';
        this.input.value = this.filter;
        button.textContent = 'Apply';

        this.form.addEventListener('submit', (event) => {
            event.preventDefault();

            let filter = event.target.elements.filter.value;

            if (this.filter !== filter) {
                this.filter = filter;
                this.params.filterChangedCallback();
            }
        });
    }

    getGui() {
        return this.form;
    }

    isFilterActive() {
        return this.filter !== '';
    }

    doesFilterPass(params) {
        const filter = this.filter.split('-');
        const gt = Number(filter[0]);
        const lt = Number(filter[1]);
        const value = this.params.valueGetter(params.node);

        return value >= gt && value <= lt;
    }

    getModel() {
        return {filter: this.filter};
    }

    setModel(model) {
        this.filter = model ? model.filter : '';
    }

    afterGuiAttached(params) {
        this.input.focus();
    }
}