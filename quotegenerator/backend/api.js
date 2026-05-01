const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8383;

app.use(cors());

app.get('/quotes', async (req, res) => {
    try {
        const response = await fetch('https://type.fit/api/quotes');
        const data = await response.json();

        res.json(data);
    } catch (error) {
        console.error(error); // 👈 ADD THIS
        res.status(500).json({ error: 'Failed to fetch quotes' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});