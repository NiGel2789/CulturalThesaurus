import React from 'react';
import ReactDOM from 'react-dom';
import "./card.css"
import { Form, Field } from 'react-final-form';
import { TextField, Select } from 'final-form-material-ui';
//import { GiphyFetch } from '@giphy/js-fetch-api'
import Footer from '../Landing/Footer';
import handleClick from './giphyapp.js';
import { GiphyFetch } from "@giphy/js-fetch-api";
import ReactGiphySearchbox from "react-giphy-searchbox";
// use @giphy/js-fetch-api to fetch gifs, instantiate with your api key


import {
  Typography,
  Paper,
  Grid,
  Button,
  CssBaseline,
  MenuItem,
  Container,
  
} from '@material-ui/core';
import { Gif } from '@material-ui/icons';



const onSubmit = async values => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
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

export default function createWord(){

    return (
        <div style={{ padding: 16, margin: 'auto', maxWidth: 600, borderRadius: "1px" }}>
          <CssBaseline />
          <Typography variant="h2" align="center" component="h1" gutterBottom style={{padding: "1%", fontFamily: "Playfair Display Regular"}}>
           Submit a Word
          </Typography>
          <Typography variant="h5" align="center" component="h2" gutterBottom style={{padding: "1%", fontFamily: "Playfair Display Regular"}}>
            There are no limits to what you can submit. 
          </Typography>
          <Typography paragraph>
          </Typography>
          <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit, reset, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit} noValidate>
                <Paper style={{ padding: 16 }}>
                  <Grid container alignItems="flex-start" spacing={2}>
                    <Grid item xs={12}>
                      <Field
                        fullWidth
                        required
                        name="Word"
                        component={TextField}
                        type="text"
                        label="Word"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        name="synonyms"
                        fullWidth
                        required
                        component={TextField}
                        type="synonyms"
                        label="Synonyms"
                      />
                    </Grid>
                    <Grid>
                      <Typography>
                        Defintion
                      </Typography>
                    </Grid>
                    
                    <Grid item xs={24}>
                      <Field
                        fullWidth
                        class = "definition"
                        name="defintion"
                        component={"textarea"}
                        multiline
                        label="Definition"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        fullWidth
                        name="WordType"
                        component={Select}
                        label="Type of Word"
                        formControlProps={{ fullWidth: true }}
                      >
                        <MenuItem value="Adjective">Adjective</MenuItem>
                        <MenuItem value="Adverb">Adverb</MenuItem>
                        <MenuItem value="Proverb">Proverb</MenuItem>
                        <MenuItem value="Verb">Verb</MenuItem>
                        <MenuItem value="Noun">Noun</MenuItem>
                        <MenuItem value="Pronoun">Pronoun</MenuItem>
                      </Field>
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        fullWidth
                        name="Category"
                        component={Select}
                        label="Category"
                        formControlProps={{ fullWidth: true }}
                      >
                        <MenuItem value="Slang">Slang</MenuItem>
                        <MenuItem value="Historical">Historical</MenuItem>
                        <MenuItem value="LGBTQ+Term">LGBTQ+ Term</MenuItem>
                        <MenuItem value="ForeignLanguage">Foreign Language</MenuItem>
                        <MenuItem value="Gaming">Gaming</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                      </Field>
                    </Grid>
                 
                    <Grid tem xs={24}> 
                
                      <div className="searchboxWrapper" style={{marginLeft: '25%'}}  >
                        <ReactGiphySearchbox
                          apiKey="UhFUfdL0oZHHh20DVt0ztFH6GbBYnZov"
                          onSelect={(item) => console.log(item)}
                          masonryConfig={[
                            { columns: 2, imageWidth: 200, gutter: 5 },
                            { mq: "700px", columns: 3, imageWidth: 120, gutter: 5 }
                          ]}
                        />
                      </div>
                      <footer>
                        <a
                          href="https://github.com/sergiop/react-giphy-searchbox"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                        </a>
                      </footer>
                    </Grid>
                      <Grid item xs={24}>
                        <Typography>Selected Gif:</Typography>
                        <div> 
                          <Gif gif={GiphyFetch(item)}> </Gif>
                        </div>
                      </Grid>
                     
                      <Typography style ={{marginTop:'10%', fontStyle:'bold'}}> Or, attach your own media:</Typography>
                      <input type='file' id="single" onChange ={submitting} style ={{marginTop:'8%'}}></input>
                    <Grid item style={{ marginTop: 16}}>

                      <Button
                        type="button"
                        variant="contained"
                        onClick={reset}
                        disabled={submitting || pristine}
                      >
                        Reset
                      </Button>
                    </Grid>
                    <Grid item style={{ marginTop: 16}}>
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={submitting}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                  <Footer description="Created by Mary, Rui, and Nigel. Always grateful for your guidance, Keshia!">
                
                </Footer>
                </Paper>
                <pre>{JSON.stringify(values, 0, 2)}</pre>
              </form>

            )}
          />
        </div>
      );
}