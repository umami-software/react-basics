export function makeStory(template, props = {}) {
  return Object.assign(template.bind({}), { ...props });
}
