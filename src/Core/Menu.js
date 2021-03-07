import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {Link, withRouter} from 'react-router-dom'
import "./core.css"
import CulturalThesaurus from "./CulturalThesaurusbig.png"
import { NoEncryption } from '@material-ui/icons'

const Menu = withRouter(({history}) => (
  <AppBar position="static">
    <Toolbar id = 'navBar'>
      {/* <Typography variant="h6" color="inherit">
        Cultural Thesaurus
      </Typography> */}
       <Link to="/landing">
       <img src={CulturalThesaurus} alt="Home" style={{ display: 'block', marginLeft:'auto', marginRight: 'auto', width: '200px', padding: '0'}} />
        </Link>
      
      <div>

        <Link to="/signin">
          <Button style ={{marginLeft: "20px", fontSize: "150%", backgroundColor: "yellow"}}>Sign In</Button>
        </Link>

        <Link to="/signup">
          <Button style ={{marginLeft: "20px", fontSize: "150%", backgroundColor: "yellow"}}>Sign Up</Button>
        </Link>

        <Link to="/user">
          <Button style ={{marginLeft: "20px", fontSize: "150%", backgroundColor: "yellow"}}>
            User
          </Button>
        </Link>    

        <Link to="/about">
          <Button style ={{marginLeft: "20px", fontSize: "150%", backgroundColor: "yellow"}}>
            About
          </Button>
        </Link>      

        <Link to="/createword">
          <Button style ={{marginLeft: "20px", fontSize: "150%", backgroundColor: "yellow"}}>
            Create Word
          </Button>
        </Link>  

        <Link to="/wordpage">
          <Button style ={{marginLeft: "20px", fontSize: "150%", backgroundColor: "yellow"}}>
            Random Word
          </Button>
        </Link>

      </div>
      

    </Toolbar>
  </AppBar>
))

export default Menu
