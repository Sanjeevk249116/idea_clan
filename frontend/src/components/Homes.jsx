import React, { useContext } from 'react'
import { AuthContextData } from '../authProvider/AuthContainer'
import AdminDashboard from '../pages/AdminDashboard';
import StudentDashboard from '../pages/StudentDashboard';
import NavBar from '../navbar/NavBar';
import { Box } from '@chakra-ui/react';

function Homes() {
    const{authentication}=useContext(AuthContextData);
    console.log(authentication)
  return (
    <div>
        {/* <Box bg={"#04090c"}>
        <NavBar />
      </Box> */}
    {authentication?.role === 'admin' && <AdminDashboard />}
    {authentication?.role === 'user' && <StudentDashboard />}
    {/* <StudentDashboard authentication={authentication}/> */}
</div>
  )
}

export default Homes

