import { ArticleType } from "@/@types/article-type"
import Link from "next/link"

interface ArticleProps {
    data: ArticleType
}

export function Article ({ data}:ArticleProps){
    return (
        <div className="w-auto max-h-[250px] bg-slate-800 flex flex-col justify-start px-5 py-4 gap-3 rounded-md mb-4 border border-transparent hover:border-coral">
         
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <h3 className="text-lg md:text-2xl font-bold"> {data.title}</h3>
               
                <span className="text-[12px] font-light text-slate-300">{data.created_at}</span>
            </div>

            <strong className="text-sm font-normal text-slate-300"> {data.author_name} </strong>

            <p className="line-clamp-4 flex flex-1 text-justify overflow-hidden relative"> 
                {data.content}

                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-800 to-black/0">
                </div>
            </p>

            <Link
                href={`/home/article/${data.id}`} 
                className="bg-coral text-slate-800 text-xs md:text-base font-bold w-[70%] md:w-[20%] p-2 rounded-sm hover:bg-darkcoral justify-center flex self-end"> Ver artigo </Link>
        </div>
    )
}