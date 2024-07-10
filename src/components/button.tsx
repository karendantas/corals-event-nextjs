
type ButtonProps = {
    title: string
    onClick?: () => void,
}
export function Button ({title, onClick}: ButtonProps){
    return (
        <button
            onClick={onClick} 
            className="bg-coral text-slate-800 font-bold px-4 h-10 rounded-sm flex items-center gap-2 hover:bg-darkcoral">
            {title}
        </button>
    )
}