import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Image,
  Skeleton,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { studentData } from "../../redux/action";

export const ProductCard = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { product, rootProps, email } = props;

  const { title, duration, level, description } = product;
  const handleVisual = (name) => {
    product.email = email;
    dispatch(studentData(product)).then(() => navigate(`/main`));
  };
  return (
    <Stack
      maxW={"450px"}
      spacing={{
        base: "4",
        md: "5",
      }}
      {...rootProps}
    >
      <Stack>
        <Stack spacing="5">
          <Text
            fontWeight="600"
            fontSize={18}
            noOfLines={1}
            color={useColorModeValue("gray.700", "gray.400")}
          >
            {title}
          </Text>
        </Stack>
        <Stack>
          <Text color={"blue"} fontWeight={400} fontSize={16}>
            Duration: <span style={{ color: "black" }}>{duration}</span>
          </Text>
          <Spacer />
          <Text color={"green"} fontWeight={400}>
            Level: <span style={{ color: "black" }}>{level}</span>
          </Text>
          <Text color={"green"} fontWeight={400} noOfLines={2}>
            Description: <span style={{ color: "black" }}>{description}</span>
          </Text>
        </Stack>
      </Stack>
      <Stack align="center">
        <Button
          colorScheme="blue"
          width="full"
          onClick={(e) => handleVisual(title)}
        >
          Conform Course
        </Button>
      </Stack>
    </Stack>
  );
};
