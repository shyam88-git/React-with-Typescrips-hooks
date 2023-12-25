import React, { useEffect, useState } from 'react';
import { IUser } from '../models/IUser';
import { UserService } from '../services/UserService';
import styled from 'styled-components';
import ErrorMessage from './ErrorMessage';
import UserTable from './UserTable';
import UserHeading from './UserHeading';

const UserListContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
`;

const UserListBody = styled.div`
  text-align: center;
  justify-content: space-between;
`;



export const UserList: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([] as IUser[]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    UserService.getAllUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  const selectUser=(user:IUser):void=>{

     alert(JSON.stringify(user));
  }

  return (
    <UserListContainer>
      <UserListBody>
        <UserHeading heading='User Data' subHeading='Certainly! Below is an example ofCertainly! Below is an example of a Certainly! Below is an example of a simple UserHeading componentvCertainly! Below is an example of a simple UserHeading componentCertainly! Below is an Certainly! Below is an example of a simple UserHeading componentCertainly! Below is an example of a simple UserHeading componentCertainly! Below is an example of a simple UserHeading componentCertainly! Below is an example of a simple UserHeading componentCertainly! Below is an example of a simple UserHeading componentexample of a simple UserHeading component simple UserHeading component a simple UserHeading component using styled components in React. This component includes a heading and a paragraph:'/>
        {users.length > 0 ? ( <UserTable users={users} selectUser={selectUser}/>
          
        ) : (
          <ErrorMessage message="Data not Found" />
        )}
      </UserListBody>
    </UserListContainer>
  );
};
