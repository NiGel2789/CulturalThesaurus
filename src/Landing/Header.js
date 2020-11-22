import React from 'react';
//import View from "react-native";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Logo from './1.png';
import SearchBar from "material-ui-search-bar";

// <Button size="small">Subscribe</Button>
const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingTop: 10,
    paddingBottom: 20,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  RoundedSearch: {
    marginLeft: 500,
  },
  userIcon: {
    marginLeft: 150,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <img src={Logo} height={80} width={220}/> 
        <SearchBar className={classes.search}
          placeholder={"Search the world.."}
          style={{
            margin: '0 auto',
            minWidth: 500,
            maxWidth: 800,
            marginLeft: 300,
          }}
        />
        <IconButton className={classes.userIcon}>
          <AccountCircleRoundedIcon />
        </IconButton> 
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};