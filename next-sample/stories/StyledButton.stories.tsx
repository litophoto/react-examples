import { useState } from "react";
import { ComponentMeta } from "@storybook/react";
import { StyledButton } from "../components/StyledButton";
import { action } from "@storybook/addon-actions";
import React from "react";

export default {
  title: "StyledButton",
  component: StyledButton,
  artTypes: { 
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'success', 'transparent'],
    },
    childrent: {
      control: { type: 'text' },
    },
    onClick: { action: "clicked" } },
} as ComponentMeta<typeof StyledButton>;

const incrementAction = action("increment");

export const Primary = (props) => {
  const [count, setCount] = useState(0);
  const onClick = (e: React.MouseEvent) => {
    incrementAction(e, count);
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <StyledButton {...props} variant="primary" onClick={onClick}>
      Count: {count}
    </StyledButton>
  );
};

export const Success = (props) => {
  return (
    <StyledButton {...props} variant="success">
      Success
    </StyledButton>
  );
};

export const Transparent = (props) => {
  return (
    <StyledButton {...props} variant="transparent">
      Transparent
    </StyledButton>
  );
};
