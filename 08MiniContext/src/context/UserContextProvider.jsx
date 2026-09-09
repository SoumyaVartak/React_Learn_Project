import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";

const UserContextProvider = ({children})=> {
    const [user,setUser]=useState(null)
    return(
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )

}


export default UserContextProvider
// 2ND STEP CREATE A USER COONTEXT PROVIDER 
// we are giving children it will pass as it is and we have to wrap it 
// create a value in usercontext and pass the value in it