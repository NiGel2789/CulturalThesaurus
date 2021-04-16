import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import fry from '../assets/images/fry.gif';

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
  },

  cardstyle: {
    borderColor: "grey",
    borderStyle: "dashed",
    borderRadius: "20px",
    fontFamily:"'Times New Roman', 'Times', 'serif'",
    fontWeight: "bold",
  },

  definition: {
    width: "200%",
    height: "150px",
    padding: "12px 20px",
    boxSizing: "border-box",
    border: "2px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "#f8f8f8",
    resize: "none",
  },

  single: {
    color:"black",
    padding: "16px 32px",
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
      </CardContent>
      <CardActions>
        <Button size="small" >Delete</Button>
      </CardActions>
    </Card>
    </ThemeProvider>
  );
}
