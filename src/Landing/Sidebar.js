import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import dwayne from './dwayne.gif';

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  test: {
    fontSize: 15,
    fontStyle: 'bold',
  },
}));

export default function Sidebar(props) {
  const classes = useStyles();
  const { description, social, title, contributeDesc, noOfWords, noOfUsers } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
        <Typography variant="h4">{noOfWords} unique words,</Typography>
        <Typography variant="h4">{noOfUsers} editors</Typography>
        <Typography>and counting..</Typography>
      </Paper>
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Want to Contribute?
      </Typography>
      <Typography>{contributeDesc}</Typography>

      <img src={dwayne} alt="loading..." style={{ minWidth: '202px', maxWidth: '202px', minHeight: '163px', maxHeight: '163px', objectFit: 'cover', marginTop: '10px'}} />

      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Connect with us!
      </Typography>
      {social.map((network) => (
        <Link display="block" variant="body1" href="#" key={network}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
}

Sidebar.propTypes = {
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
  noOfWords: PropTypes.string,
  noOfUsers: PropTypes.string,
  contributeDesc: PropTypes.string,
};
