An objects deep property can easily and safely be checked.
The object can be a regular javascript object or an array or any level of depth of their mixed kind.
***If the property is found then it will return the value of that property otherwise will return undefined***.

# Installation
To install the package run
> $ npm install has-deep-prop

# Usage
``` 

const hasDeep = require('has-deep-prop');
const deepObject = { name: { first:"John", last:"Doe" } };
const firstName = hasDeep(deepObject, "name.first"); // <= "John"

```

## Params
* It takes 2 parameter.
* The object and deepKey.
* object {object}: The object whose value to check. Object can be null, empty, undefined, array or mix.
* deepKey {string}: The deep key in string format. Dot notation should be used. If the object is an array then the index should be added as property.

# Example:
```

const hasDeep = require('has-deep-prop');
const deepObject = { person: [{ address:[{city:"Dhaka"}, {city:"Chittagong"}] }] };
const city1 = hasDeep(deepObject, "person.0.address.0.city"); // <= "Dhaka"
const city2 = hasDeep(deepObject, "person.0.address.3.city"); // <= undefined

```
