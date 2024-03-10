import React, { useEffect, useState } from "react";
import { CalendarIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getassignmentData } from "../redux/action";

function Assignment() {
  const toast = useToast();
  const dispatch = useDispatch();
  const [clickedIndex, setClickedIndex] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track submission status
  const [array, setArray] = useState([]);
  const data = useSelector((pre) => pre.reducer);
  useEffect(() => {
    dispatch(getassignmentData());
  }, []);
  useEffect(() => {
    setArray(data.assignment);
  }, [data]);
  const handleAccount = (idx) => {
    setClickedIndex(idx);
    setIsSubmitted(false);
  };

  const handleSubmit = (e) => {
    setIsSubmitted(true);
    toast({
      status: "info",
      title: "Link submitted successfully",
      duration: 3000,
    });
  };

  return (
    <Box p={10}>
      {array?.map((el, index) => (
        <Box key={index} cursor={"pointer"}>
          <Grid templateColumns="repeat(9, 1fr)" alignItems="center" my={5}>
            <GridItem colSpan={4} onClick={(e) => handleAccount(index)}>
              <Text fontSize={18} fontWeight={600}>
                {el.title}
              </Text>
            </GridItem>
            <GridItem colSpan={2} onClick={(e) => handleAccount(index)}>
              <Flex alignItems="center" gap={2}>
                <Avatar name={el.creater} size="sm" />
                <Text fontSize={18}>{el.creater}</Text>
              </Flex>
            </GridItem>
            <GridItem colSpan={2} onClick={(e) => handleAccount(index)}>
              <Flex alignItems="center" gap={2}>
                <CalendarIcon />
                <Text fontSize={18}>Submitted on: {el.date}</Text>
              </Flex>
            </GridItem>
            {!isSubmitted && clickedIndex === index && (
              <GridItem colSpan={9} my={10}>
                <input
                  type="text"
                  placeholder="Submit the github link"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                />
                <Button
                  bg={"blue"}
                  color={"black"}
                  onClick={(e) => handleSubmit()}
                >
                  Submit Link
                </Button>
              </GridItem>
            )}
          </Grid>
          <hr />
        </Box>
      ))}
    </Box>
  );
}

export default Assignment;
