export function makeStory(template, props = {}) {
  return Object.assign(template.bind({}), { ...props });
}

export function map(n, handler) {
  return Array.from(new Array(n)).map(handler);
}
