import { NextRequest, NextResponse } from "next/server";
import clientPromise from "../../../../lib/dbConnect";

interface URLS {
    url: string;
    shortUrl: string;
}

interface APIResponse {
    message: string;
    status: number;
}

export const POST = async (request: NextRequest): Promise<NextResponse<APIResponse>> => {
    const body: URLS = await request.json();

    const client = await clientPromise;

    const db = client.db("Linker-app-shortner-url");
    const collection = db.collection("url");

    // check the url already exist in the DataBase if exist return error 

    const urlAlready = await collection.findOne({shortUrl: body.shortUrl})
     if (urlAlready) {
        return NextResponse.json({
            message: "url Already exist ",
            status: 404,
            error:true,
            success:false
        });
     }


    const result = await collection.insertOne({
        url: body.url,
        shortUrl: body.shortUrl
    });

    return NextResponse.json({
        message: "url generated Successfully",
        status: 200,
        success:true,
        error:false
    });
}
