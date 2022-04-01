import {
  Button
} from '@material-ui/core';
import './../Styles/Navbar.css';

const NavBar = () => {

  return(
    <div className='Navbar'>
      <h1 className='NavbarTitle'>
        Client Users List
      </h1>
      <div className='NavbarButtons'>
        <Button
          variant='contained'
          color='secondary'
          href='/'
        >
          Home
        </Button>
        <Button
            variant='contained'
            color='primary'
            href='/create'
          >
            New User
        </Button>
      </div>
    </div>
  );
};

export default NavBar;