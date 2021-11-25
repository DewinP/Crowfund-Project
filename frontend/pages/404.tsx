import { Box, Heading,Text } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/react"
import React from "react"
import Layout from "../components/Layout"

const ErrorPage:React.FC = () => {


    return(
       <Layout>
            <Box textAlign="center" py={10} px={6}>
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bgGradient="linear(to-r, teal.400, teal.600)"
          backgroundClip="text">
          404
        </Heading>
        <Text fontSize="18px" mt={3} mb={2}>
          Page Not Found
        </Text>
        <Text color='gray.500' mb={6}>
          The page you're looking for does not seem to exist
        </Text>
  
        <Button
          colorScheme="teal">
          Go Back
        </Button>
      </Box>
       </Layout>
    )

}

export default ErrorPage