import Sidebar from '../components/Sidebar';
const layout = ({children}) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex m-auto mt-5 mb-5 h-screen md:w-full">
        <Sidebar/>
        {children}
        </div>
    </div>
  );
}

export default layout;