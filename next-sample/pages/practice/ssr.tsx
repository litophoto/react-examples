import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

type SSRProps = {
  message: string;
};

const SSR: NextPage<SSRProps> = ({ message }) => {
  return (
    <>
      <Head>
        <title>SSR</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <main>
        <p>This page is Server Side Rendering.</p>
        <p>{message}</p>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const timestamp = new Date().toLocaleString();
  const message = `It's ${timestamp}`;
  console.log(message);

  return {
    props: {
      message,
    },
  };
};

export default NextPage;
