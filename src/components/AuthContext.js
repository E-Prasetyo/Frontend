import React, { useState, useEffect, useContext } from 'react'

const AuthContext = React.createContext()

export const useAuth = () => {
   return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
   const value = {
      // All Required Values
   }

   return (
      <AuthContext.Provider value={value}>
         {children}
      </AuthContext.Provider>
   )
}
