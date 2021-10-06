class Rosetta {
    constructor({ data, language = 'en', selector = '[data-translate]' }) {
        this.config = {
            data,
            language,
            selector: [...document.querySelectorAll(selector)],
        };
        console.log('test');

        this.init();
    }

    translate(element, language) {
        console.log(language);
        const values = element.getAttribute('data-tr')?.split(/\s/g);
        const attributes = element?.getAttribute('data-tr-attr')?.split(/\s/g);

        if (attributes && values.length != attributes.length) {
            console.warn('provide the same length of values and attributes');
        } else if (!attributes && values.length > 1) {
            console.warn(
                "provide only one value if attributes aren't available"
            );
        } else {
            values.forEach((value) => {});
        }
    }

    init() {
        this.config.selector.forEach((element) => {
            this._translate(element, this.config.language);
        });
    }
}

new Rosetta({
    data: TRANSLATIONS,
});
