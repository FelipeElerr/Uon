import React, { createContext, useState} from 'react';

export const AuthContext = createContext({})

function AuthProvider({children}){
    
    const [hash, setHash] = useState("9d0d496d7a75a37c7b3706dc0ee6ab7c")
    const [raBanco, setRaBanco] = useState("200767")

    return(
        <AuthContext.Provider value = {{nome:"Felipe", hash, setHash}}>
            {children}
        </AuthContext.Provider>

    )
}

export default AuthProvider