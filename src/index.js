export default class Rosetta {
    constructor({
        data = undefined,
        language = 'it',
        defaultLanguage = 'en',
        detectLanguage = false,
        selector = '[data-rosetta]',
    }) {
        this.config = {
            data,
            language,
            defaultLanguage,
            detectLanguage,
            browserLanguage: null,
            selector: [...document.querySelectorAll(selector)],
        };

        if (!this.config.data) {
            console.warn(`🪦 Rosetta: Provide data for translations 🪦`);
        } else if (this.config.detectLanguage) {
            this.detectLanguage();
        } else {
            this.translatePage(this.config.language);
        }
    }

    detectLanguage() {
        this.config.browserLanguage = navigator.language.split('-')[0];

        if (!this.config[this.config.browserLanguage]) {
            console.warn(
                `🪦 Rosetta: Browser language not available, the page has been translated with the preferred language 🪦`
            );
            this.translatePage(this.config.language);
        } else {
            this.translatePage(this.config.browserLanguage);
        }
    }

    translate(element, language) {
        const elementData = (function () {
            try {
                return JSON.parse(element.getAttribute('data-rosetta'));
            } catch {
                return element.getAttribute('data-rosetta');
            }
        })();

        const values =
            typeof elementData === 'string'
                ? [elementData]
                : Object.values(elementData);

        const attributes =
            typeof elementData === 'string'
                ? ['innerHTML']
                : Object.keys(elementData);

        values.forEach((value, valueIndex) => {
            const parentLanguage =
                this.config.data[language].parent ||
                this.config.defaultLanguage;

            const elementValue =
                this.config.data[language][value] != undefined
                    ? this.config.data[language][value]
                    : this.config.data[parentLanguage][value];

            const elementAttribute =
                attributes &&
                attributes[valueIndex] != 'text' &&
                attributes[valueIndex] != ''
                    ? attributes[valueIndex]
                    : 'innerHTML';

            if (!elementValue) {
                console.warn(
                    `🪦 Rosetta: Value ${value.toUpperCase()} not found 🪦`
                );
            } else if (elementAttribute === 'innerHTML') {
                element[elementAttribute] = elementValue;
            } else {
                element.setAttribute(elementAttribute, elementValue);
            }
        });
    }

    translatePage(language) {
        const elements =
            typeof this.config.selector === 'string'
                ? [...document.querySelectorAll(this.config.selector)]
                : this.config.selector;

        elements.forEach((element) => {
            this.translate(element, language);
        });
    }
}
