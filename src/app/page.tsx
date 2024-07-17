import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";


export default function Home() {
  return (
    <main className="w-full h-screen bg-pattern bg-no-repeat bg-cover bg-bgcolor bg-blend-multiply">

      <div className="max-w-screen-lg h-screen mx-auto flex items-center justify-center px-6">
        <div className="flex flex-1 flex-col items-start justify-center gap-2">

          <strong className="text-xs md:text-lg">1° edição do evento técnológico da fenda do Bikini</strong>
          <h1 className=" text-coral text-3xl md:text-6xl font-bold"> Desafios ecológicos: Branqueamento de corais </h1>
          <p
            className="max-w-[600px] text-justify mt-4 text-xs md:text-lg" 
          > Cadastre-se no evento para criar e publicar seus artigos! O tema da edição desse ano aborda o branqueamento de corais: problemáticas e possíveis soluções </p>

        <Link href={'/register'} className="flex justify-center bg-slate-900 border-[2px] border-coral rounded-md max-w-32 md:max-w-52 w-[100%] py-3 text-xs md:text-xl mt-4 hover:bg-coral hover:text-slate-900">
        
          <button className="flex items-center justify-center gap-3">
            Participe 
            <ArrowRight size={24} />
          
          </button>
        </Link>

        </div>
      </div>
     
    </main>
  );
}
