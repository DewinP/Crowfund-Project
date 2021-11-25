
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Flex,
  Button,
} from '@chakra-ui/react';
import React from 'react'
import Link from 'next/link'

const ProjectCard = ()=> {
  return (
    <Center py={6}>
      <Box
        maxW='445px'
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        rounded={'md'}
        p={6}
        overflow='hidden'>
        <Stack>
          <Heading
            fontSize='2xl'>
            Boost your conversion rate wawa wa fj ff wq f
          </Heading>
         <Flex justifyContent='space-between' textAlign='center' >
         <Text
            color='green.500'
            fontWeight={800}
            fontSize='sm'
            letterSpacing={1.1}
            textAlign='center'
            >
            400% funded
          </Text>
          <Text color='gray.500'
            fontWeight={800}
            fontSize='sm'
            textAlign='center'

            letterSpacing={1.1}>
            10 days left
        </Text>
         </Flex>
          <Text color='gray.500'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum...
          </Text>
        </Stack>
        <Stack mt={6} direction="row" spacing={4} alignItems='center'  justifyContent="space-between">
            <Link href="projects/1">
            <Button variant='ghost' colorScheme='red'>Read more</Button>
            </Link>
        <Text fontWeight={600}>By Achim Rolle</Text>
        </Stack>
      </Box>
    </Center>
  );
}

export default ProjectCard;