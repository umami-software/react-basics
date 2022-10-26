import { RegisterOptions, useFormContext } from 'react-hook-form';

export interface HiddenInputProps {
  name: string;
  rules?: RegisterOptions;
}

export function HiddenInput(props: HiddenInputProps) {
  const { name, rules } = props;
  const { register } = useFormContext();

  return <input type="hidden" {...register(name, rules)} />;
}

export default HiddenInput;
