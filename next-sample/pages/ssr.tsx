import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

type SSRProps = {
  message: string;
};

const SSR: NextPage<SSRProps> = ({ message }: SSRProps) => {
  return (
    <>
      <Head>
        <title>Server Side Rendering</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <main>
        <p>This page is rendered server side when accessed one.</p>
        <p>{message}</p>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const timestamp = new Date().toLocaleString();
  const message = `It's ${timestamp}...`;
  console.log(message);

  return {
    props: {
      message,
    },
  };
};

export default SSR;
