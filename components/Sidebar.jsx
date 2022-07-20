import { Avatar, Button, IconButton } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from "@mui/icons-material/Search";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, addDoc } from "firebase/firestore";
import { useCollection } from 'react-firebase-hooks/firestore';
import getOtherEmail from './../utils/getOtherEmail';
import { useRouter } from "next/router"

const Sidebar = () => {
  const [currentUser] = useAuthState(auth);
  const [snapshot, loading, error] = useCollection(collection(db, "chats"));
  const chats = snapshot?.docs.map(doc => ({ id: doc.id, ...doc.data() }))

  const router = useRouter();
  const redirect = (id) => {
    router.push(`/chat/${id}`)
  }

  const chatExists = email => chats?.find(chat => (chat.users.includes(currentUser.email) && chat.users.includes(email)))

  const newChat = async () => {
    const input = prompt("Enter email of whom you wish to connect ")
    if (!chatExists(input) && (input != currentUser.email)) {
      await addDoc(collection(db, "chats"), { users: [currentUser.email, input] })
    }
  }

  const chatList = () => {
    return (
      chats?.filter(chat => chat.users.includes(currentUser.email)).map(chat =>
        <div onClick={() => redirect(chat.id)} className="flex hover:bg-black cursor-pointer items-center p-1" key={Math.random()}>
          <Avatar src="" className="m-1 p-2" />
          <div className="font-bold truncate ml-1 ">
            {getOtherEmail(chat.users, currentUser)}
          </div>
        </div>
      )
    );
  }
  return (
    < div className="flex lg:w-[400px] md:w-[300px] w-full flex-col absolute right-0 left-0 top-0 bottom-0 bg-gray-900 text-white">
      <div className="h-[81px] w-full  flex items-center justify-between z-1 shadow-indigo-900 bg-gray-900">
        <div className="flex items-center lg:p-1 md:p-1 p-0">
          <Avatar src={currentUser.photoURL}   sx={{ width: 46, height: 46 }} variant="rounded"
            className="cursor-pointer hover:opacity-80 lg:p-2 lg:m-1 md:p-2 md:m-1 m-0 p-0 " />
          <div className="font-bold truncate invisible lg:visible md:visible">{currentUser.displayName}</div>
        </div>
        <div>
          <IconButton>
            <LogoutIcon onClick={() => auth.signOut()} style={{color:'red'}} />
          </IconButton>
        </div>
      </div>
      <div className="flex items-center p-4 rounded">
        <SearchIcon/>
        <input placeholder="Search in chat" className="flex-1 border-none outline-none bg-gray-500 rounded p-1 m-1 w-full"
        />
      </div>
      <Button onClick={() => newChat()} className="w-full bg-gray-500 font-bold mb-2 text-black" variant="text">Start a new chat</Button>
      <div className="flex flex-col overflow-y-auto scrollbar-hide overflow-hidden flex-1 h-screen">
        {chatList()}
      </div>
    </div >
  );
};

export default Sidebar;
