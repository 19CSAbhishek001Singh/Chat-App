import ClipLoader from "react-spinners/ClipLoader";
const Loading = () => {
  return (
    <div className="grid place-items-center h-screen bg-gray-900">
      <div className="items-center">
        <img
          className="h-52 w-52 mb-12 rounded-3xl"
          src="/image_processing20210104-18320-1qp0a4c.png"
          alt="LOGO Image"
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
