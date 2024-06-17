"use client"

import { ArticleType } from '@/@types/article-type';
import { UserType } from '@/@types/user-type';
import { Article } from '@/components/article';
import { Header } from '@/components/header';
import { useEffect, useState } from 'react';


const author1: UserType = {
    id: '1',
    email: 'kdjs',
    login: 'dskdf',
    name: 'karen'

}

const article: ArticleType = {
    id: '1',
    author: author1,
    content:'lorem imsusjehfsj sjhdfkjshfk sjfhbsjkfhjfjkshdfjkhsdkfhkjsdhfjk skjh shdfkhf sjdfh jkshjkfhsjkhfs fjkshdfjkhsdkfhkjsdhfjk skjh shdfkj',
    created_at:'21/22/121',
    title: 'Marrews',
}
export default function HomePage (){
    const [articles, setArticles] = useState<ArticleType[]>([])

    useEffect(()=>{
      
        for (let index = 0; index < 5; index++) {
           setArticles((state) => [...state, article])
            
        }

    },[])
    return (
        <main className="max-w-screen-lg h-screen mx-auto flex flex-col gap-14 items-start mt-20 md: px-6 " >
       
            <Header/>
            <div className='w-full flex items-center gap-3'>
                <h3> Artigos </h3>
                <hr className='w-full' />
            </div>

           <section className='w-full grid grid-cols-16 items-center justify-center gap-4'>
                {articles.map((a) => {
                    return (
                        <Article 
                            author={a.author}
                            content={a.content}
                            created_at={a.created_at}
                            title={a.title}
        
                        />
                    )
                })}
              

           </section>
        </main>
    )
}