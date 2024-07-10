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

                <h2 className="text-4xl font-bold mt-2" > {currentArticle.title} </h2>

                <div className="flex items-center justify-between mt-5 text-slate-400">
                    <span>
                        Karen
                    </span>

                    <span>
                        21/21/2003
                    </span>
                </div>

                <div className="mt-12">
                    <p className="text-justify"> 
                        "O branqueamento de corais é um fenômeno alarmante que tem afetado recifes em todo o mundo, representando uma séria ameaça aos ecossistemas marinhos. Corais saudáveis possuem uma simbiose vital com algas unicelulares chamadas zooxantelas, que vivem dentro de seus tecidos e fornecem nutrientes essenciais através da fotossíntese." <tr></tr>
                        "No entanto, quando os corais são expostos a condições estressantes, como temperaturas elevadas da água, poluição ou mudanças drásticas de salinidade, eles podem expulsar essas zooxantelas. <tr></tr> Isso resulta na perda da coloração característica dos corais, que assumem uma tonalidade branca ou pálida — daí o termo 'branqueamento' ." + <tr></tr>
                        "Esse processo enfraquece os corais e os torna mais vulneráveis a doenças e à fome, pois dependem das zooxantelas para obter uma parte significativa de sua nutrição. <tr></tr> Sem a restauração da condição ideal do ambiente, muitos corais acabam morrendo. Além disso, o branqueamento tem impactos devastadores em ecossistemas inteiros que dependem dos recifes de coral, afetando a biodiversidade marinha e a pesca local." +<tr></tr>
                        "As causas do branqueamento de corais estão diretamente ligadas às mudanças climáticas globais, que aumentam a frequência e a intensidade dos eventos de aquecimento dos oceanos. Medidas de mitigação, como reduzir as emissões de gases de efeito estufa e criar áreas marinhas protegidas, são essenciais para combater esse problema crescente e proteger esses preciosos ecossistemas submarinos para as gerações futuras.",</p>
                </div>
            </div>
        </main>
    )
}