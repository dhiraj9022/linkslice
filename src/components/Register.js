import React, { useState } from "react";
import { TextField, Button, Container } from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";

function Register() {
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
            // Make a POST request to your registration API
            const response = await axios.post("your_registration_api_url", {
                email: email,
                password: password
            });
            console.log("Registration successful:", response.data);
            
            // Show success message using SweetAlert2
            Swal.fire({
                icon: "success",
                title: "Registration Successful",
                text: "You have successfully registered.",
                confirmButtonText: "OK",
            });

            // Optionally, you can redirect the user to a different page after successful registration
        } catch (error) {
            console.error("Registration failed:", error);
            
            // Show error message using SweetAlert2
            Swal.fire({
                icon: "error",
                title: "Registration Failed",
                text: "Registration failed. Please try again later.",
                confirmButtonText: "OK",
            });

            // Handle registration error (display error message, etc.)
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
                        Register
                    </Button>
                </form>
            </div>
        </Container>
    );
}

export default Register;
