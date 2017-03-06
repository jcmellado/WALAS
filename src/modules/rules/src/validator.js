
const symbols = {
  validator: Symbol('validator'),
};

class Validator {
  _rules = [];

  addRules(key, rules) {
    rules.forEach(rule => {
      if (Array.isArray(rule)) {
        this._rules.push({ key, rule: rule[0], params: rule.slice(1) });
      } else {
        this._rules.push({ key, rule, params: [] });
      }
    });
  }

  validate(target) {
    return this._rules
      .map(entry => entry.rule(entry.key, target[entry.key], ...entry.params))
      .filter(error => error);
  }
}

function getValidator(target) {
  return target.constructor[symbols.validator] ||
    (target.constructor[symbols.validator] = new Validator());
}

export function validate(target) {
  let validator = getValidator(target);

  return validator.validate(target);
}

export function addRules(target, key, descriptor, rules) {
  let validator = getValidator(target);

  validator.addRules(key, rules);

  descriptor.writable = true; // TODO attribute class must have a initial value to be writable, default is false

  return descriptor;
}
