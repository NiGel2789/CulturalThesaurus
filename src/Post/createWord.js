import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from 'react-final-form';
import { TextField, Select } from 'final-form-material-ui';
import {
  Typography,
  Paper,
  Grid,
  Button,
  CssBaseline,
  MenuItem,
  
} from '@material-ui/core';
// Picker



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

function App() {
  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
      <CssBaseline />
      <Typography variant="h4" align="center" component="h1" gutterBottom>
       Submit a Word
      </Typography>
      <Typography variant="h5" align="center" component="h2" gutterBottom>
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
                  <Grid item xs={6}>
                    
                  </Grid>
              
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    type="button"
                    variant="contained"
                    onClick={reset}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </Button>
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
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
            </Paper>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
