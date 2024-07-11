"use client"

import { UserContext } from "@/contexts/usersContext";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useForm } from "react-hook-form";

import * as z from 'zod'

const UserSchema = z.object({
    login: z.string().min(1),
    password: z.string().min(6, "O nome não pode estar vazio!"),
   
})

type UserSchemaType = z.infer< typeof UserSchema>

export default function Login (){

    const {users, getAllUsers, AuthenticateUser} = useContext(UserContext)
    const navigate = useRouter()

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<UserSchemaType>({
        resolver: zodResolver(UserSchema)
    })

    function onSubmitLoginForm (data: UserSchemaType ){
        getAllUsers()

        const userExistis = users.map((user) => {
            if (user.login === data.login && user.name === user.name) return user
        })

        if (userExistis){
            const currentUser = userExistis.find((user) => user)
            if (currentUser?.role === "admin") {
                AuthenticateUser(currentUser)
                navigate.push('/admin/dashboard')
            }else{
                AuthenticateUser(currentUser!)
                navigate.push('/home')
            }
        }


      
    }
    return (
        <main className="max-w-screen-lg h-screen mx-auto flex items-center justify-center md: px-6" >
        <div className="w-[500px] h-[500px] rounded-md p-5 flex items-center border border-coral ">
      
            <form onSubmit={handleSubmit(onSubmitLoginForm)} className="flex flex-col flex-1 items-center text-3xl gap-5 font-bold  ">
                <h3 className="text-coral text-4xl uppercase font-extrabold ">LOGIN</h3>
     
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

                <button className="bg-coral px-4 h-11 rounded-md text-base text-slate-900 w-[90%] hover:bg-darkcoral font-bold">
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