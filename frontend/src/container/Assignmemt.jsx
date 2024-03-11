import React, { useContext, useEffect, useState } from "react";
import { CalendarIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteassignmentData, PostassignmentData, getassignmentData } from "../redux/action";
import { AuthContextData } from "../authProvider/AuthContainer";

function Assignment() {
  const toast = useToast();
  const dispatch = useDispatch();
  const [clickedIndex, setClickedIndex] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track submission status
  const [array, setArray] = useState([]);
  const [state, setState] = useState(false);
  const data = useSelector((pre) => pre.reducer);
  const { obj } = useContext(AuthContextData);
  const [details, setDetails] = useState({
    title: "",
    date: "",
    creater: "",
  });
  useEffect(() => {
    dispatch(getassignmentData());
  }, []);
  useEffect(() => {
    setArray(data.assignment);
  }, [data]);
  const handleAccount = (idx) => {
    console.log(idx)
    setClickedIndex(idx);
    setIsSubmitted(false);
    console.log(clickedIndex)
  };

  const handleSumit = () => {
    if (details.title && details.date && details.creater) {
      dispatch(PostassignmentData(details)).then(() =>
        dispatch(getassignmentData())
      );
      setState(false);
    } else {
      console.log("fill");
    }
  };
  const handleSubmit = (e) => {
    setIsSubmitted(true);
    toast({
      status: "info",
      title: "Link submitted successfully",
      duration: 3000,
    });
  };
  const handleDelete=(el)=>{
    dispatch(DeleteassignmentData(el.title)).then(()=>dispatch(getassignmentData()))
  }
  return (
    <Box p={10}>
      <Box>
        {obj == "admin" && (
          <Box mb={10}>
            <HStack>
              <Button
                colorScheme="blue"
                width="full"
                p={3}
                onClick={(e) => setState((pre) => !pre)}
              >
                Create Assignments
              </Button>
            </HStack>
          </Box>
        )}

        {state && (
          <>
            <div className="bg-grey-lighter min-h-screen flex flex-col mt-10">
              <div className="container mt-0 max-w-lg  mx-auto flex-1 flex flex-col items-center px-2">
                <div className="bg-white p-10 rounded shadow-md text-black w-full">
                  <h1 className="mb-8 mt-0  text-3xl text-center">
                    Create Course
                  </h1>
                  <input
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="title"
                    placeholder="Topic Name"
                    onChange={(e) =>
                      setDetails({
                        ...details,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />

                  <input
                    type="date"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="date"
                    placeholder="Duration"
                    onChange={(e) =>
                      setDetails({
                        ...details,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="creater"
                    placeholder="creater"
                    onChange={(e) =>
                      setDetails({
                        ...details,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />

                  <Button
                    bg={"red"}
                    type="submit"
                    className="w-full  text-center py-3 rounded bg-green text-red-500 hover:bg-green-dark focus:outline-none my-1"
                    onClick={handleSumit}
                  >
                    Create
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </Box>
      {array?.map((el, index) => (
        <Box key={index} cursor={"pointer"}>
          
            {obj === "admin" ? (
              <Grid
                templateColumns="repeat(10, 1fr)"
                alignItems={"center"}
                my={5}
                
              >
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
                <GridItem colSpan={3} onClick={(e) => handleAccount(index)}>
                  <Flex alignItems="center" gap={2}>
                    <CalendarIcon />
                    <Text fontSize={18}>Submitted on: {el.date}</Text>
                  </Flex>
                </GridItem>
                <GridItem colSpan={1} onClick={(e)=>handleDelete(el)}>
                <Flex alignItems={"center"} gap={2}>
                  <DeleteIcon />
                  
                </Flex>
              </GridItem>
                {!isSubmitted && clickedIndex === index && (
                  <GridItem colSpan={10} my={10}>
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
            ) : (
              <Grid
                templateColumns="repeat(9, 1fr)"
                alignItems={"center"}
                my={5}
                onClick={handleAccount}
              >
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
            )}
         
          <hr />
        </Box>
      ))}
    </Box>
  );
}

export default Assignment;
