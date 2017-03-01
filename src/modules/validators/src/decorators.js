import { validate } from './validator';
import * as Rules from './rules';

export function length(value) {
  return (target, key, descriptor) => {
    return validate(target, key, descriptor, Rules.length, value);
  };
}

export function notBlank(target, key, descriptor) {
  return validate(target, key, descriptor, Rules.notBlank);
}

export function required(target, key, descriptor) {
  return validate(target, key, descriptor, Rules.required);
}
