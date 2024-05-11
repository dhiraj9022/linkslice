// UpdatePassword.js
import React, { useState } from "react";
import { TextField, Button, Container } from "@mui/material";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function UpdatePassword() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    let navigate = useNavigate();
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleUpdatePassword = async () => {
        // Implement password update logic here
        console.log("Updating password:", password);

        // Simulate password update success
        // For real implementation, you would replace this with your actual logic
        const success = true;

        if (success) {
            Swal.fire({
                icon: "success",
                title: "Password Updated",
                text: "Your password has been successfully updated.",
                confirmButtonText: "OK",
            }).then(() => {
                // Redirect to login page after showing the success message
                navigate("/login");
            });
        } else {
            // Handle error case if password update fails
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password update failed. Please try again later.",
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
                        name="password"
                        label="New Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        id="confirmPassword"
                        autoComplete="new-password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleUpdatePassword}
                        sx={{ mt: 3 }}
                    >
                        Update Password
                    </Button>
                </form>
            </div>
        </Container>
    );
}

export default UpdatePassword;
