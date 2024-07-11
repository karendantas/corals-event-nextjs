"use client"

import { UserType } from "@/@types/user-type";
import { api } from "@/lib/api";
import { createContext, useState } from "react";

type UserContextType = {
    users: UserType[],
    addUser: (user: UserType) => Promise<void>,
    getAllUsers: () => Promise<void>
}

export const UserContext = createContext({} as UserContextType)

export function UserContextProvider({children}: {children: React.ReactNode}){
    const [users, setUsers] = useState<UserType[]>([])

    async function getAllUsers (){
        try {
            const usersData = await api.get('/users')
            setUsers(usersData.data)

        }catch (err){
            console.log(err)
        }
    }

    async function addUser (user: UserType){
        try {
            await api.post('/users', user)
        }catch(err){
            console.log(err)
        }
    }
    return (
        <UserContext.Provider value={{
            users,
            addUser,
            getAllUsers
        }}>
            {children}
        </UserContext.Provider>
    )
}