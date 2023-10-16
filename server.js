require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const PORT = process.env.PORT || 8888;

// routes
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const careerRoutes = require('./routes/career');

// DB Connection
mongoose.set('strictQuery', true);

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB CONNECTED successfully!');
  });

// global middlewares

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api', userRoutes);
app.use('/api', authRoutes);
app.use('/api', careerRoutes);

app.get('/', (req, res) => {
  res.send('backend is running!');
});

// start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
