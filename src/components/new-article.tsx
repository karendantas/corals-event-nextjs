import { FormEvent, FormHTMLAttributes, useContext, useState } from "react";
import { Button } from "./button";
import { ArticleType } from "@/@types/article-type";
import { ArticlesContext } from "@/contexts/articlesContext";


export function NewArticleForm(){
    const {addNewArticle} = useContext(ArticlesContext)

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')


    function handleSubmitForm (event: FormEvent){

        const article : ArticleType ={
            id: '3',
            author_id: "2",
            content,
            created_at: '01/02/2023',
            title,
        }

        addNewArticle(article)
       
    }
    

    return (
       
            <div className=" max-w-2xl w-full bg-slate-900 p-12 rounded-md z-50 border-coral border">
                <h2 className="text-slate-100 font-semibold">Criar novo artigo </h2>
                
                <form className="w-full flex flex-col gap-3">
                    <input 
                        type="text" 
                        placeholder="Titúlo" 
                        value = {title}
                        onChange ={(e) =>setTitle(e.target.value)}  
                        className="bg-slate-800 p-3 w-full text-base outline-none rounded-md placeholder:text-slate-100"/>
                    
                    <textarea 
                        rows = {15}
                        placeholder="Escreva seu contéudo aqui..."
                        value = {content}
                        onChange ={(e) =>setContent(e.target.value)} 
                        className="bg-slate-800 p-3 w-full text-base outline-none rounded-md placeholder:text-slate-100" />

                    <button onClick={handleSubmitForm} type="submit" > enviar </button>
                </form>
            </div>
        
    )
}