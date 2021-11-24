import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useAppSelector } from '../app/hooks';
import { selectCurrentUser } from '../app/services/Auth.slice';
import Link from 'next/link'


const Navbar: React.FC = () => {
    let { user, isLoggedIn } = useAppSelector(selectCurrentUser);
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Crowfund
            </Typography>
            <Link href="/signup">
            <Button color="inherit">Signup</Button>
            </Link>
            <Link href="/login">
            <Button color="inherit">Login</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    );
  };
  
  export default Navbar;