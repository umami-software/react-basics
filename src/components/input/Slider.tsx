import { useState, useRef } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'components/types';
import styles from './Slider.module.css';
import useCallbackRef from 'hooks/useCallbackRef';

export interface SliderProps extends CommonProps {
  name?: string;
  value?: number;
  minValue?: number;
  maxValue?: number;
  step?: number;
  buffered?: boolean;
  disabled?: boolean;
  fill?: 'left' | 'right';
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
    fill = 'left',
    onChange,
    onUpdate,
    className,
    style,
  } = props;
  const [bufferedValue, setBufferedValue] = useState(value || 0);
  const [, setRef] = useCallbackRef(null);
  const buffering = useRef(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const pct = bufferedValue / maxValue;
  const width =
    inputRef.current && thumbRef.current
      ? inputRef.current.clientWidth - thumbRef.current.offsetWidth
      : 0;
  const offet = width * pct;

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
      className={classNames(styles.slider, className, {
        [styles.disabled]: disabled,
        [styles.left]: fill === 'left',
        [styles.right]: fill === 'right',
      })}
      style={style}
      ref={setRef}
    >
      <div className={styles.track} />
      <div className={styles.fill} style={{ width: `${offet}px` }} />
      <div ref={thumbRef} className={styles.thumb} style={{ left: `${offet}px` }} />
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
