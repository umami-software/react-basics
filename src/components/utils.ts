import {
  Children,
  cloneElement,
  FC,
  Fragment,
  isValidElement,
  ReactElement,
  ReactNode,
} from 'react';

export function addClassNames(styles: object, props: object) {
  return Object.keys(props).reduce((obj, key) => {
    const prop = props[key];

    if (prop) {
      const { value, map } = prop;

      if (value && map) {
        for (const name of map) {
          obj[styles[name]] = value === name;
        }
      } else {
        obj[styles[key]] = Boolean(prop);
      }
    }

    return obj;
  }, {});
}

export function getFragmentChildren(children: ReactNode) {
  return (children as ReactElement)?.type === Fragment
    ? (children as ReactElement).props.children
    : children;
}

export function isValidChild(child: ReactElement, types: FC | FC[]) {
  if (!isValidElement(child)) {
    return false;
  }
  return (Array.isArray(types) ? types : [types]).find(type => type === child.type);
}

export function cloneChildren(
  children: ReactNode,
  handler: (child: ReactElement, index: number) => object | undefined,
  validChildren?: any[],
) {
  if (!children) {
    return null;
  }
  return Children.map(getFragmentChildren(children), (child, index) => {
    if (validChildren && !isValidChild(child, validChildren)) {
      return null;
    }
    if (isValidElement(child)) {
      return cloneElement(child, handler(child, index));
    }

    return child;
  });
}

export function shuffleArray(a) {
  const arr = a.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

export function getRandomChars(
  n,
  chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
) {
  const arr = shuffleArray(chars.split(''));
  let s = '';
  for (let i = 0; i < n; i++) {
    s += arr[Math.floor(Math.random() * arr.length)];
  }
  return s;
}

export function ensureArray(arr?: any) {
  if (arr === undefined || arr === null) return [];
  if (Array.isArray(arr)) return arr;
  return [arr];
}
