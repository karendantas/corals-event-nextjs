
interface SpanProps {
    message: string | undefined
}
export function Span ({message}: SpanProps){
    return (
        <span className="text-xs font-light text-slate-300"> {message}</span>
    )
}