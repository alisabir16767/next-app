import React, { Suspense } from "react";
import PageTable from './pageTable';
import Link from "next/link";


interface Props{
   searchParams:{sortOrder:string};
}

const UsersPage = async ({searchParams:{sortOrder}}:Props) => {
   

   return (
      <>
         <h1 className="text-2xl font-bold mb-4">Users</h1>
         <Link href="/users/new" className="btn btn-primary">New user</Link>
         <Suspense fallback={<div>Loading...</div>}>
         <PageTable sortOrder={sortOrder}/>
         </Suspense>
        
      </>
   );
};

export default UsersPage;
