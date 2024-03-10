import { Button, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

function Discussion() {
    const toast=useToast()
    const [handle,setHandle]=useState(false)
    const handleAccount = () => {
       toast({
          status: "info",
          title: "Discussion Link sent to your email",
          duration: 3000,
        });
      };
      useEffect(()=>{
   setHandle(false)
      },[])
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col mt-10">
      <div className="container mt-0 max-w-lg  mx-auto flex-1 flex flex-col items-center px-2">
        <div className="bg-white p-10 rounded shadow-md text-black w-full">
          <h1 className="mb-8 mt-0  text-3xl text-center">Discussion Schedule</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Topic Name"
          />

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="Topic Details"
            placeholder="Topic Details"
          />

          <input
            type="date"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="date"
            placeholder="Choose date"
          />
        

          <Button
          bg={'red'}
            type="submit"
            className="w-full  text-center py-3 rounded bg-green text-red-500 hover:bg-green-dark focus:outline-none my-1"
            onClick={handleAccount}
          >
            Create Account
          </Button>

          
        </div>

        
      </div>
    </div>
  )
}

export default Discussion
