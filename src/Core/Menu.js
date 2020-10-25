import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {Link, withRouter} from 'react-router-dom'


const Menu = withRouter(({history}) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" color="inherit">
        Cultural Thesaurus
      </Typography>
      <div>

        <Link to="/home">
          <Button >Home</Button>
        </Link>
        <Link to="/signin">
          <Button >Sign In</Button>
        </Link>

        <Link to="/signup">
          <Button >Sign Up</Button>
        </Link>

        <Link to="/user">
          <Button >
            User
          </Button>
        </Link>    

        <Link to="/about">
          <Button >
            About
          </Button>
        </Link>      

        <Link to="/createword">
          <Button >
            Create Word
          </Button>
        </Link>  

        <Link to="/readword">
          <Button >
            Read Word
          </Button>
        </Link>  

        <Link to="/updateword">
          <Button >
            Update Word
          </Button>
        </Link>  

        <Link to="/deleteword">
          <Button >
            Delete Word
          </Button>
        </Link>  

      </div>
      

    </Toolbar>
  </AppBar>
))

export default Menu
