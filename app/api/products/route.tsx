import { NextRequest, NextResponse } from "next/server";
import schema from './schema';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const products = await prisma.product.findMany();
  return NextResponse.json(products, { status: 200 });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(validation.error.errors, { status: 400 });
    }

    const newProduct = await prisma.product.create({
      data: {
        name: body.name,
        price: body.price,
      },
    });

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'An error occurred while processing the request.' },
      { status: 500 }
    );
  }
}