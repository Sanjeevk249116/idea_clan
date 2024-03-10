import { CalendarIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetscheduleData } from "../redux/action";

function Schedule() {
    const toast=useToast();
    const data=useSelector((pre)=>pre.reducer)
    console.log(data)
    const dispatch=useDispatch();
    const[array,setArray]=useState([]);
    useEffect(()=>{
     dispatch(GetscheduleData())
    },[])

    useEffect(()=>{
setArray(data.schedule)
    },[data])
 
  const handleAccount = () => {
   toast({
      status: "info",
      title: "link update soon",
      duration: 3000,
    });
  };
  return (
    <Box>
      {array?.map((el) => {
       return <Box>
          <Grid templateColumns="repeat(9, 1fr)" alignItems={"center"} my={5} onClick={handleAccount}>
            <GridItem colSpan={1}>
              <Image
                src="https://students.masaischool.com/static/media/announcement-icon.4bf714660cdb7ecf44113ffbd0017f0c.svg"
                alt="logo"
              />
            </GridItem>
            <GridItem colSpan={4}>
              <Text fontSize={18} fontWeight={600}>
                {el.title}
              </Text>
            </GridItem>
            <GridItem colSpan={2}>
              <Flex alignItems={"center"} gap={2}>
                <Avatar
                  name={el.creater}
                  size="sm"
                 
                />
                <Text fontSize={18}> {el.creater}</Text>
              </Flex>
            </GridItem>
            <GridItem colSpan={2}>
              <Flex alignItems={"center"} gap={2}>
                <CalendarIcon />
                <Text fontSize={18}> {el.date}</Text>
              </Flex>
            </GridItem>
          </Grid>
          <hr />
        </Box>;
      })}
    </Box>
  );
}

export default Schedule;
