import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { getRandomChars } from 'components/utils';

export interface PortalProps {
  portalId?: string;
  portalElement?: Element;
  children?: ReactNode;
}

export function Portal(props: PortalProps): JSX.Element | null {
  const { portalId = '', portalElement, children } = props;
  const [element, setElement] = useState(portalElement);

  useEffect(() => {
    if (!element) {
      let portal = document.getElementById(portalId);

      if (!portal) {
        portal = document.createElement('div');
        portal.setAttribute('id', portalId || `__portal-${getRandomChars(8)}`);
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
