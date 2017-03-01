
export function length(target, value) {
  return target && target.length && target.length > value ? 'Wrong length' : '';
}

export function notBlank(target, value) {
  return target && target.trim && target.trim() === '' ? 'Can\'t be blank' : '';
}

export function required(target, value) {
  return target === null || target === undefined ? 'Required' : '';
}
