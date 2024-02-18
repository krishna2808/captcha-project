import { useState, useContext } from "react";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { axiosInstance } from "../utils/fetchUtitls";
import { UserContext } from "../Contexts/UserContext";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function LoginPage() {
  const [popupOpen, setPopupOpen] = useState(false);
  const { setCurrentUserData } = useContext(UserContext);
  const [popupErrors, setPopupErrors] = useState({ type: "error", msg: null });
  const navigate = useNavigate();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setPopupOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const mobile_number = data.get("mobile_number");
    const password = data.get("password");
    debugger;
    if (mobile_number && password) {
      // in our JWT authentication when we login using phone_number and Password we get access & refresh tokens using which we will authenticate each request we send to server
      axiosInstance
        .post("/api/token/", {
          mobile_number,
          password,
        })
        .then((res) => {
          //  if all goes well then we will recieve new tokens for the user lets store them in localStorage
          localStorage.setItem("access_token", res.data.access);
          localStorage.setItem("refresh_token", res.data.refresh);
          // now axiosInstance is having old values in its headers , lets update them with new tokens
          axiosInstance.defaults.headers["Authorization"] =
            "JWT " + localStorage.getItem("access_token");
          setPopupErrors({ type: "success", msg: "Sigin successfully" });
          setPopupOpen(true);

          axiosInstance
            .get("api/user-details", {})
            .then((data) => {
              console.log({ "user-context-data-after login": data });
              setCurrentUserData(data);
            })
            .catch((error) => {
              if (error.response && error.response.status === 401) {
                // Handle 401 Unauthorized error
                console.log("Unauthorized: Redirect or show login page");
              }
            });

          navigate("/dashboard");
        })
        .catch((err) => {
          console.log(err.response.data);
          setPopupErrors({
            type: "error",
            msg: "Something went wrong, Please check the credentials!",
          });
          setPopupOpen(true);
        });
    } else {
      setPopupErrors({ type: "error", msg: "Enter ALL Required Fields" });
      setPopupOpen(true);
    }
  };
  console.log({ popupErrors });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        component="main"
        maxWidth="xs"
        className="login-main"
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Snackbar
            open={popupOpen}
            autoHideDuration={4000}
            onClose={handleClose}
            style={{
              position: "fixed",
              bottom: "100px", // Adjust the distance from the bottom as needed
              left: "50%",
              width:"80%",
              transform: "translateX(-50%)",
            }}
          >
            <Alert
              onClose={handleClose}
              severity={popupErrors.type ? popupErrors.type : "error"}
              variant="filled"
              sx={{ width: "100%" }}
            >
              {popupErrors.msg}
            </Alert>
          </Snackbar>

          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              type="tel"
              required
              fullWidth
              id="mobile_number"
              label="Phone Number"
              name="mobile_number"
              autoComplete="mobile_number"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2" className="login-links">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link href="/signup" variant="body2" className="login-links">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}
