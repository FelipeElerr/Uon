import React, { createContext, useState} from 'react';

export const AuthContext = createContext({})

function AuthProvider({children}){
    
    const [professorId, setProfessorId] = useState("1")

    return(
        <AuthContext.Provider value = {{professorId, setProfessorId}}>
            {children}
        </AuthContext.Provider>

    )
}

export default AuthProvider