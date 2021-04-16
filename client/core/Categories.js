import React from 'react';
import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { Grid, Typography } from '@material-ui/core';
import Footer from './Footer';
const LinkBehavior = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} to="/getting-started/installation/" {...props} />
));

export default function LinkRouter() {
  return (
    <Grid>
    <Router>
      <div>
      <Typography variant="h2" align="center" component="h1" gutterBottom style={{padding: "1%", fontFamily: "Playfair Display Bold"}}>
          Categories
          </Typography>
          <Typography variant="h3" align="center" component="h1" gutterBottom style={{padding: "1%", fontFamily: "Playfair Display Bold", color: "pink", textDecorationLine: 'underline'}}>
          Anime
          </Typography>
        <Link component={RouterLink} to="/wordPage" style={{marginLeft: '10%', alignContent: 'center'}}>
          Baka
        </Link>
        
        <Link component={RouterLink} to="/wordPage" style={{marginLeft: '10%', alignContent: 'center'}}>
          Nani
        </Link>
        <Link component={RouterLink} to="/wordPage" style={{marginLeft: '10%', alignContent: 'center'}}>
          Senpai
        </Link>
        <Link component={RouterLink} to="/wordPage" style={{marginLeft: '10%', alignContent: 'center'}}>
          Sugoi
        </Link>
        <Typography variant="h3" align="center" component="h1" gutterBottom style={{padding: "1%", fontFamily: "Playfair Display Bold", color: "navy", textDecorationLine: 'underline' }}>
          British
          </Typography>
          <Link component={RouterLink} to="/wordPage" style={{marginLeft: '10%', alignContent: 'center'}}>
          Ello'
        </Link> 
          
        <Link component={RouterLink} to="/wordPage" style={{marginLeft: '10%', alignContent: 'center'}}>
          Fish n' Chips
        </Link>
        <Link component={RouterLink} to="/wordPage" style={{marginLeft: '10%', alignContent: 'center'}}>
          Cheerio!
        </Link>
      </div>
    </Router>
    <Footer description="Created by Mary, Rui, and Nigel. Always grateful for your guidance, Keshia!"></Footer>
    </Grid>
  );
}