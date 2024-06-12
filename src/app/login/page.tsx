import Link from "next/link";

export default function Login (){
    return (
        <main className="max-w-screen-lg h-screen mx-auto flex items-center justify-center md: px-6" >
        <div className="w-[500px] h-[500px] rounded-md p-5 flex items-center bg-coral">
      
            <form className="flex flex-col flex-1 items-center text-3xl gap-5 font-bold  ">
                <h3 className="text-slate-800 text-4xl uppercase font-extrabold ">LOGIN</h3>
     
                <input className="bg-darkcoral  w-[90%] p-3  text-base outline-none rounded-md placeholder:text-slate-800" 
                    type="text" 
                    placeholder="Login"/>

                <input className="bg-darkcoral  w-[90%] p-3  text-base outline-none rounded-md placeholder:text-slate-800" 
                    type="password" 
                    placeholder="password"/>

                <button className="bg-slate-800 px-4 h-11 rounded-md text-base w-[90%] hover:bg-slate-900 font-normal">
                    Confirmar
                </button>

                <Link 
                    href={'/register'}
                    className="text-base font-normal text-slate-800"
                > Não tem conta? Cadastre-se </Link>

            </form>
    
        </div>

    </main>
    )
}