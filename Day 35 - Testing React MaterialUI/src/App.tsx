import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  TextField,
  makeStyles,
  ThemeProvider,
  createMuiTheme,
  Typography,
  Container,
  Paper,
  Grid,
} from "@material-ui/core";
import { Save, DeleteOutline } from "@material-ui/icons";
import { blue, green, orange } from "@material-ui/core/colors";

import "fontsource-roboto";

import "./app.css";

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: 60,
    },
  },
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: blue[300],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <div>
          <Grid container spacing={4} justify="center">
            <Grid item>
              <Paper style={{ height: 100, width: 100 }} />
            </Grid>

            <Grid item>
              <Paper style={{ height: 100, width: 100 }} />
            </Grid>

            <Grid item>
              <Paper style={{ height: 100, width: 100 }} />
            </Grid>
          </Grid>
          <Typography variant="h1">Welcome</Typography>
          <ButtonStyled />
          <TextField
            variant="filled"
            color="secondary"
            type="email"
            label="Email"
            placeholder="example@example.com"
          />
          <CheckboxExample />
          <ButtonGroup variant="contained">
            <Button startIcon={<Save />} href="#" color="primary" size="large">
              Save
            </Button>
            <Button
              startIcon={<DeleteOutline />}
              href="#"
              color="secondary"
              size="large"
            >
              Discard
            </Button>
          </ButtonGroup>
        </div>
      </Container>
    </ThemeProvider>
  );
}

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #121212, #151616)",
    border: 0,
    borderRadius: 10,
    color: "white",
    padding: "10px 30px",
  },
});

function ButtonStyled() {
  const classes = useStyles();

  return <Button className={classes.root}>Test styles</Button>;
}

function CheckboxExample() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            icon={<Save />}
            checkedIcon={<DeleteOutline />}
            inputProps={{
              "aria-label": "secondary checkbox",
            }}
          />
        }
        label="checkbox"
      />
    </div>
  );
}

export default App;
