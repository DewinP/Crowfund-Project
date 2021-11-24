import { Box } from '@mui/system';


const Layout: React.FC<{}> = ({ children }) => {
    return (
      <Box p={8}>
        <Box>{children}</Box>
      </Box>
    );
  };

  
  export default Layout;