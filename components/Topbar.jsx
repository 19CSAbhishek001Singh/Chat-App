import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link'

const Topbar = ({email}) => {
  return (
    <div className="flex bg-gray-900 h-[81px] lg:w-full md:w-full w-full sticky items-center lg:p-4 p-2">
      <div className="lg:text-lg md:text-md text-md text-white font-bold">{email}
      <Link href="/">
        <a><ArrowBackIcon className="m-2"/></a>
        </Link>
      </div>
    </div>
  )
}

export default Topbar;