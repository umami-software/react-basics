import { useState, useCallback, ReactElement, useRef } from 'react';
import Tooltip from 'components/overlay/Tooltip';

export function useTooltip(message) {
  const [tooltip, setTooltip] = useState<ReactElement | null>(null);
  const ref = useRef<HTMLElement | null>(null);

  return { ref };
}

export default useTooltip;
