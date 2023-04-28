import { NextPage } from "next";
import styled from "styled-components";

const Text = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes[3]};
  margin: ${(props) => props.theme.space[2]};
`;

const Page: NextPage = () => {
  return (
    <>
      <Text>theme example</Text>
    </>
  );
};

export default Page;
