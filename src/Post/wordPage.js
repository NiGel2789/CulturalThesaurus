import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 100,
    maxWidth: 500,
    margin: "auto",
    
  },
  title: {
    fontSize: 30
  },
  pos: {
    marginBottom: 12
  },
  media: {
    backgroundImage: URL("fry.gif")
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
    <Card className={classes.root} variant="outlined" >
      <CardContent>
        <Typography className={classes.title} variant="h5" component="h2">
          Sus
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          Short for suspicous.
          <br />
          {'"That player is so Sus"'}
        </Typography>
        <br />
        <Typography component="href">
          {'Suspcious, oddball, weird.'}
        </Typography>
        <div className={classes.media} ></div>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" >Delete</Button>
      </CardActions>
    </Card>
    </ThemeProvider>
  );
}
