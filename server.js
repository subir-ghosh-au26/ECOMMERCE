const express = require("express");
const mongoose = require("mongoose");
const connectDB = require('./config/db');
const dotenv = require("dotenv");
const PORT = 5000;


const authRoutes = require('./routes/auth');
const itemRoutes = require('./routes/item');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/order');


dotenv.config();
const app = express();
app.use(express.json());

app.use('/api',authRoutes);
app.use('/api',itemRoutes);
app.use('/api',cartRoutes);
app.use('/api',orderRoutes);

// app.post('/signup', (req, res) => {
//     console.log('post request triggered');
// });

// app.get('/', (req, res) => {
//     res.send('It is Home page')
//     console.log('get trigered')
// });

// app.get('/login', (req, res) => {
//     res.send('<h1>This is login page</h1>')

// })

connectDB();
mongoose.connection.once("open", () => {
    console.log('Connected to databasse');
    app.listen(process.env.PORT || PORT, () => console.log(`app is listening to PORT ${PORT}`));
});
