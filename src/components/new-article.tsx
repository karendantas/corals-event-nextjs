import { Button } from "./button";

export function NewArticleForm(){
    return (
       
            <div className=" max-w-2xl w-full bg-slate-900 p-12 rounded-md z-50">
                <h2 className="text-slate-100 font-semibold">Criar novo artigo </h2>
                <form className="w-full flex flex-col gap-3">
                    <input type="text" placeholder="Titúlo" className="bg-slate-800 p-3 w-full text-base outline-none rounded-md placeholder:text-slate-100"/>
                    <input type="text" placeholder="Autor" className="bg-slate-800 p-3 w-full text-base outline-none rounded-md placeholder:text-slate-100"/>

                    <textarea 
                        rows = {15}
                        placeholder="Escreva seu contéudo aqui..." className="bg-slate-800 p-3 w-full text-base outline-none rounded-md placeholder:text-slate-100" />

                    <Button title = "Enviar artigo"/>
                </form>
            </div>
        
    )
}