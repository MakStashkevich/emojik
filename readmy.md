# Emoji for JavaScript
I really a lot of use emoji. 
And I'm tired copy-past them from the messengers. 
After I'm created this module, which the solved a problem. 
I hope, this help you too.

## Installation

```npm
$ npm install emoji
```

## Example

### ES5
```javascript
// Import module
const Emoji = require('emoji');

// From path
console.log(Emoji.goblin.icon());

// Or from get() function
console.log(Emoji.get('goblin'));

// result: 👺
```

### ES6
```javascript
// Import module
import Emoji from 'emoji';

// From path
console.log(Emoji.goblin.icon());

// Or from get() function
console.log(Emoji.get('goblin'));

// result: 👺
```

## FAQ
### How use smiles with need colors?
```javascript
// From path
console.log(Emoji.ok_hand.icon('light'));

// Or from get() function
console.log(Emoji.get('ok hand', 'light'));

// result: 👌🏻
```
#### Available colors
`{ "light", "medium-light", "medium", "medium-dark", "dark" }`

### What happens, if I paste to get() function don't correct name?
```javascript
// You can paste names as you wish

// So
console.log(Emoji.get('flexed biceps'));

// Or so..
console.log(Emoji.get('FLEXED_BICEPS'));

// Or so....
console.log(Emoji.get(':::::::flexed+biceps::::::::'));

// result will be the same
// 💪
```