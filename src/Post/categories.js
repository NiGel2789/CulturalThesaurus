import React from 'react';
import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { Typography } from '@material-ui/core';
import "./categories.css"
const LinkBehavior = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} to="/getting-started/installation/" {...props} />
));

export default function LinkRouter() {
  return (
    <Router>
      <div>
      <Typography variant="h2" align="center" component="h1" gutterBottom style={{padding: "1%", fontFamily: "Playfair Display Bold"}}>
          Categories
          </Typography>
          <Typography variant="h3" align="left" component="h1" gutterBottom style={{padding: "1%", fontFamily: "Playfair Display Bold", color: "navy", marginLeft: '10%'}}>
          A
          </Typography>
        <Link component={RouterLink} to="/wordPage" style={{marginLeft: '10%'}}>
          Anime
        </Link>
        <br></br>
        <Link component={RouterLink} to="/wordPage" style={{marginLeft: '10%'}}>
          Ally
        </Link>
        <br ></br>
      </div>
    </Router>
  );
}