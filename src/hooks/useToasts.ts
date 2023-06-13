import { useContext } from 'react';
import { ReactBasicsContext } from 'components/context/ReactBasicsProvider';
import { getRandomChars } from 'components/utils';

export function useToasts() {
  const { toasts, setToasts } = useContext(ReactBasicsContext);

  const showToast = props => {
    setToasts(state => state.concat({ ...props, id: `__toast_${getRandomChars(8)}` }));
  };

  const removeToast = id => {
    setToasts(state => state.filter(item => item.id !== id));
  };

  return { toasts, showToast, removeToast };
}
