import { useState, useRef } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types';
import styles from './Slider.module.css';

export interface SliderProps extends CommonProps {
  name?: string;
  value?: number;
  minValue?: number;
  maxValue?: number;
  step?: number;
  buffered?: boolean;
  disabled?: boolean;
  onChange: (value: number, e: MouseEvent) => void;
  onUpdate: (value: number, e: MouseEvent) => void;
}

export function Slider(props: SliderProps) {
  const {
    name,
    value = 0,
    minValue = 0,
    maxValue = 100,
    step = 1,
    buffered = false,
    disabled = false,
    onChange,
    onUpdate,
    className,
    style,
  } = props;
  const [bufferedValue, setBufferedValue] = useState(value || 0);
  const buffering = useRef(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const pct = bufferedValue / maxValue;
  const offet =
    inputRef.current && thumbRef.current
      ? (inputRef.current.clientWidth - thumbRef.current.clientWidth) * pct
      : 0;

  function handleChange(e) {
    const newValue = +e.currentTarget.value;
    setBufferedValue(newValue);

    if (buffered) {
      onUpdate(newValue, e);
    } else {
      onChange(newValue, e);
    }
  }

  function handleMouseDown() {
    buffering.current = true;
  }

  function handleMouseUp(e) {
    buffering.current = false;

    if (buffered) {
      onChange(bufferedValue, e);
    }
  }

  return (
    <div
      className={classNames(styles.slider, className, { [styles.disabled]: disabled })}
      style={style}
    >
      <div className={styles.track} />
      <div className={styles.fill} />
      <div className={styles.thumb} style={{ left: `${offet}px` }} ref={thumbRef} />
      <input
        ref={inputRef}
        type="range"
        name={name}
        min={minValue}
        max={maxValue}
        step={step}
        value={bufferedValue}
        onChange={handleChange}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        disabled={disabled}
      />
    </div>
  );
}

export default Slider;
