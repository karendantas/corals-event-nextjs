import { ButtonContainer } from "@/components/button";
import Link from "next/link";

export default function NotFound (){
    return (
        <div className="w-full max-w-screen-lg h-screen mx-auto flex flex-col items-center justify-center gap-2">
            <h2 className="text-md md:text-xl font-bold"> Página não encontrada</h2>
            <p className="text-xs md:text-lg pb-3"> Desculpe, não encontramos a página requisitada.</p>
            <Link href="/home"> 
                <ButtonContainer>
                    <ButtonContainer.Body> Voltar para a página principal </ButtonContainer.Body>
                </ButtonContainer> 
            </Link>
        </div>
    )
}