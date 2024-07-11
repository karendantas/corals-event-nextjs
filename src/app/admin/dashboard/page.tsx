"use client"
import { UserContext } from "@/contexts/usersContext"
import { redirect } from "next/navigation"
import { useContext } from "react"

import NotFound from "@/app/not-found"

export default function Dashboard(){
    const { users, isUserAuthenticated } = useContext(UserContext)

    if (!isUserAuthenticated){
        redirect('/')
    }

    if (isUserAuthenticated){
        if (users.map((user) => user.role !== "admin")){
            return <NotFound />
        }
    }
    return (
        <main className="max-w-screen-lg h-screen mx-auto flex flex-col gap-14 items-start mt-20 md: px-6 " >
            <h1>Dashboard</h1>
        </main>
    )
}