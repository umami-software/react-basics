import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const PORTAL_ID = '__react-basics-portal';

export interface PortalProps {
  portalId: string;
  portalElement?: Element;
  children?: ReactNode;
}

export function Portal(props: PortalProps): JSX.Element | null {
  const { portalId = PORTAL_ID, portalElement, children } = props;
  const [element, setElement] = useState(portalElement);

  useEffect(() => {
    if (!element) {
      const portal = document.createElement('div');
      portal.setAttribute('id', portalId);

      document.body.appendChild(portal);

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
