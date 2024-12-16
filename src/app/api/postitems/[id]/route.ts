import { NextResponse } from "next/server";
import PostItem from "../../../../../models/PostItem"
import dbConnect from "../../../../../config/db";

export async function GET(req: Request , { params }: { params: { id: string } }) {
    try {
        await dbConnect();
        const id = params.id;
        console.log(id);
        const postItem = await PostItem.findById(id).select("-__v");
        return NextResponse.json(postItem, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error while GET by id", error }, { status: 500 });
    }
}