"use client"

import { useContext } from "react";
import { ArticlesContext } from "@/contexts/articlesContext";

import Link from "next/link";

import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import NotFound from "@/app/not-found";

export default function Article ({ params }: {params: {id: string} }) {
  
    const {articles} = useContext(ArticlesContext)

    const currentArticle = articles.find((article) => article.id === params.id)

    if (!currentArticle){
        return <NotFound />
    }
    return (
        <main className="max-w-screen-lg h-screen mx-auto flex flex-col gap-14 items-start mt-20 md: px-6 " >
            <div className="w-full">

                <Link 
                    href={'/home'} 
                    className="flex items-center gap-2"
                > 
                    
                    <ArrowLeft size={24}/>  Voltar 
                </Link>

                <h2 className="text-2xl md:text-4xl font-bold mt-2" > {currentArticle.title} </h2>

                <div className="flex flex-col gap-2 md:flex-row items-start md:items-center justify-between mt-5 text-slate-400">
                    <span>
                        {currentArticle.author_name}
                    </span>

                    <span>
                        {currentArticle.created_at}
                    </span>
                </div>

                <div className="mt-12">
                    <p className="text-justify text-md md:text-lg"> 
                        {currentArticle.content}
                    </p>
                </div>
            </div>
        </main>
    )
}