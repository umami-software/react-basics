import { CommonProps } from 'types';
import useToast from 'hooks/useToast';

export interface CopyTriggerProps extends CommonProps {
  value: any;
  notification?: 'tooltip' | 'toast';
  onCopy?: (value: any) => void;
}

export function CopyTrigger(props: CopyTriggerProps) {
  const { value, notification = 'toast', onCopy, children, ...domProps } = props;
  const { toast, showToast } = useToast();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);

    if (notification === 'toast') {
      showToast({ message: 'Copied!', variant: 'success' });
    }

    if (onCopy) {
      onCopy(value);
    }
  };

  return (
    <>
      {toast}
      <div {...domProps} onClick={handleCopy}>
        {children}
      </div>
    </>
  );
}

export default CopyTrigger;
