import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../../lib/db";
import User from '../../../../../models/user'

export async function POST(request : NextRequ est){
    try {

        const {email,password,firstName,lastName} = await request.json();
        if(!email || !password || !firstName || !lastName){
            return NextResponse.json(
                {error:"All fields are required !"},
                {status:400},
            )
        }

        await connectToDatabase()

        const existingUser = await User.findOne({email})

        if(existingUser){
            return NextResponse.json(
                {error:"User already exists !"},
                {status:400},
            )
        }

        await User.create({
            email,password,firstName,lastName
        })

        return NextResponse.json(
            {message:"created success fully"} ,
            {status:200}
        )
    } catch (error) {
        throw new Error("")
    }
}
