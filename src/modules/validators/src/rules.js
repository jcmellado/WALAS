
export function length(key, target, value) {
  return target && target.length && target.length > value ? `'${key}' length must be less than ${value}` : '';
}

export function notBlank(key, target, value) {
  return target && target.trim && target.trim() === '' ? `'${key}' can\'t be blank` : '';
}

export function required(key, target, value) {
  return target === null || target === undefined ? `'${key}' is required` : '';
}
