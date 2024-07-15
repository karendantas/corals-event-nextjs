import { NextRequest, NextResponse } from "next/server";


export function middleware(req: NextRequest){

    const loggedAs = req.cookies.get('loggedAs')
    const path = req.nextUrl.pathname
    
    console.log(loggedAs)

    const isPrivatePath = path == '/admin/dashboard'
    const isPublic = path == '/login' || path == '/register'

    if (loggedAs){  
        
        //tornando rota do dashboard exlusiva para admins
        if (isPrivatePath && loggedAs.value != "admin"){
            return NextResponse.redirect(new URL('/home', req.nextUrl))
        }



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