import { useState, useCallback, useLayoutEffect, Ref } from 'react';

export interface UseMeasureResults {
  ref: Ref<any>;
  dimensions: object;
  measure: () => void;
}

export function useMeasure(): UseMeasureResults {
  const [dimensions, setDimensions] = useState({});
  const [node, setNode] = useState<HTMLElement | null>(null);

  const ref = useCallback(e => setNode(e), []);

  const measure = useCallback(() => {
    window.requestAnimationFrame(() => {
      if (node) {
        setDimensions(node.getBoundingClientRect().toJSON());
      }
    });
  }, [node]);

  useLayoutEffect(() => {
    if (node) {
      measure();
    }

    window.addEventListener('resize', measure);
    window.addEventListener('scroll', measure);

    return () => {
      window.removeEventListener('resize', measure);
      window.removeEventListener('scroll', measure);
    };
  }, [node, measure]);

  return { ref, dimensions, measure };
}

export default useMeasure;
