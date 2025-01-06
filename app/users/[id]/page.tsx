import React from "react";

interface UsersPageProps {
   params:{id:number};
}

const NewUsersPage = ({params:{id}}:UsersPageProps) => {
  return <div>NewUsersPage {id}</div>;
};

export default NewUsersPage;