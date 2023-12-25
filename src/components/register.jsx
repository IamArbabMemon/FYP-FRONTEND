import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom';



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  // const [signupError, setSignupError] = React.useState(null);

  const navigate = useNavigate();


  const handleError = (err)=>{

    toast.error(err, {
      position: "bottom-left",
    })
  }


  const handleSuccess = (msg)=>{

    toast.success("Account has been successfully created", {
      position: toast.POSITION.TOP_CENTER
  })

  console.log(`handle succesful` ,msg)
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
  
    try {
      const response = await fetch('http://localhost:3000/user/signUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.get('Username'),
          email: formData.get('email'),
          businessName: formData.get('Buisness_Name'),
          address: formData.get('adress'),
          accountType: formData.get('account_type'),
          accountNumber: formData.get('accountNumber'),
          mobileNumber: formData.get('mobileNumber'),
          password: formData.get('password'),
        }),
      });
  
      // Check if response is successful (HTTP status 200-299)
      if (response.ok) {
        const responseData = await response.json(); // Parse JSON data from response

  console.log(`dataa==>` ,responseData)
        // Extract necessary data from responseData
        var { success, message } = responseData;
  
        if (message) {
          // Handle success message and redirection
          handleSuccess(message);
            navigate('/SignIn');
        
        } else {
          // Handle unsuccessful sign-up
          handleError(message);
        }
      } else {
        // Handle non-successful response status
        throw new Error('Sign Up Failed');
      }
    } catch (error) {
      // Handle fetch error or other exceptions
      handleError(message);
      console.error('Sign Up Error:', error);
    }
  };
  
 
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
                 
                 <ToastContainer />

          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign up
          </Typography>


          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
              
                  autoComplete="Username-name"
                  name="Username"
                  required
                  fullWidth
                  id="Username"
                  label="Username"
                  autoFocus
                />
              </Grid>
           
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  type='email'
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Buisness_Name"
                  label="Buisness Name"
                  name="Buisness_Name"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="adress"
                  label="Adress"
                  name="adress"
                  autoComplete="adress"
                  type='text'
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="account_type"
                  label="Account Type"
                  name="account_type"
                  autoComplete="account_type"
                  type='text'

                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="accountNumber"
                  label="Account Number"
                  type='number'
                  name="accountNumber"
                  autoComplete="accountNumber"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="mobileNumber"
                  label="Mobile Number"
                  type='number'
                  name="mobileNumber"
                  autoComplete="mobileNumber"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
           

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/SignIn" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}