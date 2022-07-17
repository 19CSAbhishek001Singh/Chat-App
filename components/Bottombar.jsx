import { useState } from "react";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { Button } from '@mui/material';
import { FormControl} from "@chakra-ui/react";

export default function Bottombar({ id, currentUser }) {
  const [input, setInput] = useState ("");

  const sendMessage = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, `chats/${id}/messages`), {
      text: input,
      sender: currentUser.email,
      timestamp: serverTimestamp()
    })
    setInput("");
  }

  return (
     <FormControl
      p={3}
      onSubmit={sendMessage}
      as="form"
    >
      <input placeholder="Type a message..." autoComplete="off" onChange={e => setInput(e.target.value)} value={input} className="p-3 m- md:w-1/2 lg:w-4/5 w-min bg-gray-100"/>
      <Button type="submit" variant="contained" className="text-white m-1 p-3 hidden bg-black">Send</Button>
    </FormControl>
  )
}