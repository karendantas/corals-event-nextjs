"use client"

import { ArticlesContext } from "@/contexts/articlesContext"
import { userContext } from "@/contexts/userContext"
import { useContext, useEffect } from "react"

export default function Dashboard(){
    const {users, getAllUsers} = useContext(userContext)
    const {articles, getAllArticles} = useContext(ArticlesContext)
    
    useEffect(() => {
        getAllUsers()
        getAllArticles()
    }, [])
    return (
        <main className="max-w-screen-lg h-screen mx-auto flex flex-col gap-14 items-start mt-20 md: px-6 " >
            <h1 className="text-2xl font-bold text-coral">Dashboard</h1>

            <section className="w-full">
                <h2 className="text-xl font-medium pb-4" >Inscritos no Evento</h2>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-slate-500 dark:text-slate-400 rounded-md">
                        <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-coral dark:text-slate-900">
                            <tr>
                                <th scope="col" className="px-6 py-3 rounded-tl-md">
                                    Nome 
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Id
                                </th>
                                <th scope="col" className="px-6 py-3 rounded-tr-md">
                                    role
                                </th>
        
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) =>  (

                                <tr className="bg-white border-b dark:bg-slate-800 dark:border-slate-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap dark:text-coral">
                                        {user.name}
                                    </th>
                                    <td className="px-6 py-4">
                                       {user.id}
                                    </td>
                                    <td className="px-6 py-4">
                                       {user.role}
                                    </td>

                                </tr>
                            ))}
                         
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="w-full">
                <h2 className="text-xl font-medium pb-4" >Artigos submetidos</h2>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-slate-500 dark:text-slate-400 rounded-md">
                        <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-coral dark:text-slate-900">
                            <tr>
                                <th scope="col" className="px-6 py-3 rounded-tl-md">
                                    Título 
                                </th>
                                <th scope="col" className="px-6 py-3 rounded-tr-md ">
                                    Id
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {articles.map((artcile) =>  (

                                <tr className="bg-white border-b dark:bg-slate-800 dark:border-slate-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap dark:text-coral">
                                        {artcile.title}
                                    </th>
                                    <td className="px-6 py-4">
                                       {artcile.id}
                                    </td>
                                </tr>
                            ))}
                         
                        </tbody>
                    </table>
                </div>
            </section>
         
        </main>
    )
}