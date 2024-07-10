"use client"
import { ArticleType } from "@/@types/article-type"
import { createContext, useState } from "react"



interface ArticleContextType {
    articles: ArticleType[],
    addNewArticle: (artcile: ArticleType) => void
}

export const ArticlesContext = createContext({} as ArticleContextType )

export function ArticleContextProvider({children}: {children: React.ReactNode}){
    const [articles, setArticles] = useState<ArticleType[]>([])

    function addNewArticle(article: ArticleType){
        setArticles(state => [...state, article])
    }

    return (
        <ArticlesContext.Provider value={{
            articles,
            addNewArticle
        }}>
            {children}
        </ArticlesContext.Provider>
    )
}