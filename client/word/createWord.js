import React, {useState} from 'react';
import ReactDOM from 'react-dom';
//import ReactGiphySearchbox from "react-giphy-searchbox";
import Footer from '../core/Footer';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Header from '../core/Header_Dark';
import bground from '../assets/images/ctBground.png';
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Sidebar from '../core/Sidebar';
import { GiphyFetch } from "@giphy/js-fetch-api";
import { Gif } from '@giphy/react-components'
import { useAsync } from "react-async-hook";
import Picker from 'react-giphy-component'
// use @giphy/js-fetch-api to fetch gifs, instantiate with your api key


import {
  Typography,
  Paper,
  Grid,
  Button,
  CssBaseline,
  MenuItem,
  Container,
  Select,
  TextField,
  
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  }
}));

const onSubmit = async values => {
};

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  }
  return errors;
};

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
    { name: 'Instagram', icon: InstagramIcon, link: 'https://www.instagram.com/culturalthesaurus' },
    { name: 'Twitter', icon: TwitterIcon, link: 'https://twitter.com/culturalthesaur'},
    { name: 'Facebook', icon: FacebookIcon, link: 'https://facebook.com'},
  ],
};

export default function createWord(){
  const classes = useStyles();  

  const [values, setValues] = useState({
    gifID: ''
  })

  /*
  const handleChange = gifID => event => {
    setValues({ ...values, [gifID]: event.target.value })
    console.log(gifID)
  }*/

    return (
      <React.Fragment>
        <CssBaseline />
        <div style={{backgroundImage: "url(" + bground + ")"}}>
        <Container maxWidth="lg">
        <Header title="CulturalThesaurus" />
          <main>
            <Grid container spacing={5} className={classes.mainGrid}>
                <div style={{width: '847px'}}>

              <Card className={classes.root} variant="outlined" style={{marginBottom: '20px', borderRadius: '40px', borderWidth: '3px', borderColor: '#fff952'}}>
                <CardContent style={{marginLeft: '15px', marginTop: '10px'}}>
                <Typography className={classes.title} gutterBottom variant="h3" component="h3" style={{ fontWeight: 600 , textDecoration: "yellow underline"}}>
                    Submit a Word!
                  </Typography>
                  </CardContent>
                <Typography variant="h5" align="center" component="h2" color='textSecondary' gutterBottom style={{padding: "1%", fontFamily: "Playfair Display Regular"}}>
                  " There are no limits to what you can submit. "
                </Typography>

                  <form noValidate>
                    <Paper style={{ padding: 16 }}>
                      <Grid container alignItems="flex-start" spacing={2}>

                    <Grid item xs={12}>
                      <TextField
                          className={classes.root}
                          autoComplete="word"
                          name="Word"
                          variant="outlined"
                          required
                          fullWidth
                          id="word"
                          label="Word"
                          autoFocus
                          color="secondary"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            className={classes.root}
                            autoComplete="Synonyms"
                            name="Synonyms"
                            variant="outlined"
                            required
                            fullWidth
                            id="synonyms"
                            label="Synonyms"
                            autoFocus
                            color="secondary"
                          />  

                          <br></br>

                          <Typography variant="body2" marginTop="5px">
                        Example (separated by commas): wow, amazing, cool
                           </Typography>
                    </Grid>
                    
                    <Grid item xs={12}>
                    <TextField
                            className={classes.root}
                            autoComplete="Definitions"
                            name="Definitions"
                            variant="outlined"
                            required
                            fullWidth
                            id="definitions"
                            label="Definitions"
                            autoFocus
                            color="secondary"
                          />  
                    </Grid>

                    <Grid item xs={12}>
                      <Select
                        fullWidth
                        name="WordType"
                        label="Type of Word"
                        formControlProps={{ fullWidth: true }}
                        variant="outlined"
                        color="secondary"
                        required
                      >
                        <MenuItem value="" disabled>
                           Type of Word
                        </MenuItem>
                        <MenuItem value="Adjective">Adjective</MenuItem>
                        <MenuItem value="Adverb">Adverb</MenuItem>
                        <MenuItem value="Proverb">Proverb</MenuItem>
                        <MenuItem value="Verb">Verb</MenuItem>
                        <MenuItem value="Noun">Noun</MenuItem>
                        <MenuItem value="Pronoun">Pronoun</MenuItem>
                      </Select>
                    </Grid>

                    <Grid item xs={12}>
                      <Select
                        fullWidth
                        name="Category"
                        label="Category"
                        formControlProps={{ fullWidth: true }}
                        variant="outlined"
                        color="secondary"
                        required
                      >
                        <MenuItem value="" disabled>
                           Category
                        </MenuItem>
                        <MenuItem value="Slang">Slang</MenuItem>
                        <MenuItem value="Historical">Historical</MenuItem>
                        <MenuItem value="LGBTQ+Term">LGBTQ+ Term</MenuItem>
                        <MenuItem value="ForeignLanguage">Foreign Language</MenuItem>
                        <MenuItem value="Gaming">Gaming</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                      </Select>
                    </Grid>
                 
                    <Grid item xs={12}> 
                      <TextField
                            className={classes.root}
                            autoComplete="gifID"
                            name="gifID"
                            variant="outlined"
                            required
                            fullWidth
                            id="gifID"
                            label="Giphy Link"
                            autoFocus
                            value={values.gifID}
                            color="secondary"
                          />  

                      <br></br>
                      <Typography variant="body2" marginTop="5px">
                        Example: https://media.giphy.com/media/26ufcQNzm5YwuNxja/giphy.gif
                      </Typography>

                        {/*<Picker onSelected={(item) => console.log(JSON.parse(JSON.stringify(item)))}/>

                        {<ReactGiphySearchbox
                          apiKey="UhFUfdL0oZHHh20DVt0ztFH6GbBYnZov"
                          onSelect={(item) => console.log(item)}
                          masonryConfig={[
                            { columns: 2, imageWidth: 200, gutter: 5 },
                            { mq: "700px", columns: 3, imageWidth: 120, gutter: 5 }
                          ]}
                        />*/}
                    </Grid>

                    <Grid item style={{ marginTop: 16, marginLeft: '70%'}}>
                      <Button
                        type="button"
                        variant="contained"
                      >
                        Reset
                      </Button>
                    </Grid>
                    <Grid item style={{ marginTop: 16}}>
                      <Button
                        variant="contained"
                        color="secondary"
                        type="submit"
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                
                </Paper>
              </form>
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
      </div>
    </React.Fragment>
  );
}