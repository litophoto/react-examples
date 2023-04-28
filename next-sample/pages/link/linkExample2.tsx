import Link from "next/link";

const LinkExample2 = () => {
  return (
    <>
      <h1>Link Example 2</h1>
      <Link
        href={{
          pathname: "/link/linkExample",
          query: { keyword: "hello" },
        }}
      >
        <button>Go To Link Example</button>
      </Link>
    </>
  );
};

export default LinkExample2;
