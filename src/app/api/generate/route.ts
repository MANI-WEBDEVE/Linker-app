import { NextRequest, NextResponse } from "next/server";
import clientPromise from "../../../../lib/dbConnect";


export const POST = async (request:NextRequest, response:NextResponse) => {

    const client = await clientPromise
    const db = client.db("Linker-app-shortner-url")
    const collection = db.collection("url")


    return NextResponse.json({message: "hello working",status: 200})
}