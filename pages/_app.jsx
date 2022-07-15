import "../styles/globals.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import Login from "./login";
import Loading from "../components/Loading";
import { useEffect } from "react";
import { serverTimestamp, doc, setDoc } from "@firebase/firestore";
import Layout from "./Layout";
function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    return auth.onIdTokenChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken()
        const userData = {
          displayName: user.displayName,
          email: user.email,
          lastSeen: serverTimestamp(),
          photoURL: user.photoURL
        }
        await setDoc(doc(db, "users", user.uid), userData)
        console.log('user token', token);
      }
    })
  }, [user]);
  if (loading) return <Loading />;
  if (!user) return <Login />;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
