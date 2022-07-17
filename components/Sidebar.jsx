import { Avatar, Button, IconButton } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from "@mui/icons-material/Search";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, addDoc} from "firebase/firestore";
import { useEffect, useState} from "react";
import { useCollection } from 'react-firebase-hooks/firestore';
import getOtherEmail from './../utils/getOtherEmail';
import {useRouter} from "next/router"

const Sidebar = () => {
  const [currentUser] = useAuthState(auth);
  const [snapshot, loading, error] = useCollection(collection(db, "chats"));
  const chats = snapshot?.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  
  const router=useRouter();
  const redirect = (id) => {
    router.push(`/chat/${id}`)
  }
  
  const chatExists=email=>chats?.find(chat=>(chat.users.includes(currentUser.email)&& chat.users.includes(email)))

  const newChat=async()=>{
    const input=prompt("Enter email of whom you wish to connect ")
    if(!chatExists(input)&&(input!=currentUser.email)){
    await addDoc(collection(db,"chats"),{users:[currentUser.email,input]})
    }
  }

  const chatList = () => {
    return (
      chats?.filter(chat=>chat.users.includes(currentUser.email)).map(chat =>
        <div onClick={()=>redirect(chat.id)} className="flex hover:bg-gray-200 cursor-pointer items-center p-1" key={Math.random()}>
          <Avatar src="" className="m-1 p-2" />
          <div className="font-bold truncate ml-1 ">
            {getOtherEmail(chat.users,currentUser)}
          </div>
        </div>
      )
    );
  }
  return (
    < div className="flex lg:w-[400px] md:w-[300px] w-[215px] flex-col h-full ">
      <div className="h-[81px] w-full  flex items-center justify-between z-1  border-4 p-1 border-b-stone-800 border-l-[whitesmoke] bg-white">
        <div className="flex items-center p-1">
          <Avatar src={currentUser.photoURL}
            className="cursor-pointer hover:opacity-80 p-2 m-1 " />
          <div className="font-bold truncate">{currentUser.displayName}</div>
        </div>
        <div>
          <IconButton>
            <LogoutIcon onClick={() => auth.signOut()} />
          </IconButton>
        </div>
      </div>
      <div className="flex items-center p-4 rounded">
        <SearchIcon className="bg-white" />
        <input placeholder="Search in chat" className="flex-1 border-none outline-none bg-white rounded "
        />
      </div>
      <Button onClick={()=>newChat()} className="w-full bg-stone-300 font-bold mb-2 text-black" variant="text">Start a new chat</Button>
      <div className="flex flex-col overflow-y-auto scrollbar-hide overflow-hidden flex-1 ">
        {chatList()}
      </div>
    </div >
  );
};

export default Sidebar;
