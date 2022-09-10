export function addClassNames(styles, name, list) {
  return list.reduce((obj, key) => {
    obj[styles[key]] = key === name;
    return obj;
  }, {});
}
