import React, { useState } from "react";
import { TextField, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleVerifyEmail = async () => {
        try {
            // Implement email verification logic here
            console.log("Verifying email:", email);
            // Redirect to UpdatePassword page upon successful verification
            navigate("/update-password");

            // Show success message using SweetAlert2
            Swal.fire({
                icon: "success",
                title: "Email Verified",
                text: "Email verification successful.",
                confirmButtonText: "OK",
            });
        } catch (error) {
            console.error("Email verification failed:", error);

            // Show error message using SweetAlert2
            Swal.fire({
                icon: "error",
                title: "Email Verification Failed",
                text: "Failed to verify email. Please try again.",
                confirmButtonText: "OK",
            });
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <div>
                <form>
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
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleVerifyEmail}
                        sx={{ mt: 3 }}
                    >
                        Verify Email
                    </Button>
                </form>
            </div>
        </Container>
    );
}

export default ForgotPassword;
