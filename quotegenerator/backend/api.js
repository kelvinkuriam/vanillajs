/******************************************************
 * 1. LOAD ENV VARIABLES
 ******************************************************/
require('dotenv').config();

/******************************************************
 * 2. IMPORT MODULES
 ******************************************************/
const express = require('express');
const cors = require('cors');

/******************************************************
 * 3. INIT APP
 ******************************************************/
const app = express();

/******************************************************
 * 4. PORT
 ******************************************************/
const PORT = process.env.PORT || 8383;

/******************************************************
 * 5. MIDDLEWARE
 ******************************************************/
app.use(cors());

/******************************************************
 * 6. ROUTE: GET /quotes
 ******************************************************/
app.get('/quotes', async (req, res) => {
    try {
        const response = await fetch('https://motivational-spark-api.vercel.app/api/quotes', {
            method: 'GET',
           
        });

        const data = await response.json();

        res.json(data);

    } catch (error) {
        console.error('ERROR FETCHING QUOTES:', error);

        res.status(500).json({
            error: 'Failed to fetch quotes'
        });
    }
});

/******************************************************
 * 7. START SERVER
 ******************************************************/
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});