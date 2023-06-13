import { CommonProps } from 'components/types';
import { useToasts } from 'hooks/useToasts';

export interface CopyTriggerProps extends CommonProps {
  value: any;
  message?: string;
  notification?: 'tooltip' | 'toast';
  disabled?: boolean;
  onCopy?: (value: any) => void;
}

export function CopyTrigger(props: CopyTriggerProps) {
  const { value, message, notification = 'toast', disabled, onCopy, children, ...domProps } = props;
  const { showToast } = useToasts();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);

    if (notification === 'toast') {
      showToast({ message: message || 'Copied!', variant: 'success' });
    }

    onCopy?.(value);
  };

  return (
    <>
      <div {...domProps} onClick={!disabled ? handleCopy : undefined}>
        {children}
      </div>
    </>
  );
}

export default CopyTrigger;
