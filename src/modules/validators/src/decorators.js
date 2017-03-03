import { addRule } from './validator';
import * as Rules from './rules';

export function length(value) {
  return (target, key, descriptor) => {
    return addRule(target, key, descriptor, Rules.length, value);
  };
}

export function notBlank(target, key, descriptor) {
  return addRule(target, key, descriptor, Rules.notBlank);
}

export function required(target, key, descriptor) {
  return addRule(target, key, descriptor, Rules.required);
}
