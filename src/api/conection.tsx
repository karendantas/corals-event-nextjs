import { api } from "@/lib/api"
import { setCookie } from "cookies-next"

import { UserType } from "@/@types/user-type"


//criar novo usuário
export async function RegisterUser(name: string, login: string, password: string, users: UserType[]){

    const data = {
        name,
        login, 
        password,
        role: "client"
    }

    const loginAlreadyExists = users.find((user) => user.login === login)
    if (loginAlreadyExists){
        return false
    }

    try {
        
        await api.post('/users', data)
        return true

    }catch (err){
        console.log(err)
    }

}

export function LoginUser(login: string, password: string, users: UserType[]){
    
    const existingUser = users.find((user) => user.login === login && user.password === password)
    if (existingUser){
        setCookie('loggedAs', existingUser.role)

        const data = [existingUser.id, existingUser.name ]
        localStorage.setItem('user', JSON.stringify(data))

        return true
    }else{
        return false
    }
}