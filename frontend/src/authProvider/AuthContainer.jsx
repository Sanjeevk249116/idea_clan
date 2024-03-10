import React, { createContext, useState } from 'react'
export const AuthContextData=createContext();
function AuthContainer({children}) {
    const [authentication,setAuthentication]=useState({})
  return (
    <AuthContextData.Provider value={{authentication,setAuthentication}}>
      {children}
    </AuthContextData.Provider>
  )
}

export default AuthContainer
