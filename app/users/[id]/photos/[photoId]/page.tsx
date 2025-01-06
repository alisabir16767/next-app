import React from "react";

interface UsersPageProps {
   params:{photoId:number};
}

const NewUsersPage = ({params:{photoId}}:UsersPageProps) => {
  return <div>PhotoPage {photoId}</div>;
};

export default NewUsersPage;