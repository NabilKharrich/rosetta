# Rosetta

Lightweight client-side internationalization library.

## Basic usage

Your translations object should be formatted as so:

```javascript
cosnt yourObjName = {
    languageOne: {
        key: 'value',
        // ...
    },
    languageTwo: {
        key: 'value',
        // ...
    },
    // ...
}
```

Set the attribute `data-rosetta` with a value relative to your translations object to the element to be localized.

```html
<body>
    <h1 data-rosetta="title"></h1>
</body>
```

Import the library and initialise providing at least the data in the options.

```javascript
const translations = {
    // ...
}

const rosetta = new Rosetta({
    data: translations
});
```

## Multiple localization

You can either set a single value if your intent is to update just the `innerHTML` or set a JSON valid string formatted as so: `[position]: [value]`
Note that by using 'text' as position, Rosetta will use the value to replace the innerHTML.

```html
<p data-rosetta="name"></p>
<!-- ... -->
<p data-rosetta="hero.name"></p>
<!-- ... -->
<a data-rosetta='{"href": "anchorHref", "text": "anchorLabel"}'></a>
```

## Main language, default and automatic browser detection

The options allow you to select in which language you can translate your page on init and if you want to automatically try to detect the language from the browser. If the automatic detection fails or if the language detected isn't present in your translations object, Rosetta will fall back to your selected language.

```javascript
const rosetta = new Rosetta({
    data: translations,
    language: 'it',
    detectLanguage: true,
});
```

