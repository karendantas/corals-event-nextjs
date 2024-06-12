import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import backgroundimg from '@/assets/backgroundimage.jpg';
import Link from "next/link";

const backgroundStyle = {
  backgroundColor: 'rgb(154, 166, 192)',
  backgroundImage: `url(${backgroundimg.src})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundBlendMode: 'multiply',

}

export default function Home() {
  return (
    <main className="w-full h-screen" style={backgroundStyle}>
      <div className="max-w-screen-lg h-screen mx-auto flex items-center justify-center md: px-6">
        <div className="flex flex-1 flex-col items-start justify-center gap-2">
          <strong>1° edição do evento técnológico da fenda do Bikini</strong>
          <h1 className=" text-coral text-6xl font-bold"> Desafios ecológicos: Branqueamento de corais </h1>
          <p
            className="max-w-[600px] text-justify mt-4 text-md" 
          > Cadastre-se no evento para criar e publicar seus artigos! O tema da edição desse ano aborda o branqueamento de corais: problemáticas e possíveis soluções </p>

        <Link href={'/register'} className="flex justify-center bg-slate-900 border-[2px] border-coral rounded-md max-w-52 w-[100%] py-3 text-xl mt-12 hover:bg-coral hover:text-slate-900">
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
