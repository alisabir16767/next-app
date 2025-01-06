"use client";

import React from 'react';
import Link from 'next/link';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-red-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">Error</h1>
        <p className="text-xl text-red-500 mb-6">
          Something went wrong. Please try again later.
        </p>
        <Link href="/">
          <a className="px-6 py-3 text-white bg-red-600 hover:bg-red-700 rounded-md shadow-md transition-all">
            Go Back to Home
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
