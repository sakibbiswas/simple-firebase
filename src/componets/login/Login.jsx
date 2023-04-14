import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/firebase.init';

const Login = () => {
    const [user, setuser] = useState(null)
    // step 1
    const auth = getAuth(app);
    // console.log(app);
    // step 2
    const googleprovider = new GoogleAuthProvider();
    const githubprovider = new GithubAuthProvider()

    const handelgoogleSignin = () => {
        // console.log('google mama is comming');
        signInWithPopup(auth, googleprovider)
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
    const handelgithubSignin = () => {
        signInWithPopup(auth, githubprovider)
            .then(result => {
                const githubuser = result.user;
                console.log(githubuser);
                setuser(githubuser)
            })
            .catch(error => {
                console.log(error, error.message);
            })
    }
    return (
        <div>
            {/* user? singnout :sing in*/}

            {user ? <button onClick={handelsignout}>sign out</button> :
                <div>
                    <button onClick={handelgoogleSignin}> Google Login</button>
                    <button onClick={handelgithubSignin}>github login</button>
                </div>

            }

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