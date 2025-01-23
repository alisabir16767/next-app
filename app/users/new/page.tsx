'use client'
import React from "react";
import { useRouter } from "next/navigation";

const NewUsersPage: React.FC = () => {
  const router = useRouter();

  const handleCreate = () => {
    // Add your create user logic here
    console.log("User created");
    router.push("/users");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <button 
        className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        onClick={handleCreate}
      >
        Create User
      </button>
    </div>
  );
};

export default NewUsersPage;