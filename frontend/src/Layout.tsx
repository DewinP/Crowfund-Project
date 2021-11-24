import { Box } from '@mui/system';
import Navbar from './Navbar';


const Layout: React.FC<{}> = ({ children }) => {
    return (
      <Box>
        <Navbar/>
        <Box>{children}</Box>
      </Box>
    );
  };

  
  export default Layout;