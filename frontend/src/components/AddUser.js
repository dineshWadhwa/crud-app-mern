import React from 'react'
import {useState} from 'react'
import { FormGroup, FormControl, InputLabel, Input, Typography, styled ,Button} from '@mui/material';
import { addUser } from '../service/api';
import { useNavigate } from "react-router-dom"



const Container = styled(FormGroup)`
width:50%;
margin:3% auto ;
& > div {
  margin-top:25px;
}
`
const defaultValue = {
  name: "",
  username:"",
  email:"",
  mobno:""
}

const AddUser = () => {


  const [ user,setUser ] = useState(defaultValue);

  const navigate = useNavigate();

  const onValuechange = (e)=>{
  // console.log(e.target.name,e.target.value)
  setUser({...user,[e.target.name]:e.target.value})
  // console.log(user)
  }

  const addUserDetails = async()=>{
    await addUser(user);
    navigate('/all')
  } 
  

  return (
    <Container>
      <Typography variant='h4'>Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={onValuechange} name="name"/>
      </FormControl>
      <FormControl>
      <InputLabel>UserName</InputLabel>

        <Input onChange={onValuechange} name="username"/>
      </FormControl>
      <FormControl>
      <InputLabel>Email</InputLabel>
        <Input  onChange={onValuechange} name="email"/>
      </FormControl>
      <FormControl>
      <InputLabel>Mob No.</InputLabel>
      <Input onChange={onValuechange} name="mobno"/>
      </FormControl>
      <FormControl>
        <Button variant='contained' onClick={()=>addUserDetails()}>Add User
        </Button>
      </FormControl>
    </Container>
  )
}

export default AddUser;