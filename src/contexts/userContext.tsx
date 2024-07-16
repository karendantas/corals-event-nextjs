"use client"

import { api } from "@/lib/api"

import { UserType } from "@/@types/user-type"
import { createContext, useEffect, useState } from "react"



interface userContextType {
    users: UserType[],
    getAllUsers: () => Promise<void>
}
export const userContext = createContext({} as userContextType)
export function UserContextProvider ({children}: {children: React.ReactNode}){
    const [ users, setUsers] = useState<UserType[]>([])

    async function getAllUsers (){
        const res = await api.get('/users')   
        setUsers(res.data)
    }

    return (
        <userContext.Provider value={{
            users,
            getAllUsers
        }}>
            {children}
        </userContext.Provider>
    )
}