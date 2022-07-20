import { Avatar } from "@mui/material";
const Topbar = ({email}) => {
  return (
    <div className="flex bg-gray-900 h-[81px] lg:w-full md:w-full w-full items-center lg:p-4 p-2">
      <div className="lg:text-lg md:text-md text-md text-white font-bold">{email}</div>
    </div>
  )
}

export default Topbar;