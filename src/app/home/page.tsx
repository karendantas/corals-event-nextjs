"use client"

import { ArticleType } from '@/@types/article-type';
import { UserType } from '@/@types/user-type';
import { Article } from '@/components/article';
import { Header } from '@/components/header';
import { NewArticleForm } from '@/components/new-article';
import { ArticlesContext } from '@/contexts/articlesContext';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';


const author1: UserType = {
    id: '1',
    email: 'kdjs',
    login: 'dskdf',
    name: 'karen'

}

const article: ArticleType = {
    id: '1',
    author: author1,
    content:"O branqueamento de corais é um fenômeno alarmante que tem afetado recifes em todo o mundo, representando uma séria ameaça aos ecossistemas marinhos. Corais saudáveis possuem uma simbiose vital com algas unicelulares chamadas zooxantelas, que vivem dentro de seus tecidos e fornecem nutrientes essenciais através da fotossíntese." +
            "No entanto, quando os corais são expostos a condições estressantes, como temperaturas elevadas da água, poluição ou mudanças drásticas de salinidade, eles podem expulsar essas zooxantelas. Isso resulta na perda da coloração característica dos corais, que assumem uma tonalidade branca ou pálida — daí o termo 'branqueamento' ." +
            "Esse processo enfraquece os corais e os torna mais vulneráveis a doenças e à fome, pois dependem das zooxantelas para obter uma parte significativa de sua nutrição. Sem a restauração da condição ideal do ambiente, muitos corais acabam morrendo. Além disso, o branqueamento tem impactos devastadores em ecossistemas inteiros que dependem dos recifes de coral, afetando a biodiversidade marinha e a pesca local." +
            "As causas do branqueamento de corais estão diretamente ligadas às mudanças climáticas globais, que aumentam a frequência e a intensidade dos eventos de aquecimento dos oceanos. Medidas de mitigação, como reduzir as emissões de gases de efeito estufa e criar áreas marinhas protegidas, são essenciais para combater esse problema crescente e proteger esses preciosos ecossistemas submarinos para as gerações futuras.",
    created_at:'21/22/121',
    title: 'Perigos do branqueamento de corais',
}
export default function HomePage (){
    const [isNewArticleButtonOpen, setNewArticleButtonOpen] = useState(false)
    const {articles, addNewArticle} = useContext(ArticlesContext)

    useEffect(()=>{
      
        for (let index = 0; index < 2; index++) {
           addNewArticle(article)      
        }

    },[])


    function handleCreateNewArticle(){
        setNewArticleButtonOpen(true)
    }
    
    return (
        <div className='relative'>
            {
                isNewArticleButtonOpen && (
                    <div className='h-screen w-full flex items-center justify-center absolute z-99'>
                        <NewArticleForm />
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
                                author={a.author}
                                data={a}                   
                
                            />
                    
                        )
                    })}
                

            </section>
            </main>
        </div>
    )
}