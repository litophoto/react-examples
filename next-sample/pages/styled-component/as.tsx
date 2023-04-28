import { NextPage } from "next";
import styled from "styled-components";

const Text = styled.p`
  color: blue;
  font-size: 2em;
`;

const Page: NextPage = () => {
  return (
    <>
      <Text>Hello</Text>
      <Text as="a" href="/">
        Go To Top
      </Text>
    </>
  );
};

export default Page;
