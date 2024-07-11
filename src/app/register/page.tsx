"use client"

import { UserContext } from "@/contexts/usersContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";


import { useForm } from "react-hook-form";
import { uuid } from "uuidv4";
import * as z from 'zod'


const UserSchema = z.object({
    name: z.string().min(1, "O nome não pode estar vazio!"),
    login: z.string().min(1, "O login não pode estar vazio!"),
    password: z.string().min(6, "A senha deve ter no minímo 6 dígitos!")
})

type UserSchemaType = z.infer< typeof UserSchema>

export default function Register (){

    const { addUser} = useContext(UserContext)

    const navigate = useRouter()
    const { register, 
            handleSubmit,
            reset,
            formState: {errors}
        } = useForm<UserSchemaType>({
        resolver: zodResolver(UserSchema)
    })


    function onSubmitUser (data: UserSchemaType){
        const unique_id = uuid()
        const user = {
            ...data, id: unique_id, role: "client"
        }

        addUser(user)

       navigate.push('/login')
    }

    return (
        <main className="max-w-screen-lg h-screen mx-auto flex items-center justify-center md: px-6" >
            <div className="w-[500px] h-[500px] rounded-md p-5 flex items-center border border-coral">
          
                <form onSubmit={handleSubmit(onSubmitUser)} className="flex flex-col flex-1 items-center text-3xl gap-5 font-bold  ">
                    <h3 className="text-coral text-4xl uppercase font-extrabold ">Cadastro</h3>

                        <input 
                            className=" bg-slate-800  w-[90%] p-3 text-base outline-none rounded-md placeholder:text-slate-100" 
                            type="text" 
                            placeholder="Nome"
                            {...register("name")}
                            />
                   
                 
                        <input 
                            className="bg-slate-800  w-[90%] p-3  text-base outline-none rounded-md placeholder:text-slate-100" 
                            type="text" 
                            placeholder="Login"
                            {...register("login")}
                            />
                 
                
                        <input 
                            className="bg-slate-800  w-[90%] p-3  text-base outline-none rounded-md placeholder:text-slate-100" 
                            type="password" 
                            placeholder="password"
                            {...register("password")}
                            />

                      
                        
                    <button type = "submit" className="bg-coral px-4 h-11 rounded-md text-base text-slate-900 font-bold w-[90%] hover:bg-darkcoral">
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