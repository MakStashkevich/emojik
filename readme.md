# Emoji for JavaScript
I really a lot of use emoji. 
And I'm tired copy-past them from the messengers. 
After I'm created this module, which the solved a problem. 
I hope, this help you too.

## Installation

```npm
$ npm install emojik
```

## Example

### ES5
```javascript
// Import module
const Emojik = require('emojik');

// From path
console.log(Emojik.goblin.icon());

// Or from get() function
console.log(Emojik.get('goblin'));

// result: 👺
```

### ES6
```javascript
// Import module
import Emojik from 'emojik';

// From path
console.log(Emojik.goblin.icon());

// Or from get() function
console.log(Emojik.get('goblin'));

// result: 👺
```

## FAQ
### How use smiles with need colors?
```javascript
// From path
console.log(Emojik.ok_hand.icon('light'));

// Or from get() function
console.log(Emojik.get('ok hand', 'light'));

// result: 👌🏻
```
#### Available colors
`{ "light", "medium-light", "medium", "medium-dark", "dark" }`

### What happens, if I paste to get() function don't correct name?
```javascript
// You can paste names as you wish

// So
console.log(Emojik.get('flexed biceps'));

// Or so..
console.log(Emojik.get('FLEXED_BICEPS'));

// Or so....
console.log(Emojik.get(':::::::flexed+biceps::::::::'));

// result will be the same
// 💪
```