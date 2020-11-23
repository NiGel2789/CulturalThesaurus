import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Welcome from './2.jpg';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import lit from './lit.gif';
import sus from './sus.gif';
import bet from './bet.gif';


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Browse', url: '#' },
  { title: 'Categories', url: '#' },
  { title: 'Random Word', url: '#' },
  { title: 'About', url: '#' },
];

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
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="CulturalThesaurus" sections={sections} />
        <main>
        <div  style={{ backgroundImage: "url(" + Welcome + ")",width: '1232px',height: '500px', paddingTop: '10px', paddingBottom:'20px', boxShadow: '5px 10px' }}> </div>
          <Grid container spacing={5} className={classes.mainGrid}>
            <div style={{width: '847px'}}>
          {/*Word of the Day Card*/}
          <Card className={classes.root} variant="outlined" style={{marginBottom: '20px', borderRadius: '40px'}}>
            <CardContent style={{marginLeft: '15px', marginTop: '10px'}}>
             <Typography className={classes.title} color="textSecondary" gutterBottom>
                 Word of the Day
              </Typography>
              <Typography variant="h2" component="h2">
                 'Lit'
               </Typography>
              <Typography className={classes.pos} color="textSecondary">
                  adjective
              </Typography>
               <Typography variant="body1" fontSize component="p">
               used to describe something that is "exciting or 
                <br />
                  {'excellent."'}
               </Typography>
               <br></br>
               <br></br>
               <Typography variant="body1" fontSize component="p">
                  Also see: dank, ill, amazeballs
              </Typography>
               <img src={lit} alt="loading..." style={{ paddingTop: '30px', paddingBottom: '30px', display: 'block', marginLeft:'auto', marginRight: 'auto'}} />
               <Typography className={classes.pos} color="textSecondary">
                  Created by Nigel, last edited on 11/27/2020 by Mary. 
              </Typography>
             </CardContent>
             <CardActions style={{marginLeft: '15px',  marginBottom: '10px'}}>
              <Button size="small">Discover 'Lit'</Button>
              </CardActions>
          </Card>
   
          {/*2nd Card*/}
        <Card className={classes.root} variant="outlined" style={{marginBottom: '20px', borderRadius: '40px'}}>
            <CardContent style={{marginLeft: '15px', marginTop: '10px'}}>
              <Typography variant="h2" component="h2">
                 'Sus'
               </Typography>
              <Typography className={classes.pos} color="textSecondary">
                  adjective
              </Typography>
               <Typography variant="body1" fontSize component="p">
               used to describe someone that is acting suspiciously. 
                <br />
                  {'Made popular by the videogame "Among Us" .'}
               </Typography>
               <br></br>
               <br></br>
               <Typography variant="body1" fontSize component="p">
                    Also see: fishy, whack
              </Typography>
               <img src={sus} alt="loading..." style={{ minWidth: '380px', maxWidth: '380px', minHeight: '273px', maxHeight: '273px', paddingTop: '30px', paddingBottom: '30px', display: 'block', marginLeft:'auto', marginRight: 'auto'}} />
               <Typography className={classes.pos} color="textSecondary">
                      Created by Mary, last updated on 10/7/2020 by Keshia.
              </Typography>
         </CardContent>
      <CardActions style={{marginLeft: '15px',  marginBottom: '10px'}}>
        <Button size="small">Discover 'Sus'</Button>
      </CardActions>
    </Card>

    {/*3rd Card*/}
    <Card className={classes.root} variant="outlined" style={{marginBottom: '20px', borderRadius: '40px'}}>
            <CardContent style={{marginLeft: '15px', marginTop: '10px'}}>
              <Typography variant="h2" component="h2">
                   'Bet'
               </Typography>
              <Typography className={classes.pos} color="textSecondary">
                  Verb
              </Typography>
               <Typography variant="body1" fontSize component="p">
               used to confirm participation in a social event, 
                <br />
                  {'like a meetup.'}
               </Typography>
               <br></br>
               <br></br>
               <Typography variant="body1" fontSize component="p">
                   Also see: okay, fosho
              </Typography>
               <img src={bet} alt="loading..." style={{ minWidth: '380px', maxWidth: '380px', minHeight: '273px', maxHeight: '273px', paddingTop: '30px', paddingBottom: '30px', display: 'block', marginLeft:'auto', marginRight: 'auto'}} />
               <Typography className={classes.pos} color="textSecondary">
                        Created by Rui, last updated on 10/5/2020 by Nigel.
              </Typography>
         </CardContent>
      <CardActions style={{marginLeft: '15px',  marginBottom: '10px'}}>
        <Button size="small">Discover 'Bet'</Button>
      </CardActions>
    </Card>
    
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