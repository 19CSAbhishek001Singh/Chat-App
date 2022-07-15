import { Avatar, Button, IconButton } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import * as EmailValidator from "email-validator";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, getDocs, where, query ,onSnapshot} from "firebase/firestore";
import { useEffect, useState,useRef } from "react";

const Sidebar = () => {  
  const [currentUser]=useAuthState(auth);
  const inputAreaRef=useRef(null)
  return (
    <div className="">
      <div className="flex sticky top-0 bg-white z-1 justify-between items-center h-20 p-4 border-white border-b-stone-800	border-4 ">
        <Avatar src={currentUser.photoURL}
          className="cursor-pointer hover:opacity-80"
          onClick={() => auth.signOut()}
        />
        <div>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
          <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="flex items-center p-5 rounded">
        <SearchIcon className="bg-white" />
        <input ref={inputAreaRef} placeholder="Search or start a new chat" 
          className="flex-1 border-none outline-none bg-white rounded "
        />
      </div>
    </div>
  );
};

export default Sidebar;
