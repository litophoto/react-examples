import { NextPage } from "next";
import Head from "next/head";

type SSGProps = {};

const SSG: NextPage<SSGProps> = () => {
  return (
    <div>
      <Head>
        <title>Static Site Generation</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <main>
        <p>This page is generated as static site.</p>
      </main>
    </div>
  );
};

export default SSG