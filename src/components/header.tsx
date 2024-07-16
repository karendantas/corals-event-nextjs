import Link from "next/link";
import { Plus, SignOut } from "@phosphor-icons/react";
import { ButtonContainer } from "./button";

type Props = {
    onClick : () => void
}
export function Header ({onClick}: Props){
    return (
        <header className="w-full flex flex-col items-center justify-between sm:flex-row ">
            <div>
                <span className="text-sm font-light">1 evento técnológico da fenda do bikini</span>
                <h2 className="text-2xl font-bold text-coral" >Branqueamento de corais</h2>
            </div>
            <nav >
                <ul className="flex items-center gap-3 ">                 
                    <li>
                       <ButtonContainer onClick={onClick}>
                            <ButtonContainer.Body> Publicar artigo  </ButtonContainer.Body>
                            <ButtonContainer.Body> <Plus size={20} weight="bold" /> </ButtonContainer.Body>
                       </ButtonContainer>
                     
                    </li>
                    <li>    
                        <Link 
                            href={'/logout'}
                            className="bg-coral text-slate-800 font-bold px-4 h-10 rounded-sm flex items-center gap-2 hover:bg-darkcoral"
                        >
                            Sair
                            <SignOut size={20} />
                        </Link> 

                    </li>
                </ul>
            </nav>
         
        </header>
    )
}