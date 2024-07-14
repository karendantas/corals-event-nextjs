import { NextRequest, NextResponse } from "next/server";


export default function middleware(req: NextRequest){
    const response = NextResponse.next()
    const loggedAs = response.cookies.get('loggedAs')
    console.log(loggedAs)
    const href = req.nextUrl.pathname

    if (!loggedAs){
        if (href != '/'){
            return NextResponse.redirect('http://localhost:3000')
        }
        return 
    }

    if (loggedAs){
        if (loggedAs.value == "client"){
            return NextResponse.redirect('http://localhost:3000/home')
        }

        if (loggedAs.value == "admin"){
            return NextResponse.redirect('http://localhost:3000/dashboard')
        }
    }
}

export const config = {matcher : ['/']}