import { useState } from "react";

const ConditionalRendering = () => {
  const [condition, setCondition] = useState(true);

  const handleToggleCondition = () => {
    setCondition(!condition);
  };
  return (
    <>
      <button onClick={handleToggleCondition}>Toggle Condition</button>
      <div>{condition && <span>Rendered when `truthy`</span>}</div>
      <div>{condition || <span>Rendered when `falsy`</span>}</div>
      <div>
        {condition ? (
          <span>Rendered when `truthy`</span>
        ) : (
          <span>Rendered when `falsy`</span>
        )}
      </div>
    </>
  );
};

export default ConditionalRendering;
