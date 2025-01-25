import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard/ProductCard';
import { authOptions } from './api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';
import sabir from "@/public/images/Screenshot 2025-01-14 at 2.35.23 PM.png"
import React, { lazy, Suspense } from 'react';

const HavyComponent = lazy(() => import('./components/HavyComponent'));

export default async function Home() {
  const session = await getServerSession(authOptions);
  
  return (
    <main>
      <h1>hello {session && <span>{session.user!.name}</span> }</h1>
      <Link href="/users"> users </Link>
      <ProductCard/>
      <Image src="https://bit.ly/react-cover" width={300} height={170} alt="image" />
      <Suspense fallback={<div>Loading...</div>}>
        <HavyComponent />
      </Suspense>
    </main>
  )
}