import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Chat App</title>
        <link rel="icon" href="/image_processing20210104-18320-1qp0a4c.png" />
      </Head>
    </div>
  );
};

export default Home;
