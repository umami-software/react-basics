import {
  Children,
  cloneElement,
  FC,
  Fragment,
  isValidElement,
  ReactElement,
  ReactNode,
} from 'react';

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
  options?: { validChildren?: any[] },
): ReactNode {
  if (!children) {
    return null;
  }

  const { validChildren } = options || {};

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

export function renderChildren(
  children: ReactNode | ((item: any, index: number, array: any) => ReactNode),
  items?: any[],
): ReactNode {
  if (items && typeof children === 'function') {
    return items.map(children);
  }

  return children as ReactNode;
}

export function countChildren(children): number {
  return Children.count(getFragmentChildren(children));
}

export function ensureArray(arr?: any): any[] {
  if (arr === undefined || arr === null) return [];
  if (Array.isArray(arr)) return arr;
  return [arr];
}
