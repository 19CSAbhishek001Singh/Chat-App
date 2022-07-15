import Head from "next/head";
import { Button } from "@mui/material";
import { auth, provider } from "../firebase";
import { signInWithPopup, OAuthProvider } from "firebase/auth";
import GoogleIcon from "@mui/icons-material/Google";
const Login = () => {
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The credential that was used.
        const credential = OAuthProvider.credentialFromError(error);
      });
  };

  return (
    <div className="grid place-items-center h-screen bg-indigo-300 ">
      <Head>
        <title>Login</title>
      </Head>
      <div className="flex flex-col p-20 items-center bg-indigo-800 rounded-2xl shadow-lg shadow-indigo-500">
        <img
          className="h-52 w-52 mb-12 rounded-3xl"
          src="/image_processing20210104-18320-1qp0a4c.png"
          alt="LOGO Image"
        />
        <Button onClick={signIn} variant="contained" startIcon={<GoogleIcon />}>
          Sign In With Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
