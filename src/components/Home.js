import React, {useState} from 'react';
import { Button, CircularProgress } from '@mui/material';
import './Home.css';
import { useNavigate } from "react-router-dom";

function Home(){

    const [loading, setLoading] = useState(false);
    let navigate = useNavigate();

    const handleGetStarted = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate('/AddUrl'); 
        }, 2000);
    };

    return(
        <div className="home-container">
            <h2>Welcome to link-slice app</h2>
            <Button variant="outlined" style={{ width: '25%' }} onClick={handleGetStarted} disabled={loading}>
             {loading ? <CircularProgress size={30} color="inherit" /> : 'Get Started'}
            </Button>
        </div>
        
    );
}

export default Home;
