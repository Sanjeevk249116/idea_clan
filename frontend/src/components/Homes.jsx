import React, { useContext, useEffect, useState } from 'react'
import { AuthContextData } from '../authProvider/AuthContainer'
import AdminDashboard from '../pages/AdminDashboard';
import StudentDashboard from '../pages/StudentDashboard';
import NavBar from '../navbar/NavBar';
import { Box } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getassignmentData } from '../redux/action';

function Homes() {
    const{authentication}=useContext(AuthContextData);
    console.log(authentication)
    const dispatch=useDispatch();
    const [obj, setObj] = useState({});
    const data = useSelector((pre) => pre.reducer);
    useEffect(() => {
      dispatch(getassignmentData());
    }, []);
    useEffect(()=>{
    setObj(data.signupData)
    },[data])
    console.log(data)
  return (
    <div>
        {/* <Box bg={"#04090c"}>
        <NavBar />
      </Box> */}
    {obj?.role === 'admin' && <AdminDashboard />}
    {obj?.role === 'user' && <StudentDashboard />}
    {/* <StudentDashboard authentication={authentication}/> */}
</div>
  )
}

export default Homes

