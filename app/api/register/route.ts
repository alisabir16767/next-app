import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import { prisma } from "@/prisma/client";
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(5)
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(validation.error.errors, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email: body.email },
    });

    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);
    const newUser = await prisma.user.create({
      data: {
        email: body.email,
        hashedPassword,
      },
    });

    return NextResponse.json({ email: newUser.email }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred while processing the request' }, { status: 500 });
  }
}