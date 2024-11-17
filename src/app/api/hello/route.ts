import { NextResponse } from "next/server"

export async function GET(req: Request) {
    
    console.log('Rot do Beck')
    
    return NextResponse.json({ message: 'Hello beck' })

}   