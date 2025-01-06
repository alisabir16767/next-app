import { NextRequest, NextResponse } from "next/server";

export function GET(request:NextRequest){
   return NextResponse.json([
      {id:1,name:"sabir"},
      {id:2,name:"ali"}
   ])
}


export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();

    // Validate the input
    if (!body || typeof body.name !== 'string') {
      return NextResponse.json(
        { error: 'Invalid request body. "name" is required.' },
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
