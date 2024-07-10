
type ButtonProps = {
    type: "submit" | "default",
    title: string
    onClick?: () => void,
}
export function Button ({title, onClick, type = "default"}: ButtonProps){
    return (
        <button
            type = "submit"
            onClick={onClick} 
            className="bg-coral text-slate-800 font-bold px-4 h-10 rounded-sm flex items-center gap-2 hover:bg-darkcoral">
            {title}
        </button>
    )
}