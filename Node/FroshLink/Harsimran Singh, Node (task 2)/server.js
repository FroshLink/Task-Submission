const express = require('express');
const connectDB = require('./config/db');
const userRoute = require('./routes/api/users');
const authRoute = require('./routes/api/auth');
const getTitles = require('./routes/api/dataFetch');

const app = express();
connectDB();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API running');
});

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/titles', getTitles);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});