import { FormEvent, useContext, useState } from "react";

import { ArticleType } from "@/@types/article-type";

import { ArticlesContext } from "@/contexts/articlesContext";
import { ButtonContainer } from "./button";
import { uuid } from "uuidv4";
import toast from "react-hot-toast";
import { X } from "@phosphor-icons/react";


interface NewArticleFormProps  {
    closeNewArticleForm: () => void
}
export function NewArticleForm({closeNewArticleForm}: NewArticleFormProps){
    const {addNewArticle} = useContext(ArticlesContext)

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const getAuthor = JSON.parse(localStorage.getItem('user')!) 

    function handleSubmitForm (event: FormEvent){

        event.preventDefault()

        if (!content.trim() || !title.trim()){
            return toast.error('Preencha os campos!')
        }else{

            const article : ArticleType ={
                id: uuid(),
                author_name: getAuthor[1],
                content,
                created_at: '01/02/2023',
                title,
            }
    
            addNewArticle(article)
            handleCloseNewArticleForm()
            
        }
       
    }
    
    function handleCloseNewArticleForm(){
        {closeNewArticleForm()}
    }
    return (
       
            <div className=" max-w-2xl w-full bg-slate-900 p-2 md:p-10 rounded-md z-50 border-coral border">
                
                <div className="flex items-center justify-between pb-3">
                    <h2 className="text-slate-100 font-semibold">Criar novo artigo </h2>
                    <button onClick={handleCloseNewArticleForm}>
                        <X size = {24}/>
                    </button>
                </div>
                
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

                    <ButtonContainer onClick={handleSubmitForm} type="submit">
                        <ButtonContainer.Body> Enviar </ButtonContainer.Body>
                    </ButtonContainer>

                </form>
            </div>
        
    )
}