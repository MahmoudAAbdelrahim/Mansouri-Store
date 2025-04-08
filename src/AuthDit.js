import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { auth } from "./Firebase";

const AuthDit = () => {
    const [authUser, setAuthUser]=useState(null);

    useEffect (()=>{
        const listen = onAuthStateChanged(auth,(user)=>{
            if (user) {
                setAuthUser(user);
            }else{
                setAuthUser(null);
            };
        });
        return()=> {
            listen();
        };
    }, []);

const userSignOut = ()=>
signOut(auth)
.then(() => {
  // Sign-out successful.
  console.log("Sign-out successful:");

}).catch((error) => console.log("Error creating user:", error));
  return (
    
    <div>
        {authUser ? (
<>    
<p>{`Signed In as ${authUser.email}`}</p>
<button onClick={userSignOut}> Sign out</button>
</>
        ):(
            <p>must login</p>
        )}
    </div>
    
  )
}

export default AuthDit