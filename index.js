// deepKey is the dotted format of a key. example name.first
// it can be an array index too. like person.0.name.first
const hasDeepProp = (obj, deepKey) => {
  let value = obj;
  const keys = deepKey.split(".");

  for (const key of keys) {
    value = (value && value.hasOwnProperty(key)) ? value[key] : undefined;
  }

  return value;
};

module.exports = hasDeepProp;
