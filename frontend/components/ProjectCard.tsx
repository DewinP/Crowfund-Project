import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import React from 'react';

const ProjectCard = ()=> {
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            Boost your conversion rate wawa wa fj ff wq f
          </Heading>
         <Stack flexDir="row" justifyContent='space-between' alignItems='center'>
         <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            400% funded
          </Text>
          
          <Text color={'gray.500'} fontWeight='bold'>10 says left</Text>
         </Stack>
          <Text color={'gray.500'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum...
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'} justifyContent='space-between'>
            <Button variant='link'>Read more</Button>
        <Text fontWeight={600}>By Achim Rolle</Text>
        </Stack>
      </Box>
    </Center>
  );
}

export default ProjectCard;