import React, { useState } from 'react'
import { useEffect } from 'react';

import { Table, TableHead, TableRow, TableCell, TableBody ,styled , Button} from "@mui/material";
// import {DeleteIcon}from '@mui/icons-material/Delete';
import { getUsers,deleteUser } from '../service/api';

import { Link } from 'react-router-dom'
// import user from '../../../server/schema/UserSchema';

const StyledTable = styled(Table)`
width:85%;
margin: 3% auto ;
}
`
const THead = styled(TableRow)`
background-color:#000000;
& > th{
color:white;
font-size:20px;
}
}
`


const AllUser = () => {

  const [ users , SetUsers]  = useState([]);

  useEffect(() => {
    getAllUSers();
  },[])

  const getAllUSers = async () => {
    let response = await getUsers();
    SetUsers(response.data)
    // console.log(response.data)
  }

  const deleteUserDetails = async(id)=>{
await deleteUser(id);
getAllUSers();
  }


  return (
    <StyledTable>
      <TableHead>
        <THead>
          {/* <TableCell>ID</TableCell> */}
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Mobno.</TableCell>
          <TableCell>Trash</TableCell>
        </THead>
      </TableHead>
      <TableBody>
{
  users.map( user => (
    <TableRow>
      {/* <TableCell>{user._id}</TableCell> */}
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.username}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.mobno}</TableCell>
      <TableCell>
        <Button variant='contained'  color="success"style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}> Edit</Button>
        <Button variant='contained' color="error" onClick={()=>deleteUserDetails(user._id)}>Delete</Button>
      </TableCell>
      </TableRow>
  ))
}
      </TableBody>
    </StyledTable>
  )
}

export default AllUser;