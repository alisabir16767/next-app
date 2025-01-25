'use client';

import React from "react";
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const Navbar: React.FC = () => {
  const { status, data: session } = useSession();


  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">MyApp</Link>
        </div>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          {status==='loading' && <div>loading...</div> }
          {status === 'authenticated' && 
          <div>
            
            {session?.user?.name}
            <li><Link href="/api/auth/signout" className="hover:underline">Signout</Link></li>
            </div>}
          {status === 'unauthenticated' && <li><Link href="/api/auth/signin" className="hover:underline">LogIn</Link></li>}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;