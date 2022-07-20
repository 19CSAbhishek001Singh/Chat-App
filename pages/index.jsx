import Head from "next/head";
import Image from "next/image"
const Home = () => {
  return (
    <div className="flex mt-0 mb-0 bottom-0 h-screen w-screen place-content-center items-center lg:bg-black md:bg-black bg-gray-900">
      <Head>
        <title>Real Time Chat App</title>
        <link rel="icon" href="/image_processing20210104-18320-1qp0a4c.png" />
      </Head>
      <div style={{ width: '50%', textAlign: 'center' }} className="text-lg invisible lg:visible md:visible justify-center">
        <Image className="rounded-2xl" src="/image_processing20210104-18320-1qp0a4c.png" height={250} width={250} />
        <p style={{ color: 'gray' }}>
          Welcome to Real Time Chat App
        </p>
      </div>
    </div>
  );
};

export default Home;
