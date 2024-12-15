import { NextResponse } from "next/server";
import dbConnect from "../../../../config/db";
import PostItem from "../../../../models/PostItem";




//GET and POST func goes here without id 
export async function GET() {
  try {
    await dbConnect();
    const res = await PostItem.find().select("-__v");
    // console.log(res);
    return NextResponse.json(res, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: error,
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(req: Request) {
  const body = await req.json();
  // console.log("Body : ",body);
  try {
    await dbConnect();
    const res = await new PostItem({ ...body }).save();
    // console.log(res);
    return NextResponse.json(res,
      {
        headers: {
          "Content-Type": "application/json",
        },
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "error while POST",
        error,
      },
      {
        status: 500,
      }
    );
  }
}
