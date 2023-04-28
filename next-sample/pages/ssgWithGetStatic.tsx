import { GetStaticProps, NextPage, NextPageContext } from "next";
import Head from "next/head";

type SSGProps = {
  message: string;
};

const SSGWithGetStatic: NextPage<SSGProps> = ({ message }: SSGProps) => {
  return (
    <div>
      <Head>
        <title>SSG with get static props</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <main>
        <p>This page is generated SSG with GetStaticProps.</p>
        <p>{message}</p>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
  const timestamp = new Date().toLocaleString();
  const message = `${timestamp} is done.`;
  console.log(message)
  return {
    props: {
      message,
    },
  };
};

export default SSGWithGetStatic;
