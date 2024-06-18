import Link from "next/link";


export default function Register (){
    return (
        <main className="max-w-screen-lg h-screen mx-auto flex items-center justify-center md: px-6" >
            <div className="w-[500px] h-[500px] rounded-md p-5 flex items-center border border-coral">
          
                <form className="flex flex-col flex-1 items-center text-3xl gap-5 font-bold  ">
                    <h3 className="text-coral text-4xl uppercase font-extrabold ">Cadastro</h3>

                    <input className=" bg-slate-800  w-[90%] p-3 text-base outline-none rounded-md placeholder:text-slate-100" 
                        type="text" 
                        placeholder="Nome"/>

                    <input className="bg-slate-800  w-[90%] p-3  text-base outline-none rounded-md placeholder:text-slate-100" 
                        type="text" 
                        placeholder="Login"/>

                    <input className="bg-slate-800  w-[90%] p-3  text-base outline-none rounded-md placeholder:text-slate-100" 
                        type="password" 
                        placeholder="password"/>

                    <button className="bg-coral px-4 h-11 rounded-md text-base text-slate-900 font-bold w-[90%] hover:bg-darkcoral">
                        Confirmar
                    </button>

                    <Link 
                        href={'/login'}
                        className="text-base font-normal text-coral"
                    > Já tem cadastro? Faça login 
                    
                    </Link>

                </form>
        
            </div>

        </main>
    )
}