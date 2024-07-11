"use client"

import { UserType } from "@/@types/user-type";
import { api } from "@/lib/api";
import { createContext, useState } from "react";

type UserContextType = {
    users: UserType[],
    isUserAuthenticated: boolean,
    addUser: (user: UserType) => Promise<void>,
    getAllUsers: () => Promise<void>,
    AuthenticateUser: (user: UserType) => void

}

export const UserContext = createContext({} as UserContextType)

export function UserContextProvider({children}: {children: React.ReactNode}){
    const [users, setUsers] = useState<UserType[]>([])
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false)

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

    function AuthenticateUser (user: UserType){
        setIsUserAuthenticated(true)
    }
    return (
        <UserContext.Provider value={{
            users,
            isUserAuthenticated,
            addUser,
            getAllUsers,
            AuthenticateUser
        }}>
            {children}
        </UserContext.Provider>
    )
}