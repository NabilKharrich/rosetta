import Rosetta from '../src';

const data = {
    en: {
        label: 'translated label',
        url: 'www.google.com',
        attribute: 'test',
    },
    it: {
        label: 'etichetta tradotta',
    },
    fr: {
        label: 'étiquette traduite',
    },
};

const rosetta = new Rosetta({
    selector: '[data-rosetta]',
    data,
    language: 'fr',
    defaultLanguage: 'en',
});
