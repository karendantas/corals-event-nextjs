
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

    const loginAlreadyExists = users.map((user) => user.login === login)
    if (loginAlreadyExists){
        return
    }

    try {
        await api.post('/users', data)
        setCookie('loggedAs', data.role)
    }catch (err){
        console.log(err)
    }

}