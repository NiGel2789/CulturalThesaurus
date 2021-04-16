import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Main from './Main';
import Sidebar from './Sidebar';
import fry from './fry.gif';
import Link from '@material-ui/core/Link';
import Footer from './Footer';
import Welcome from './2.jpg';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'

import "./landing.css"


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  title: {
    fontSize: 50
  },
  root: {
    minWidth: 100,
    maxWidth: 1000,
    margin: "auto",
    marginTop: "20px",
    fontFamily: "Playfair Display Bold', 'Playfair Display Regular', 'Playfair Display', sans-serif"
    
  }
}));

const sections = [
  { title: 'Browse', url: '#' },
  { title: 'Categories', url: '/categories' },
  { title: 'Random Word', url: '#' },
  { title: 'About', url: '/about' },
];
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffff8d',
      main: '#ffea00',
      contrastText: '#ffffff',
    },
  },
});
const sidebar = {
  title: 'Shesaurus Stats',
  description:
    'To date, the Cultural Thesaurus is home to over...',
  noOfWords:
    '3,432',
  noOfUsers:
    '1,096',
  contributeDesc:
    'Contribute to the Shesaurus community by adding to the Cultural Thesaurus!',
  social: [
    { name: 'Instgram', icon: InstagramIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function Blog() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return (
    
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" style = {{fontFamily: "Playfair Display Regular"}}>
        <Header title="CulturalThesaurus" sections={sections} />
        <main>
        <div  style={{ backgroundImage: "url(" + Welcome + ")",width: '1232px',height: '500px', paddingTop: '10px', paddingBottom:'20px', boxShadow: '5px 10px' }}> </div>
          <Grid container spacing={5} className={classes.mainGrid}>
            <div style={{width: '847px'}}>
          {/*Word of the Day Card*/}
          <ThemeProvider theme={theme}>
    <Card className={classes.root} variant="outlined" id="cardstyle" style={{marginBottom: '20px', borderRadius: '40px'}}>
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
      <CardActions style={{marginLeft: '15px',  marginBottom: '10px'}}>
              <Button size="small">Discover 'Sus'</Button>
              </CardActions>
    </Card>
    </ThemeProvider>
   
          {/*2nd Card*/}
          <ThemeProvider theme={theme}>
    <Card className={classes.root} variant="outlined" id="cardstyle" style={{marginBottom: '20px', borderRadius: '40px'}}>
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
      <CardActions style={{marginLeft: '15px',  marginBottom: '10px'}}>
              <Button size="small">Discover 'Sus'</Button>
              </CardActions>
    </Card>
    </ThemeProvider>

    {/*3rd Card*/}
    <ThemeProvider theme={theme}>
    <Card className={classes.root} variant="outlined" id="cardstyle" style={{marginBottom: '20px', borderRadius: '40px'}}>
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
      <CardActions style={{marginLeft: '15px',  marginBottom: '10px'}}>
         <Button size="small">Discover 'Sus'</Button>
      </CardActions>
    </Card>
    </ThemeProvider>
    
    </div>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              noOfWords={sidebar.noOfWords}
              noOfUsers={sidebar.noOfUsers}
              contributeDesc={sidebar.contributeDesc}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer description="Created by Mary, Rui, and Nigel. Always grateful for your guidance, Keshia!" />
    </React.Fragment>
  );
}