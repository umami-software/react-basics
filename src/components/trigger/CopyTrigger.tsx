import { CommonProps } from 'components/types';
import useToast from 'hooks/useToast';

export interface CopyTriggerProps extends CommonProps {
  value: any;
  message?: string;
  notification?: 'tooltip' | 'toast';
  onCopy?: (value: any) => void;
}

export function CopyTrigger(props: CopyTriggerProps) {
  const { value, message, notification = 'toast', onCopy, children, ...domProps } = props;
  const { toast, showToast } = useToast();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);

    if (notification === 'toast') {
      showToast({ message: message || 'Copied to clipboard!', variant: 'success' });
    }

    onCopy?.(value);
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
