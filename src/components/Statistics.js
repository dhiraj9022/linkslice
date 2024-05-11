import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

function Statistics() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('your_api_endpoint_here');
            setData(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            // If API fails, set dummy data
            const dummyData = [
                { id: 1, longUrl: 'http://longurl.com/example', shortUrl: 'http://short.url/ex', clicks: 100 },
                { id: 2, longUrl: 'http://longurl.com/another', shortUrl: 'http://short.url/another', clicks: 50 },
            ];
            setData(dummyData);
            setLoading(false);
        }
    };

    const handleRedirect = (url) => {
        window.location.href = url;
    };

    return (
        <div style={{ margin: '20px', padding: '20px' }}>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Long URL</TableCell>
                                <TableCell>Short URL</TableCell>
                                <TableCell>No. of Clicks</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.longUrl}</TableCell>
                                    <TableCell>{row.shortUrl}</TableCell>
                                    <TableCell>{row.clicks}</TableCell>
                                    <TableCell>
                                        <Button variant="contained" onClick={() => handleRedirect(row.longUrl)}>Redirect</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </div>
    );
}

export default Statistics;
