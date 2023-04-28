import { useState, useCallback } from "react";
import { Button } from "../Presentational/Button";

const usePopup = () => {
  const cb = useCallback((text: string) => {
    prompt(text);
  }, []);

  return cb;
};

type CountButtonProps = {
  label: string;
  maximum: number;
};

export const CountButton = (props: CountButtonProps) => {
  const { label, maximum } = props;

  const displayPopup = usePopup();

  const [count, setCount] = useState(0);

  const onClick = useCallback(() => {
    const newCount = count + 1;
    setCount(newCount);
    if (newCount >= maximum) {
      displayPopup(`You've been clicked ${newCount} times.`);
    }
  }, [count, maximum, displayPopup]);

  const disabled = count >= maximum;
  const text = disabled
    ? `Can't click any more`
    : `You've been clicked ${count} times.`;

  return <Button disabled={disabled} onClick={onClick} label={label} text={text} />;
};
