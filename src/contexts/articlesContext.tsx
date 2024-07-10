"use client"
import { ArticleType } from "@/@types/article-type"
import { api } from "@/lib/api"
import { createContext, useState } from "react"



interface ArticleContextType {
    articles: ArticleType[],
    addNewArticle: (artcile: ArticleType) => Promise<void>,
    getAllArticles: () => Promise<void>,
}

export const ArticlesContext = createContext({} as ArticleContextType )

export function ArticleContextProvider({children}: {children: React.ReactNode}){
    const [articles, setArticles] = useState<ArticleType[]>([])

    async function addNewArticle(article: ArticleType){
        try {

            await api.post('/articles', article)
        }catch (err){
            console.log(err)
        }
    }

    async function getAllArticles (){
        try {

            const articlesData = await api.get('/articles')
            setArticles(articlesData.data)
        }catch (err) {
            console.log(err)
        }
    }

    return (
        <ArticlesContext.Provider value={{
            articles,
            addNewArticle,
            getAllArticles
        }}>
            {children}
        </ArticlesContext.Provider>
    )
}