import { addRules } from './validator';

export function rules(...params) {
  return (target, key, descriptor) => {
    return addRules(target, key, descriptor, params);
  };
}
