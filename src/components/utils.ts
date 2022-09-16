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

export function isValidChild(child: ReactElement, types: FC[]) {
  if (!isValidElement(child)) {
    return false;
  }

  return types.find(type => type.name === (child.type as FC).displayName);
}

export function cloneChildren(
  children: ReactNode,
  handler: (child: ReactElement, index: number) => object | undefined,
  validChildren?: FC[],
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
