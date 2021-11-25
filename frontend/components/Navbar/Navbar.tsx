import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
import { useDisclosure, IconButton, Button, Collapse } from "@chakra-ui/react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import React from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import Link from 'next/link'

const Navbar:React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();
  
  return (
    <Box>
      <Flex
        minH="60px"
        align='center'>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <AiOutlineClose  /> : <AiOutlineMenu />
            }
            variant='ghost'
            aria-label='Toggle Navigation'
          />
        </Flex>
        <Flex flex={{ base: 1 }} alignItems='center' justify={{ base: 'center', md: 'start' }}>
          <Text fontWeight='bold' fontSize={{base: 'md', md:'lg'}} textAlign={{base:'center', md:'left'}}>
             Crowfund
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }}  ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Link href="/login">
          <Button
            as={'a'}
            fontSize="sm"
            fontWeight={400}
            colorScheme='teal'
            href="#">
            Login
          </Button>
          </Link>
          <Link href="/signup">
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'pink.400'}
            href={'#'}
            _hover={{
              bg: 'pink.300',
            }}>
            Sign Up
          </Button>
          </Link>
        </Stack>
      </Flex>

      <Collapse in={isOpen}  animateOpacity>
        <Stack display={{ md: 'none' }}>
          <MobileNav />
        </Stack>
      </Collapse>
    </Box>
  )
}


export default Navbar;