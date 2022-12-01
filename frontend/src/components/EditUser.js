import React from 'react'
import { useState, useEffect } from 'react'
import { FormGroup, FormControl, InputLabel, Input, Typography, styled, Button } from '@mui/material';
import { editUser, getUser } from '../service/api';
import { useNavigate, useParams } from "react-router-dom"



const Container = styled(FormGroup)`
width:50%;
margin:3% auto ;
& > div {
  margin-top:25px;
}
`
const defaultValue = {
    name: "",
    username: "",
    email: "",
    mobno: ""
}

const EditUser = () => {


    const [user, setUser] = useState(defaultValue);

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        loadUserDetails();
    }, []);
 
    const loadUserDetails = async () => {
        const response = await getUser(id);
        // console.log("affffffffffffff", response.data)
        setUser(response.data);
    }

    





    const onValuechange = (e) => {
        // console.log(e.target.name,e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value })
        // console.log(user)
    }

    const editUserDetails = async () => {
        await editUser(user,id);
        navigate('/all')
    }


    return (
        <Container>
            <Typography variant='h4'>Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={onValuechange} name="name" value={user.name} />
            </FormControl>
            <FormControl>
                <InputLabel>UserName</InputLabel>

                <Input onChange={onValuechange} name="username" value={user.username} />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={onValuechange} name="email" value={user.email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Mob No.</InputLabel>
                <Input onChange={onValuechange} name="mobno" value={user.mobno} />
            </FormControl>
            <FormControl>
                <Button variant='contained' onClick={() => editUserDetails()}>Edit User
                </Button>
            </FormControl>
        </Container>
    )
}

export default EditUser;