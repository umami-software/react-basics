import { Copy } from 'icons';
import Icon from 'components/common/Icon';
import useToast from 'hooks/useToast';

export interface CopyButtonProps {
  value: any;
  notification?: 'tooltip' | 'toast' | 'none';
  onCopy?: (value: any) => void;
}

export function CopyButton(props: CopyButtonProps) {
  const { value, notification = 'toast', onCopy } = props;
  const { toast, showToast } = useToast();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);

    if (notification === 'toast') {
      showToast('Copied!');
    }

    if (onCopy) {
      onCopy(value);
    }
  };

  return (
    <>
      {toast}
      <Icon onClick={handleCopy}>
        <Copy />
      </Icon>
    </>
  );
}

export default CopyButton;
