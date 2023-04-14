import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/firebase.init';

const Login = () => {
    const [user, setuser] = useState(null)
    // step 1
    const auth = getAuth(app);
    // console.log(app);
    // step 2
    const provider = new GoogleAuthProvider();
    const handelgoogleSignin = () => {
        // console.log('google mama is comming');
        signInWithPopup(auth, provider)
            .then(result => {
                const loginuser = result.user;
                console.log(loginuser);
                setuser(loginuser)
            })
            .catch(error => {
                console.log(error, error.message);
            })
    }

    const handelsignout = () => {
        signOut(auth)
            .then(result => {
                setuser(null)
                console.log(result);
                // Sign-out successful.
            })
            .catch(error => {
                // An error happened.
                console.log(error, error.message);
            });
    }
    return (
        <div>
            {/* user? singnout :sing in*/}

            {user ? <button onClick={handelsignout}>sign out</button> :
                <button onClick={handelgoogleSignin}> Google Login</button>}


            {user &&
                <div>
                    <h2>name:{user.displayName}</h2>
                    <h3>email: {user.email}</h3>
                    <img src={user.photoURL
                    } alt="" />
                </div>
            }

        </div>
    );
};

export default Login;