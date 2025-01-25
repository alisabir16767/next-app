import { Resend } from 'resend';
import WelcomeTemplate from '@/emails/WelcomeTemplate';
import { NextRequest, NextResponse } from 'next/server';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    await resend.emails.send({
      from: 'your-email@example.com',
      to: 'alisabir167167@gmail.com',
      subject: 'Welcome to BazzarConnect!',
      react: React.createElement(WelcomeTemplate, { name: "Sabir" })
    });
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}