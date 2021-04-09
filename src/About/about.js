import { Grid, Typography } from '@material-ui/core'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import "./about.css"
import Footer from '../Landing/Footer';

export default function About(){

    return (
        <Grid>
        <Paper varient= 'outlined' style= {{marginTop: '5%', marginLeft: '10%', marginRight: '10%', minWidth: '100', maxWidth: '500', backgroundColor: 'yellow'}}>
             <Typography variant='p' component= 'h1' align='center' style = {{marginTop: '5%'}}>
            About Cultural Thesaurus
            </Typography>
            <Typography variant="p" component="h2" style={{padding: '5%'}}>
            The Cultural Thesaurus Project for the CSE 485 Capstone at Arizona State University. 
            This project is sponsored/contracted by Shesaurus Labs LLC.
            </Typography>
    
        </Paper>
        <Footer description="Created by Mary, Rui, and Nigel. Always grateful for your guidance, Keshia!">
                
        </Footer>
        </Grid>
    )
}