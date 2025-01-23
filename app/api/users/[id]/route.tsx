import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(validation.error.errors, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (existingUser) {
      return NextResponse.json({ error: "User already exists." }, { status: 400 });
    }

    const newUser = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        followers: body.followers || 0,
        isActive: body.isActive !== undefined ? body.isActive : true,
        registeredAt: new Date(),
      },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'An error occurred while processing the request.' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(validation.error.errors, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(params.id),
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found." }, { status: 404 });
    }

    const updatedUser = await prisma.user.update({
      where: { id: parseInt(params.id) },
      data: {
         name:body.name,
         email:body.email
      }
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json(
      { error: 'An error occurred while processing the request.' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(params.id),
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found." }, { status: 404 });
    }

    const deletedUser = await prisma.user.delete({
      where: { id: parseInt(params.id) },
    });

    return NextResponse.json(deletedUser);
  } catch (error) {
    return NextResponse.json(
      { error: 'An error occurred while processing the request.' },
      { status: 500 }
    );
  }
}