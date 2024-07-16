import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &{
    title: string
    
}
export function Button ({title, ...rest}: ButtonProps){
    return (
        <button
            type = "submit"
            {...rest}
            className="bg-coral text-slate-800 font-bold px-4 h-10 rounded-sm flex items-center gap-2 hover:bg-darkcoral">
            {title}
        </button>
    )
}