import React, { useState } from "react";
import { TextField, Button, Container } from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";

function AddUrl() {
    const [longUrl, setLongUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");

    const handleLongUrlChange = (event) => {
        setLongUrl(event.target.value);
    };

    const handleShortenUrl = async () => {
        try {
            // Make a request to your URL shortening API
            const response = await axios.post("your_shorten_url_api_endpoint", {
                longUrl: longUrl
            });
            // Assuming the response contains a shortened URL field
            if (response.data && response.data.shortUrl) {
                setShortUrl(response.data.shortUrl);
                // Show success message using SweetAlert2
                Swal.fire({
                    icon: "success",
                    title: "URL Shortened",
                    text: "Your URL has been successfully shortened.",
                    confirmButtonText: "OK",
                });
            }
        } catch (error) {
            console.error("Error shortening URL:", error);
            // Show error message using SweetAlert2
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Failed to shorten URL. Please try again.",
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
                        id="longUrl"
                        label="Long URL"
                        name="longUrl"
                        autoComplete="off"
                        autoFocus
                        value={longUrl}
                        onChange={handleLongUrlChange}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleShortenUrl}
                    >
                        Shorten URL
                    </Button>
                </form>
                {shortUrl && (
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="shortUrl"
                        label="Shortened URL"
                        name="shortUrl"
                        autoComplete="off"
                        value={shortUrl}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                )}
            </div>
        </Container>
    );
}

export default AddUrl;
