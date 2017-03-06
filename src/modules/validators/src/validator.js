
class Validator {
  rules = [];

  addRule(key, rule, params) {
    this.rules.push({ key, rule, params });
  }

  validate(target) {
    return this.rules
      .map(entry => entry.rule(entry.key, target[entry.key], entry.params))
      .filter(error => error != '');
  }
}

const KEY = Symbol('validator');

function getValidator(target) {
  return target.constructor[KEY] || (target.constructor[KEY] = new Validator());
}

export function addRule(target, key, descriptor, rule, ...params) {
  let validator = getValidator(target);

  validator.addRule(key, rule, params);

  descriptor.writable = true; // TODO properties must have a initial value to be writable, default is false

  return descriptor;
}

export function validate_old(target) {
  let validator = getValidator(target);

  return validator.validate(target);
}
