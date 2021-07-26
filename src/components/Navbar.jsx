import  {AppBar , Toolbar ,makeStyles ,Typography} from "@material-ui/core";
import {NavLink} from "react-router-dom";
const useStyles = makeStyles({
    header :{
        background : '#111111'
    },
    tabs:{
        color:"#ffffff",
        textDecoration:'none',
        padding:"6px"

    }
} );

const Navbar = () => {
    const classes = useStyles();
    return (
      <>
        <AppBar className={classes.header} position="static">
          <Toolbar>
            <NavLink className={classes.tabs} to="./" exact>
          Dashboard
            </NavLink>
            <NavLink className={classes.tabs} to="./add" exact>
              Add Users
            </NavLink>
            <NavLink className={classes.tabs} to="./all" exact>
              All Users
            </NavLink>
          </Toolbar>
        </AppBar>
      </>
    );
}

export default Navbar
