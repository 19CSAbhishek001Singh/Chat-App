import Bottombar from './../../components/Bottombar';
import Topbar from './../../components/Topbar';
import Head from "next/head"
import { useRouter } from "next/router"
import { useCollectionData, useDocumentData } from 'react-firebase-hooks/firestore';
import { auth, db } from '../../firebase';
import { query, orderBy, doc } from 'firebase/firestore';
import { collection } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import getOtherEmail from '../../utils/getOtherEmail';
import { useEffect, useRef } from 'react';
import { Flex, Text } from "@chakra-ui/layout"

const Chat = () => {
  const [currentUser] = useAuthState(auth);
  const router = useRouter();
  const { id } = router.query;
  const q = query(collection(db, `chats/${id}/messages`), orderBy("timestamp"))
  const [messages] = useCollectionData(q);
  const [chat] = useDocumentData(doc(db, "chats", id));
  const bottomOfChat = useRef();

  const getMessages = () =>
    messages?.map(msg => {
      const sender = msg.sender === currentUser.email;
      return (
        <Flex key={Math.random()} alignSelf={sender ? "flex-start" : "flex-end"} className={`${sender ? "bg-[#E5E5EA] text-black" : "bg-[#39ABFC] text-white"} lg:w-fit md:w-fit w-1/2 lg:min-w-[100px] md:min-w-[100px] text-md max-w-[450px] lg:max-w-fit md:max-w-fit break-words rounded-xl p-2 lg:p-3 md:p-3 m-2`}>
          <Text>{msg.text}</Text>
        </Flex>
      )
    })

  useEffect(() => {
    setTimeout(
      bottomOfChat.current.scrollIntoView({
        behavior: "smooth",
        block: 'start',
      }), 100);
    return (
      console.log("hello")
    );
  }, [messages]);

  return (
    <div className="flex h-screen lg:w-full md:w-full w-full scrollbar-hide bg-black top-0 bottom-0">
      <Head><title>Real Time Chat App</title></Head>
      <div className="flex-1 flex flex-col w-full h-screen">
        <Topbar email={getOtherEmail(chat?.users, currentUser)} />
        <div className="flex flex-1 flex-col pt-4 mx-5 overflow-x-scroll scrollbar-hide h-screen">
          {getMessages()}
          <div ref={bottomOfChat}></div>
        </div>
        <Bottombar id={id} currentUser={currentUser} />
      </div>
    </div>
  );
}

export default Chat;