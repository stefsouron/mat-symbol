# stefsouron/mat-symbol
> **Version 0.0.1** - *25/10/2024*

<br />
This is a very simple and lightweight Material Design Symbols wrapper, to use on any web page, without dependency and normally totally framework independant (checks with various frameworks to be performed actually).

**It doesn't use the deprecated Material Icons specification, but only the newer Material Symbols spec.**
https://m3.material.io/blog/introducing-symbols 

It's based on the Outlined Google Font for Symbols, and will be extended later to use **Sharp** and **Rounded** versions, and with more about the new features.

You can find all symbols names and descriptions here: https://fonts.google.com/icons

## Basic Usage

Simply copy the `mat-symbol.js` file in the web components directory of your choice in your application codebase. It just has to be accessible publicly or routed thru your server. Then import it in your HTML file as a module:

```html
<script type="module" src="/... your components public path .../mat-symbol.js"></script>
```

This loads and registers the `<mat-symbol />` custom element.

Then just use it as any custom element in your markup, giving it the name of the symbol as content:

```html
<mat-symbol>settings</mat-symbol>
```

it will display the corresponding icon inline, with parent's font-size and color inherited.

You can force font-size and color traditionnally, thru CSS, but you can also force via properties on the custom element itself, for examples:

```html
<mat-symbol size="3rem">search</mat-symbol>
<mat-symbol color="#ea9522">search</mat-symbol>
<mat-symbol color="var(--default-icon-color)">settings</mat-symbol>
<mat-symbol size="48px" color="darkred">settings</mat-symbol>
```

Any valid CSS string value for font-size and color property will work.

The name should match one of the listed ones at https://fonts.google.com/icons, in both forms (`Check Circle` displays the same symbol than `check_circle`). If it doesn't match, the `Home`symbol will be displayed by default.

## Advanced usage

You can defer the loading of the script but it will cause an horizontal CLS on your page at each icon, as the symbol's names will be first briefly displayed. For this case it may be useful to later add a name property, with precedence on the tag's content.

You can also import it as a module in any JS based script. The custolm element will be registered in your browser anyway.

```javascript
import './... your path .../mat-symbol.js'
```

If you don't want to register the custom element and instanciate the class only, you can import just the **MaterialSymbol** class itself.

```javascript
import { MaterialSymbol } from './... your path .../mat-symbol.js'
```

You you want to test locally or collaborate on this component, the `index.html` file shows a page using it. You can serve it thru a local server or simply open the local file in your browser.

## Change Log

- **V 0.0.1** - 25/10/2024
Very first implementation

## TODO
- Maybe have a `name` property with precedence over textContent name, to avoid CLS when script loading is defered. In this case a non breakable space should be inserted ideally as content. But I'm still convinced that the name in content form will be prefered. To check at usage...
- Replace loading of the static font by the variable one, introducing acting on other new features (weight, optical focus, etc.) by CSS or by attributes / properties.
- I think we shouldn't react on attributes changes at runtime, as an icon size is something almost fixed, but confirmation from users is needed here.
- add the possibility to use the two other symbols fonts (**sharp** and **rounded**), maybe with loading on demand.
- Suggestions and issues are welcome: https://github.com/stefsouron/mat-symbol/issues
