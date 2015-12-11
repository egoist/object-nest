# object-nest [![Build Status](https://img.shields.io/circleci/project/egoist/object-nest/master.svg)](https://circleci.com/gh/egoist/object-nest/tree/master)

Assign some property nestly

## Installation

```bash
npm install --save object-nest
```

## Example

```javascript
const objectNest = require('object-nest');
var obj = { a: 1 };
obj = objectNest(obj, 'b.c.d', 'hello');
// return Object
{
  a: 1,
  b: {
    c: {
      d: 'hello'
    }
  }
}
```

## License

MIT &copy; [EGOIST](https://github.com/egoist)