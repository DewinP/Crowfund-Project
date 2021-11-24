import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import Navbar from './Navbar';


const Layout: React.FC<{}> = ({ children }) => {
    return (
      <Box>
        <Navbar/>
        <Box  sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mx: 'auto',
      }} >
        {children}
        </Box>
      </Box>
    );
  };

  
  export default Layout;