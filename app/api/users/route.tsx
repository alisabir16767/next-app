import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { PrismaClient } from "@prisma/client";

export async function GET(request:NextRequest){
   const prisma = new PrismaClient();
   const users = await prisma.user.findMany();
   return NextResponse.json(users);
}


export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    const validation=schema.safeParse(body);

    // Validate the input
    if (!validation.success) {
      return NextResponse.json(
        validation.error.errors,
        { status: 400 }
      );
    }

    // Respond with the new data
    return NextResponse.json({ id: 1, name: body.name });
  } catch (error) {
    // Handle unexpected errors
    return NextResponse.json(
      { error: 'An error occurred while processing the request.' },
      { status: 500 }
    );
  }
}
