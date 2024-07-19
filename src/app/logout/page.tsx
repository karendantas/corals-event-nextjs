"use client"
import { ButtonContainer } from "@/components/button"
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
            <h2 className="text-2xl font-bold pb-5">Certeza que deseja sair?</h2>
            <ButtonContainer onClick={handleLogout}>
                <ButtonContainer.Body> Confirmar </ButtonContainer.Body>
            </ButtonContainer>

        </main>
    )
}