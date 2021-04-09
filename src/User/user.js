import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import fry from "./fry.gif"
import Footer from '../Landing/Footer';
import { Grid } from "@material-ui/core";
import "./card.css"

import { yellow } from "@material-ui/core/colors";
const useStyles = makeStyles({
  root: {
    minWidth: 100,
    maxWidth: 500,
    margin: "auto",
    marginTop: "20px",
    fontFamily: "Playfair Display Regular"
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
  //const bull = <span className={classes.bullet}>•</span>;

  return (
    
    <ThemeProvider theme={theme}>
      <Grid>
       <Typography variant="h2" align="center" component="h1" gutterBottom style={{padding: "1%", fontFamily: "Playfair Display Regular"}}>
          Your Posts
          </Typography>
    <Card className={classes.root} variant="outlined" id="cardstyle">
      <CardContent>
        <Typography className={classes.title} variant="h5" component="h1">
          'Sus'
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="h2">
          Short for suspicous.
          <br />
          {'"That player is so Sus"'}
        </Typography>
        <Button size='xsmall' style={{backgroundColor: "yellow"}}>Edit</Button>
        <br />
        <Typography component="href">
          {'Suspcious, oddball, weird.'}
        </Typography>
        <Button size='xsmall' style={{backgroundColor: "yellow"}}>Edit</Button>
        <img src={fry} alt="loading..." style={{ paddingTop: '30px', paddingBottom: '30px', display: 'block', marginLeft:'auto', marginRight: 'auto'}} />
        <Button size='xsmall' style={{backgroundColor: "yellow"}}>Edit</Button>
        <Typography className={classes.pos}>
          Created by Nigel, last edited on 11/27/2020 by Mary. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" >Delete</Button>
      </CardActions>
    </Card>
    <Footer description="Created by Mary, Rui, and Nigel. Always grateful for your guidance, Keshia!">
                
    </Footer>
    </Grid>
    </ThemeProvider>
  );
}
