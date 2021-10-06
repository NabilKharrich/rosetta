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
        const values = element
            .getAttribute('data-rosetta')
            ?.split(/\s/g)
            .filter((val) => val);

        const attributes = element
            ?.getAttribute('data-rosetta-attr')
            ?.split(/\s/g)
            .filter((val) => val);

        if (attributes && values.length != attributes.length) {
            console.warn(
                '🪦 Rosetta: provide the same length of values and attributes 🪦'
            );
        } else if (!attributes && values.length > 1) {
            console.warn(
                "🪦 Rosetta: provide only one value if attributes aren't available 🪦"
            );
        } else {
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

                if (elementAttribute === 'innerHTML') {
                    element[elementAttribute] = elementValue;
                } else {
                    element.setAttribute(elementAttribute, elementValue);
                }
            });
        }
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
