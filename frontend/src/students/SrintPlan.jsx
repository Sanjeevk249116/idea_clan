import { CalendarIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSprintData } from "../redux/action";

function SrintPlan() {
  const [array,setArray]=useState([])
  const dispatch=useDispatch();
  const data=useSelector((pre)=>pre.reducer)
  console.log(data)
  useEffect(()=>{
dispatch(getSprintData())
  },[])
  useEffect(()=>{
   setArray(data.sprint) 
  })
  return (
    <Box>
    {array?.map((el) => {
      return (
        <Box key={el.week}>
          <Grid templateColumns="repeat(10, 1fr)" alignItems="center" my={5}>
            <GridItem colSpan={2}>
              <Text color={'greenyellow'} fontSize={18} fontWeight={600}>
            Week: {el.week}
              </Text>
            </GridItem>
            <GridItem colSpan={8}>
              <Grid templateColumns="repeat(3, 1fr)" gap={10}>
              {el.topics.map((topic, index) => (
                <GridItem key={index}>
                  <Text fontSize={18}>{topic}</Text>
                </GridItem>
              ))}
              </Grid>
            </GridItem>
          </Grid>
          <hr />
        </Box>
      );
    })}
  </Box>
  );
}

export default SrintPlan;
