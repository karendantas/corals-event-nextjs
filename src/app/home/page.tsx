"use client"
import { useContext, useEffect, useState } from 'react';

import { Header } from '@/components/header';
import { Article } from '@/components/article';
import { NewArticleForm } from '@/components/new-article';
import { ArticlesContext } from '@/contexts/articlesContext';



export default function HomePage (){
    const [isNewArticleButtonOpen, setNewArticleButtonOpen] = useState(false)
    const {articles,  getAllArticles} = useContext(ArticlesContext)

    function handleCreateNewArticle(){
        setNewArticleButtonOpen(true)
    }
    function handleCloseNewArticleForm(){
        setNewArticleButtonOpen(false)
    }

    useEffect(() => {
        getAllArticles()
    },[])

    return (
        <div className='relative'>
            {
                isNewArticleButtonOpen && (
                    <div className='h-screen w-full flex items-center justify-center absolute z-99'>
                        <NewArticleForm closeNewArticleForm={handleCloseNewArticleForm} />
                    </div>
                )
            }

            <main className={`max-w-screen-lg h-screen mx-auto flex flex-col gap-14 items-start mt-20 md: px-6 ${isNewArticleButtonOpen === true ? 'opacity-20' : ''}`} >
        
                <Header onClick={handleCreateNewArticle}/>

                <div className='w-full flex items-center gap-3'>
                    <h3> Artigos </h3>
                    <hr className='w-full' />
                </div>


            <section className='w-full items-center justify-center gap-4'>
                    {articles.map((a) => {
                        return (
                            
                            <Article 
                                data={a}                   
                
                            />
                    
                        )
                    })}
                

            </section>
            </main>
        </div>
    )
}