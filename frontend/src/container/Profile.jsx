import { Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import React from "react";

function Profile() {
  const obj = {
    name: "sanjeev Kushwaha",
    email: "sanjeevkushwaha@99",
    password: "12345",
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  p-4 gap-4 mt-5">
      <div className="bg-gray-50 p-7 rounded-xl">
        <HStack>
          <p>Name</p>
          <Spacer />
          <p className="text-blue-600 font-semibold">EDIT</p>
        </HStack>
        <Text fontSize={18} fontWeight={500}>
          {obj.name}
        </Text>
      </div>
      <div className="bg-gray-50 p-7 rounded-xl">
        <HStack>
          <p>Password</p>
          <Spacer />
          <p className="text-blue-600 font-semibold">EDIT</p>
        </HStack>
        <Text fontSize={18} fontWeight={500}>
          {obj.password}
        </Text>
      </div>
      <div className="bg-gray-50 p-7 rounded-xl">
        <HStack>
          <p>Phone</p>
          <Spacer />
          <p className="text-blue-600 font-semibold">EDIT</p>
        </HStack>
        <Text fontSize={18} fontWeight={500}>
          {"9876543210"}
        </Text>
      </div>
      <div className="bg-gray-50 p-7 rounded-xl">
        <HStack>
          <p>Email</p>
          <Spacer />
          <p className="text-blue-600 font-semibold">EDIT</p>
        </HStack>
        <Text fontSize={18} fontWeight={500}>
          {obj.email}
        </Text>
      </div>
    </div>
  );
}

export default Profile;
