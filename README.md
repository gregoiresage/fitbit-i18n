
# fitbit-i18n

Simple translation module for fitbit apps

### Installation

`npm install fitbit-i18n`

### Translation files

You should create a translation file in `resources\i18n` for every locale you want to support.

The module will read the locale language from the [Fitbit user settings](https://dev.fitbit.com/build/reference/device-api/user-settings/#variable-locale) and will look for a file named `[locale].json` in the `resources\i18n` folder (e.g. `resources\i18n\fr-FR.json`)

If the file doesn't exist, it will look for the file named with the 2 first characters of the locale (e.g.  `resources\i18n\fr.json`). This permits to have a unique file for all the countries with the same language (`fr-be, fr-ca, fr-fr, ...`)

Then the module will also try to load the fallback translations in the `en.json` file.

Example, fr-fr.json could contain :

``` json
	{
		"SUNDAY": "DIMANCHE",
		"MONDAY": "LUNDI",
		"TUESDAY": "MARDI",
		"WEDNESDAY": "MERCREDI",
		"THURDSAY": "JEUDI",
		"FRIDAY": "VENDREDI",
		"SATURDAY": "SAMEDI"
	}
```

### Usage

Simply import and use the module like that :
``` javascript
	import { __ } from  'fitbit-i18n'
	let translated = __('SUNDAY')  // DIMANCHE if the locale is fr-FR
```

If the `SUNDAY` key is found in the default language translation file => perfect.
If not, the module uses the translation from the fallback file.
If it is still not present, the key will be used.