export default class Rosetta {
    constructor({
        data,
        language = 'it',
        defaultLanguage = 'en',
        selector = '[data-rosetta]',
    }) {
        this.config = {
            data,
            language,
            defaultLanguage,
            selector: [...document.querySelectorAll(selector)],
        };

        this.translatePage(this.config.language);
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
