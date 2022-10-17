import { useState, useEffect } from "react";

type Props = {
  value: number;
};

const Square = (props: Props) => {
  const [value, setValue] = useState<number | string>();
  useEffect(() => {
    setValue(props.value);
  }, []);

  const setValueX = () => {
    setValue("X");
  };
  return (
    <button className="square" onClick={setValueX}>
      {value}
    </button>
  );
};

export default Square;
