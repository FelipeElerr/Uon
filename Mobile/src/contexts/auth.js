import React, { createContext, useState} from 'react';

export const AuthContext = createContext({})

function AuthProvider({children}){

    const [user, setUser] = useState({});
    const [codigo, setCodigo] = useState({})
    function setQrcode(hashAula){
        setCodigo({
            hash: hashAula
        })
    }
    function cadastro(raAluno){
        setUser({
            ra:raAluno
        })
    }
    
    return(
        <AuthContext.Provider value = {{nome:"Felipe", user, cadastro, codigo, setCodigo}}>
            {children}
        </AuthContext.Provider>

    )
}

export default AuthProvider