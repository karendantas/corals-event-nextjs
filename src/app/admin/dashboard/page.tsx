"use client"

import { ArticlesContext } from "@/contexts/articlesContext"
import { userContext } from "@/contexts/userContext"
import { useContext } from "react"

export default function Dashboard(){
    const {users} = useContext(userContext)
    const {articles} = useContext(ArticlesContext)
    
    return (
        <main className="max-w-screen-lg h-screen mx-auto flex flex-col gap-14 items-start mt-20 md: px-6 " >
            <h1>Dashboard</h1>
        </main>
    )
}