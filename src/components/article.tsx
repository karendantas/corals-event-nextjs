import { UserType } from "@/@types/user-type"
import Link from "next/link"

interface ArticleProps {
    author: UserType,
    content: string,
    image?: string,
    title: string,
    created_at: string
}

export function Article ({author,content,title, image, created_at}:ArticleProps){
    return (
        <div className="w-auto max-h-[250px] bg-slate-800 flex flex-col justify-start px-5 py-4 gap-3 rounded-md mb-4 border border-transparent hover:border-coral">
         
            <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold"> {title}</h3>
               
                <span className="text-[12px] font-light text-slate-300">{created_at}</span>
            </div>

            <strong className="text-sm font-normal text-slate-300"> {author.name} </strong>

            <p className="line-clamp-4 flex flex-1 text-justify overflow-hidden relative"> 
                {content}

                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-800 to-black/0">
                </div>
            </p>

            <Link className="bg-coral text-slate-900 font-bold w-[30%] p-2 rounded-sm hover:bg-darkcoral justify-center flex self-end" href='/'> Ver artigo </Link>
        </div>
    )
}