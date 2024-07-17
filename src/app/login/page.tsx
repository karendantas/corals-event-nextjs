"use client"

import Link from "next/link";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

import { LoginUser } from "@/api/conection";
import { userContext } from "@/contexts/userContext";

import toast from "react-hot-toast";

import * as z from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Span } from "@/components/span";

const UserSchema = z.object({
    login: z.string().min(1, 'Preencha o campo!'),
    password: z.string().min(6, "A senha deve ter no minímo 6 dígitos!"),
   
})

type UserSchemaType = z.infer< typeof UserSchema>

export default function Login (){
    
    const navigate = useRouter()
    const {users, getAllUsers} = useContext(userContext)
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting}
    } = useForm<UserSchemaType>({
        resolver: zodResolver(UserSchema)
    })

    async function onSubmitLoginForm (data: UserSchemaType ){
   
        if ( await LoginUser(data.login, data.password, users) ){
            navigate.push('/home')
        }else{
            toast.error('Usuário inexistente')
        }
        
    }

    useEffect(() => {
        getAllUsers()
    }, [])
    return (
        <main className="max-w-screen-lg h-screen mx-auto flex items-center justify-center md: px-6" >
        <div className="w-[500px] h-[500px] rounded-md p-5 flex items-center border border-coral ">
      
            <form onSubmit={handleSubmit(onSubmitLoginForm)} className="flex flex-col flex-1 items-center text-3xl gap-5 font-bold  ">
                <h3 className="text-coral text-4xl uppercase font-extrabold ">LOGIN</h3>

                <div className="w-[90%] flex flex-col">

                    <input 
                        className="bg-slate-800  w-full p-3  text-base outline-none rounded-md placeholder:text-slate-100" 
                        type="text" 
                        placeholder="Login"
                        {...register("login")}
                        />
                    <Span message={errors && errors.login?.message } />
                </div>

                <div className="w-[90%] flex flex-col">
                    <input 
                        className="bg-slate-800  w-full p-3  text-base outline-none rounded-md placeholder:text-slate-100" 
                        type="password" 
                        placeholder="password"
                        {...register("password")}
                        />
                    <Span message={errors && errors.password?.message }/>
                </div>
                <button 
                    type = "submit"
                    disabled = {isSubmitting}
                    className="bg-coral px-4 h-11 rounded-md text-base text-slate-900 w-[90%] hover:bg-darkcoral font-bold disabled:opacity-15 disabled:cursor-not-allowed">
                    Confirmar
                </button>


                <Link 
                    href={'/register'}
                    className="text-base font-normal text-coral"
                > Não tem conta? Cadastre-se 
                
                </Link>

            </form>
    
        </div>

    </main>
    )
}