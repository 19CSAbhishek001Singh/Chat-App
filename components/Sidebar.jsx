import { Avatar, Button, IconButton } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from "@mui/icons-material/Search";
import Chat from "./Chat";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, getDocs, where, query, onSnapshot } from "firebase/firestore";
import { useEffect, useState, useRef } from "react";

const Sidebar = () => {
  const [currentUser] = useAuthState(auth);
  return (
    < div className="flex lg:w-[400px] md:w-[300px] w-1/2 flex-col h-screen">
      <div className="h-[81px] w-full  flex items-center justify-between z-1  border-4 p-1 border-b-stone-800 border-l-[whitesmoke] bg-white">
        <div className="flex items-center p-1 ">
          <Avatar src={currentUser.photoURL}
            className="cursor-pointer hover:opacity-80 p-2 m-1" />
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
      <Button className="w-full bg-stone-300 font-bold mb-2 text-black" variant="text">Start a new chat</Button>
      <div className="flex flex-col overflow-y-auto scrollbar-hide overflow-hidden flex-1 ">
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
      </div>
    </div >
  );
};

export default Sidebar;
