import { useState, useEffect } from 'react';

const breakpoints = {
  xs: [0, 576],
  sm: [576, 768],
  md: [768, 992],
  lg: [992, 1200],
  xl: [1200, 1400],
};

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState('xl');

  useEffect(() => {
    const resize = () => {
      setBreakpoint(
        Object.keys(breakpoints).find(key => {
          const width = window.innerWidth;
          const [min, max] = breakpoints[key];
          return width >= min && width < max;
        }) || 'xl',
      );
    };

    resize();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return breakpoint;
}

export default useBreakpoint;
