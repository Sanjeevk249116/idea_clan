import React, { useEffect, useState } from "react";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";
import { ProductGrid } from "./ProductGrid";
import { useDispatch, useSelector } from "react-redux";

import { animateScroll } from "react-scroll";
const App = ({products,email}) => {
  
const isLoading=false;
  useEffect(() => {
    animateScroll.scrollToTop({ smooth: true });
  }, []);

  return (
    <Box
      maxW={"95%"}
      mx="auto"
      px={{
        base: "4",
        md: "8",
        lg: "12",
      }}
      py={{
        base: "6",
        md: "8",
        lg: "12",
      }}
    >
      {isLoading ? (
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          alignContent={"center"}
          minHeight={"80vh"}
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="black"
            size="xl"
          />
        </Flex>
      ) : (
        <ProductGrid>
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} email={email}/>
          ))}
        </ProductGrid>
      )}
    
    </Box>
  );
};

export default App;
