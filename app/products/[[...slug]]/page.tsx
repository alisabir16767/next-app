import React from "react";

interface UsersPageProps {
   params:{slug:string[]};
   searchParams:{sortOrder:string};
}

const NewUsersPage = ({params:{slug},searchParams:{sortOrder}}:UsersPageProps) => {
  return <div>productPage {slug} {sortOrder}</div>;
};

export default NewUsersPage;