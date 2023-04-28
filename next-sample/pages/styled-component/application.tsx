import { NextPage } from "next";
import Link, { LinkProps } from "next/link";
import styled from "styled-components";

type BaseLinkProps = React.PropsWithChildren<LinkProps> & {
  className?: string;
  children: React.ReactNode;
};

const BaseLink = ({ className, children, ...rest }: BaseLinkProps) => {
  return (
    <Link className={className} {...rest}>
      {children}
    </Link>
  );
};

const StyledLink = styled(BaseLink)`
  color: #1e90ff;
  font-size: 2em;
`;

const Page: NextPage = () => {
  return (
    <>
      <StyledLink href="/">Go To Top</StyledLink>
    </>
  );
};

export default Page;
