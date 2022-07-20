import Sidebar from '../components/Sidebar';
const layout = ({ children }) => {
  return (
    <div className="flex flex-col mt-0 mb-0 bottom-0 h-screen w-screen  justify-center items-center ">
      <div className="flex m-auto mt-0 mb-0 bottom-0 h-screen w-screen ">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}

export default layout;