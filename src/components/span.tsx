
interface SpanProps {
    message: string | undefined
}
export function Span ({message}: SpanProps){
    return (
        <span className="text-xs font-light pl-3 pt-1 text-darkcoral"> {message} </span>
    )
}