import Image from "next/image";
import ClipLoader from "react-spinners/ClipLoader";
const Loading = () => {
  return (
    <div className="grid place-items-center h-screen ">
      <div className="items-center">
        <Image
          src="/image_processing20210104-18320-1qp0a4c.png"
          alt="Logo Image"
          height={200}
          width={200} 
          className="mb-3 rounded-sm"
        />
        <ClipLoader
          color="indigo"
          size={60}
          className="flex flex-col ml-[70px] items-center"
        />
      </div>
    </div>
  );
};

export default Loading;
