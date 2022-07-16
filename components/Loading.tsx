import Image from "next/image";
import { Circle } from "better-react-spinkit";
const Loading = () => {
  return (
    <div className="grid place-items-center h-screen ">
      <div>
        <Image
          src="/image_processing20210104-18320-1qp0a4c.png"
          alt="Logo Image"
          height={200}
          width={200} 
          className="mb-3 rounded-sm"
        />
        <Circle
          color="indigo"
          size={60}
          className="flex flex-col items-center"
        />
      </div>
    </div>
  );
};

export default Loading;
