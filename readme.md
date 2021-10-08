# Rosetta

Lightweight client-side internationalization library.

## Basic setup

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
    <h1 data-rosetta="name"></h1>
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