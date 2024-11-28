import clientPromise from "../../lib/dbConnect";
import { redirect } from "next/navigation";
import { Types } from "mongoose";

interface UrlData {
    _id: Types.ObjectId;
    url: string;
    shortUrl: string;
}

export default async function Page({
    params,
}: {
    params: { url: string }
}) {

    const client = await clientPromise;
    const url = params.url;
    const db = client.db("Linker-app-shortner-url");
    const collection = db.collection<UrlData>("url");

    const urlAlready = await collection.findOne({ shortUrl: url });
    if (urlAlready) {
       
        redirect(urlAlready.url);
    }
    return <div>URL not found</div>;
}