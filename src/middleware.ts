import { NextRequest, NextResponse } from "next/server";


export function middleware(req: NextRequest){

    const loggedAs = req.cookies.get('loggedAs')
    const path = req.nextUrl.pathname

    console.log(loggedAs)

    const isPrivatePath = path == '/admin/dashboard'
    const isAuth = path == '/login' || path == '/register'
    const isHome = path == '/home'

    if (loggedAs){  
        
        //tornando rota do dashboard exlusiva para admins
        if (isPrivatePath && loggedAs.value != "admin"){
            return NextResponse.redirect(new URL('/home', req.nextUrl))
        }

        //usuários cadastrado não precisam acessar o login e register novamente
        if (isAuth && loggedAs){
            return NextResponse.redirect(new URL('/home', req.nextUrl))
        }

    }
    
    //usuários não cadastrado não podem acessar as rotas home e dashboard
    if (isHome && loggedAs == undefined || isPrivatePath && loggedAs == undefined){
        return NextResponse.redirect(new URL('/', req.nextUrl))
    }

    return NextResponse.next()
}

export const config = {
    matcher : [
        '/',
        '/login',
        '/register',
        '/home',
        '/admin/dashboard'
    ]}