import { addRules } from './validator';

export function rules(...value) {
  return (target, key, descriptor) => {
    return addRules(target, key, descriptor, value);
  };
}
