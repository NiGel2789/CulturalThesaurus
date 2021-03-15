import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import fry from './fry.gif';
import Link from '@material-ui/core/Link';
import "./card.css"
const useStyles = makeStyles({
  root: {
    minWidth: 100,
    maxWidth: 500,
    margin: "auto",
    marginTop: "20px"
  },
  title: {
    fontSize: 50
  },
  pos: {
    marginBottom: 12
  },
  media: {
  }
});
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffff8d',
      main: '#ffea00',
      contrastText: '#ffffff',
    },
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  //const bull = <span className={classes.bullet}>•</span>;

  return (
    <ThemeProvider theme={theme}>
    <Card className={classes.root} variant="outlined" id="cardstyle">
      <CardContent>
        <Typography className={classes.title} variant="h5" component="h1">
          'Sus'
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography className={classes.pos} style = {{color: "blue"}}>
          Gamer-Lingo
        </Typography>
        <Typography variant="body2" component="h2">
          Short for suspicous.
          <br />
          {'"That player is so Sus"'}
        </Typography>
        <br />
        <Typography component="href">
          {'Suspcious, oddball, weird.'}
        </Typography>
        <img src={fry} alt="loading..." style={{ paddingTop: '30px', paddingBottom: '30px', display: 'block', marginLeft:'auto', marginRight: 'auto'}} />
        <Typography className={classes.pos}>
          Created by Nigel, last edited on 11/27/2020 by Mary. 
        </Typography>
        <Typography> Similar to... <br></br>
        <Link href = "#" onClick={preventDefault} color="blue"> Suspicous </Link>,
        <Link href = "#" onClick={preventDefault} color="blue"> Scary </Link>
        </Typography>
        
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
    </ThemeProvider>
  );
}
