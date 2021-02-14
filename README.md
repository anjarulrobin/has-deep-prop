npm install has-deep-prop

An objects deep property can easily be checked. It can be a nested property or nested array or mixed. This property can safely be checked.

Example:

const hasDeep = require('has-deep-prop');

const deepObject = { name: { first:"John", last:"Doe" } };
const firstName = hasDeep(deepObject, "name.first"); // <= "John"

deepObject can be null, empty, undefined, array or mix.
if the object is an array then the index should be added as property.

For example:

const deepObject = { person: [{ address:[{city:"Dhaka"}, {city:"Chittagong"}] }] };
const city1 = hasDeep(deepObject, "person.0.address.0.city"); // <= "Dhaka"
const city2 = hasDeep(deepObject, "person.0.address.3.city"); // <= undefined