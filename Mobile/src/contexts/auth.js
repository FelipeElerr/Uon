import React, { createContext, useState} from 'react';

export const AuthContext = createContext({})

function AuthProvider({children}){
    
    const [hash, setHash] = useState("d76f9ccfd3114562b5b2ece57079656f")

    return(
        <AuthContext.Provider value = {{nome:"Felipe", hash, setHash}}>
            {children}
        </AuthContext.Provider>

    )
}

export default AuthProvider