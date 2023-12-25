import React from 'react'
import { IUser } from '../models/IUser'
import styled from 'styled-components';


const UserListTable = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #ddd;
  padding: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  th,
  td {
    padding: 12px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tr:hover {
    background-color: #e2f4ff;
    transform: scale(1.02);
    transition: background-color 0.3s, transform 0.3s;
  }
`;
interface UserProps{

     users:IUser[];
     selectUser:(user:IUser)=>void;
}

const UserTable:React.FC<UserProps> = (props) => {
    const {users}=props;
    
  return (
    <UserListTable>
            <thead>
              <tr>
                <th>Sno</th>
                <th>Name</th>
                <th>Email</th>
                <th>Company</th>
                <th>Location</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} onClick={()=>props.selectUser(user)}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.company.name}</td>
                  <td>{user.address.city}</td>
                  <td>{user.website}</td>
                </tr>
              ))}
            </tbody>
          </UserListTable>
  )
}

export default UserTable