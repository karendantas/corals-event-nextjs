"use client"
import { removeCookies } from "cookies-next"
import { useRouter } from "next/navigation"

export default function Logout(){
    const navigate = useRouter()

    function handleLogout (){

        try {

            removeCookies('loggedAs')
            localStorage.removeItem('user')
            return navigate.push('/') 
        }catch (err){
            console.log()
        }

    }
    return (

        <main className="max-w-screen-lg h-screen mx-auto flex flex-col items-center justify-center md: px-6 ">
            <h2 className="text-2xl font-bold">Certeza que deseja sair?</h2>
            <button
                onClick={handleLogout}
            > Confirmar </button>

        </main>
    )
}