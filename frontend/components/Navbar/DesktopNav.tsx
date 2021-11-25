import { Button } from "@chakra-ui/button"
import { Stack, } from "@chakra-ui/layout"
import React from "react"
import Link from 'next/link'
import { useRouter } from "next/router"


const DesktopNav: React.FC = () => {
    const router = useRouter()
  const pathName = router.pathname
    return(
        <Stack direction='row' spacing={4} alignItems='center'>
            <Link href="/projects" passHref>
            <Button  variant={pathName!== "/projects" ? 'ghost' : null }>
                Projects
            </Button>
            </Link>
            <Link href="/funded" passHref>
            <Button  variant={pathName!== "/funded" ? 'ghost' : null }>
                Funded
            </Button>
            </Link>
        </Stack>
    )

}

export default DesktopNav