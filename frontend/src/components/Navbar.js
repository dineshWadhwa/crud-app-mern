import React from 'react'

import {AppBar,Toolbar,styled} from '@mui/material';
import {NavLink} from 'react-router-dom'

const Header = styled(AppBar)`
background-color : #111111;
`
const Tabs = styled(NavLink)`
font-size : 20px;
margin-left: 25px;
cursor:pointer;
color:inherit;
text-decoration:none;

`

const Navbar = () => {
  return (
<Header position='static'>
    <Toolbar>
<img src='download.png' height="80px" alt='DW'/>
<Tabs to="/add">Add User</Tabs>
<Tabs to="/all">All User</Tabs>
    </Toolbar>
</Header>  )
} 

export default Navbar;