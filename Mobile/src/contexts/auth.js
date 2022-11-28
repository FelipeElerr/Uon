import React, { createContext, useState} from 'react';

export const AuthContext = createContext({})

function AuthProvider({children}){
    
    const [hash, setHash] = useState()

    return(
        <AuthContext.Provider value = {{nome:"Felipe", hash, setHash}}>
            {children}
        </AuthContext.Provider>

    )
}

export default AuthProvider