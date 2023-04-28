import { useState, useCallback } from "react";

const usePopup = () => {
  const cb = useCallback((text: string) => {
    prompt(text);
  }, []);

  return cb;
};

type UseCountButtonProps = {
  label: string;
  maximum: number;
};

export const useCountButton = ({ label, maximum }: UseCountButtonProps) => {
  const displayPopup = usePopup();
  const [count, setCount] = useState(0);

  const onClick = useCallback(() => {
    const newCount = count + 1;
    setCount(newCount);
    if (maximum <= newCount) {
      displayPopup(`You've clicked ${newCount} times.`);
    }
  }, [count, maximum, displayPopup]);

  const disabled = maximum <= count;
  const text = disabled
    ? `Can't click any more`
    : `You've been clicked ${count} times.`;

  return { label, text, disabled, onClick };
};
