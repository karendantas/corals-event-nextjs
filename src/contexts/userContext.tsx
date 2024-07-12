"use client"

import { createContext, useEffect, useState } from "react"
import { UserType } from "@/@types/user-type"
import { api } from "@/lib/api"



interface userContextType {
    users: UserType[]
}
export const userContext = createContext({} as userContextType)
export function UserContextProvider ({children}: {children: React.ReactNode}){
    const [ users, setUsers] = useState<UserType[]>([])

    async function fetchUsers (){
        const res = await api.get('/users')   
        setUsers(res.data)
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <userContext.Provider value={{
            users
        }}>
            {children}
        </userContext.Provider>
    )
}