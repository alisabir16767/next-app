import { NextRequest,NextResponse } from "next/server";
import schema from "../schema";

export function GET(
   request:NextRequest,
   {params}:{params:{id:number}}
){
   const { id } = params;
   if(id > 10)
      return NextResponse.json({error:"User not found"},{status:404})
   return NextResponse.json({id:1,name:"sabir"})

}

export async function PUT(
   request:NextRequest,
   {params}:{params:{id:number}}){
     const body= await request.json();
     const validation=schema.safeParse(body);
     if(!validation.success)
      return NextResponse.json(validation.error.errors,{status:400});
 if(params.id>10)
   return NextResponse.json({error:"User not found"},{status:404});
return NextResponse.json({id:1,name:"sabir"});
}

export function DELETE(
   request:NextRequest,
   {params}:{params:{id:number}}
){
   if(params.id>10)
      return NextResponse.json({error:"user not found"},{status:404})
   return NextResponse.json({});
}