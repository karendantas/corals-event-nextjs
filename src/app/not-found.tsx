import Link from "next/link";

export default function NotFound (){
    return (
        <div>
            <h2> Página não encontrada</h2>
            <p> Não foi possível encontrar a página requisitada</p>
            <Link href="/home"> Voltar para a página principal </Link>
        </div>
    )
}