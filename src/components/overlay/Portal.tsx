import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { getRandomChars } from 'components/utils';

export interface PortalProps {
  portalId?: string;
  portalElement?: Element;
  className?: string;
  style?: string;
  children?: ReactNode;
}

export function Portal(props: PortalProps): JSX.Element | null {
  const { portalId = '', portalElement, className = '', style = '', children } = props;
  const [element, setElement] = useState(portalElement);

  useEffect(() => {
    if (!element) {
      let portal = document.getElementById(portalId);

      if (!portal) {
        portal = document.createElement('div');
        portal.setAttribute('id', portalId || `__portal_${getRandomChars(8)}`);
        portal.setAttribute('class', className);
        portal.setAttribute('style', style);
        document.body.appendChild(portal);
      }

      setElement(portal);
    }

    return () => {
      if (!portalElement && element) {
        document.body.removeChild(element);
      }
    };
  }, [element]);

  if (!element) {
    return null;
  }

  return createPortal(children, element);
}

export default Portal;
