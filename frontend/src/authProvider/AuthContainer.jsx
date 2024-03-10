import React, { createContext, useState } from 'react'
export const AuthContextData=createContext();
function AuthContainer({children}) {
    const [checkout,setcheckout]=useState(false)
  return (
    <AuthContextData.Provider value={{checkout,setcheckout}}>
      {children}
    </AuthContextData.Provider>
  )
}

export default AuthContainer
