'use client'
import React from "react";
import { useRouter } from "next/navigation";

const NewUsersPage: React.FC = () => {
  const router = useRouter();

  const handleCreate = () => {
    
    console.log("User created");
    router.push("/users");
  };

  return ( 
    <> 
      <button 
        className="btn btn-primary"
        onClick={handleCreate}
      >
        Create
      </button>
    </>
  );
};

export default NewUsersPage;