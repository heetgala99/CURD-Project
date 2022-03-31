import {
  Grid
} from '@material-ui/core';

const NavBar = () => {

  return(
    <div>
      <Grid
        alignContent="space-between"
        direction="column"
      >
        <Grid>Hello</Grid>
        <Grid>There</Grid>
      </Grid>
    </div>
  );
};

export default NavBar;