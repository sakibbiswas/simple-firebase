import React from 'react';
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import app from '../../Firebase/firebase.init';

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const handelgoogleSignin = () => {
        console.log('google mama is comming');
    }
    return (
        <div>
            <button onClick={handelgoogleSignin}> Google Login</button>
        </div>
    );
};

export default Login;