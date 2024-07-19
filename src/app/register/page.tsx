"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

import { RegisterUser } from "@/api/conection";
import { userContext } from "@/contexts/userContext";

import toast from "react-hot-toast";

import * as z from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Span } from "@/components/span";

const UserSchema = z.object({
    name: z.string().min(1, "Preencha o campo!"),
    login: z.string().min(1, "Preencha o campo!"),
    password: z.string().min(6, "A senha deve ter no minímo 6 dígitos!")
})

type UserSchemaType = z.infer< typeof UserSchema>

export default function Register (){
    const {users, getAllUsers} = useContext(userContext)

    const navigate = useRouter()
    
    const { register, 
            handleSubmit,
            formState: {errors, isSubmitting}
        } = useForm<UserSchemaType>({
        resolver: zodResolver(UserSchema)
    })


    async function onSubmitUser (data: UserSchemaType){
        
        if ( await RegisterUser(data.name, data.login, data.password, users) ){
            navigate.push('/login')
        }else{
            toast.error('Um usuário com esse login já foi cadastrado!')
        }

    }

    useEffect(() => {
        getAllUsers()
    }, [])
    return (
        <main className="max-w-screen-lg h-screen mx-auto flex items-center justify-center md: px-6" >
            <div className="w-[500px] h-[500px] rounded-md p-2 md:p-5 flex items-center border border-coral">
          
                <form onSubmit={handleSubmit(onSubmitUser)} className="flex flex-col flex-1 items-center text-3xl gap-5 font-bold  ">
                    <h3 className="text-coral text-2xl md:text-4xl uppercase font-extrabold ">Cadastro</h3>

                    <div className="w-[90%] flex flex-col">
                        <input 
                            className=" bg-slate-800  w-full p-3 text-xs md:text-base outline-none rounded-md" 
                            type="text" 
                            placeholder="Nome"
                            {...register("name")}
                            />
                        <Span message={errors && errors.name?.message}/>
                        
                    </div>

                   <div className="w-[90%] flex flex-col">
                        <input 
                            className="bg-slate-800  w-full p-3 text-xs md:text-base outline-none rounded-md placeholdert-slate-100" 
                            type="text" 
                            placeholder="Login"
                            {...register("login")}
                            />
                        <Span message={errors && errors.login?.message}/>
                    </div>

                    <div className="w-[90%] flex flex-col">
                        <input 
                            className="bg-slate-800  w-full p-3  text-sm md:text-base outline-none rounded-md " 
                            type="password" 
                            placeholder="password"
                            {...register("password")}
                            />
                        <Span message={errors && errors.password?.message}/>
                    </div>  
                        
                    <button 
                        type = "submit" 
                        disabled = {isSubmitting}
                        className="bg-coral px-4 h-11 rounded-md text-base text-slate-900 font-bold w-[90%] hover:bg-darkcoral disabled:opacity-15 disabled:cursor-not-allowed"
                        >
                        Confirmar
                    </button>
                    
                    <Link 
                        href={'/login'}
                        className="text-xs md:text-base font-normal text-coral"
                    > Já tem cadastro? Faça login 
                    
                    </Link>

                </form>
        
            </div>

        </main>
    )
}