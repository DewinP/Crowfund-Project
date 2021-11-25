import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'



interface CustomLinkProps {
    href:string;
}

const CustomLink:React.FC<CustomLinkProps> = ({ children,href, ...props }) => (
    <NextLink href={href} {...props} passHref>
    <Link>{children}</Link>
    </NextLink>
)

export default CustomLink