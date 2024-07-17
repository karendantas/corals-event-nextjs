import { ButtonHTMLAttributes, ReactNode } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &{
    children: ReactNode
    
}
function ButtonContainer ({children, ...rest} : ButtonProps ){
    return (
        <button
            type = "submit"
            {...rest}
            className="bg-coral text-slate-800 font-bold px-4 h-10 rounded-sm flex items-center gap-2 hover:bg-darkcoral disabled:opacity-15 disabled:cursor-not-allowed">
            {children}
        </button>
    )
}

export function ButtonText({children} : {children: ReactNode}){
    return (
        <span> {children} </span>
    )
}

ButtonContainer.Body = ButtonText

export { ButtonContainer }
