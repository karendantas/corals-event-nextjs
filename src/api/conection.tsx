
import { UserType } from "@/@types/user-type"
import { api } from "@/lib/api"
import { setCookie } from "cookies-next"




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
        console.log('existe')
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

        console.log("entrou")
        return true
    }else{
        return false
    }
}