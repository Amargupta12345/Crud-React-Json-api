import {Box , makeStyles , Typography} from   "@material-ui/core";
import mern1 from "../Assets/Images/mern.jpg";
import mern2 from "../Assets/Images/mern1.jpg";
import mern3 from "../Assets/Images/mern3.jpg";
import mern5 from "../Assets/Images/mern5.png";
import mern6 from "../Assets/Images/mern6.png";
import mern7 from "../Assets/Images/mern7.png";

const useStyles = makeStyles({
  image: {
    width: "80vw",
    height: "80vh",
    margin:'18px auto'
  }, 
  component :{
      margin: "1rem"
  }
 
});

const Main = () => {
     const classes = useStyles();
  return (
    <Box className={classes.component}>
      <Typography variant="h2" style={{ marginBottom: "50px" }}>
        Mern Stack Developer
      </Typography>
      <Box style={{ display: "flex", flexDirection: "column" }}>
        <img className={classes.image} src={mern5} />
        <img className={classes.image} src={mern6} />
        <img className={classes.image} src={mern7} />
        <img className={classes.image} src={mern2} />
        <img className={classes.image} src={mern3} />
        <img className={classes.image} src={mern1} />
      </Box>
    </Box>
  );
};

export default Main;
