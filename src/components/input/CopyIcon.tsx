import { Copy } from 'icons';
import Icon from 'components/common/Icon';
import CopyTrigger, { CopyTriggerProps } from 'components/input/CopyTrigger';

export function CopyIcon(props: CopyTriggerProps) {
  return (
    <CopyTrigger {...props}>
      <Icon>
        <Copy />
      </Icon>
    </CopyTrigger>
  );
}

export default CopyIcon;
