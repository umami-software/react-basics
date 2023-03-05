import { useState, useEffect, useRef } from 'react';

export default function useVisible() {
  const [visible, setVisible] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    const handler = entries => {
      setVisible(
        entries[0].boundingClientRect.bottom >= 0 && entries[0].boundingClientRect.right >= 0,
      );
    };

    const observer = new IntersectionObserver(handler);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return { ref, visible };
}
