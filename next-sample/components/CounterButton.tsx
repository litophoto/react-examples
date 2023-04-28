import { useCountButton } from "../hooks/useCountButton";

type CounterButtonProps = {
  label: string
  maximum: number
}

export const CounterButton = ({ label, maximum }: CounterButtonProps) => {
  const { label: buttonLabel, text, disabled, onClick } = useCountButton({
    label: label,
    maximum: maximum,
  });
  return (
    <div className="button-container">
      <span>{buttonLabel}</span>
      <button disabled={disabled} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};
