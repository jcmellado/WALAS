
class Validator {
  rules = [];

  add(key, rule, params) {
    this.rules.push({ key, rule, params });
  }

  validate(target) {
    let errors = this.rules
      .map(entry => entry.rule(target[entry.key], entry.params))
      .filter(error => error);
    if (errors.length) {
      errors.forEach(error => console.log(error));
    }
  }
}

const KEY = Symbol('validator');

export function validate(target) {
  let validator = target.constructor[KEY] || (target.constructor[KEY] = new Validator());

  validator.validate(target);
}

export function addRule(target, key, descriptor, rule, ...params) {
  let validator = target.constructor[KEY] || (target.constructor[KEY] = new Validator());

  validator.add(key, rule, params);

  descriptor.writable = true;

  return descriptor;
}
