import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';




const defaultTheme = createTheme();

export default function SignIn() {
  const [user, setUser] = useState('');
  const [room, setRoom] = useState('');

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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form >
            <Box sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Username"
                name="name"
                onChange={(e) => setUser(e.target.value)}


              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="room"
                label="Room ID"
                type="number"
                onChange={(e) => setRoom(e.target.value)}

              />

              <Link to={`/chat?name= ${user}&room=${room}`}>
                <Button onClick={(e) => (!user || !room) ? e.preventDefault() : null}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button></Link>




            </Box>
          </form>
        </Box>

      </Container>
    </ThemeProvider>
  );
}