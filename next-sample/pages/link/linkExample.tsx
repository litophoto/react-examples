import Link from "next/link";

const LinkExample = () => {
  return (
    <>
      <h1>Link Example</h1>
      <Link href="/link/index">
        <button>Go To Index</button>
      </Link>
      <Link href="/link/linkExample2">
        <button>Go To Link Example 2</button>
      </Link>
    </>
  );
};

export default LinkExample;
