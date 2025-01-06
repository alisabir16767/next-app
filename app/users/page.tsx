import React from "react";
import PageTable from './pageTable';


interface Props{
   searchParams:{sortOrder:string};
}

const UsersPage = async ({searchParams:{sortOrder}}:Props) => {
   

   return (
      <>
         <h1 className="text-2xl font-bold mb-4">Users</h1>
         <PageTable sortOrder={sortOrder}/>
      </>
   );
};

export default UsersPage;
