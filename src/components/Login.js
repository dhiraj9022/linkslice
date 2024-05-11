import React, { useState } from "react";
import { TextField, Button, Container, Link as MuiLink } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Make a POST request to your login API
            const response = await axios.post("your_login_api_url", {
                email: email,
                password: password
            });
            console.log("Login successful:", response.data);

            // Show success message using SweetAlert2
            Swal.fire({
                icon: "success",
                title: "Login Successful",
                text: "You have successfully logged in.",
                confirmButtonText: "OK",
            });

            // Optionally, you can redirect the user to a different page after successful login
        } catch (error) {
            console.error("Login failed:", error);

            // Show error message using SweetAlert2
            Swal.fire({
                icon: "error",
                title: "Login Failed",
                text: "Invalid email or password. Please try again.",
                confirmButtonText: "OK",
            });

            // Handle login error (display error message, etc.)
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <div>
                <form onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3 }}
                    >
                        Login
                    </Button>
                    <MuiLink
                        component={Link}
                        to="/register"
                        variant="body2"
                        sx={{ display: 'block', textAlign: 'center', mt: 1 }}
                    >
                        Create New Account
                    </MuiLink>
                    <MuiLink
                        component={Link}
                        to="/forgot-password"
                        variant="body2"
                        sx={{ display: 'block', textAlign: 'center', mt: 1 }}
                    >
                        Forgot Password?
                    </MuiLink>
                </form>
            </div>
        </Container>
    );
}

export default Login;
