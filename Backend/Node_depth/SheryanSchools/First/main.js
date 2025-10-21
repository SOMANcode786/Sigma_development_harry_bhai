const express = require('express');
const morgan = require('morgan');
const app = express();

const userModel=require('./models/user');
const dbconnection=require('./config/db');
app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    console.log('Request URL:', req.url);
    
    res.render('rejister');
});

// with .save() 
// app.post('/get-form-data', (req, res) => {
//     const { username, email, password } = req.body;
//     const userData = new userModel({ username, email, password });
//     userData.save()
//     .then(() => console.log('User data saved to database'))
//     .catch((err) => console.error('Error saving user data:', err));
//     console.log(req.body);
//     res.send('Form data received');
// });
app.post("/get-form-data", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const newUser = await userModel.create({
      username,
      email,
      password,
    });

    console.log("✅ User data saved to database:", newUser);
    res.status(201).json(newUser); // JSON format me response bhejo
  } catch (err) {
    console.error("❌ Error saving user data:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get('/get-user', async (req, res) => {
    try {
        const users = await userModel.find(
            {username: 'soman'}
        );
        res.status(200).json(users);
    } catch (err) {
        console.error("❌ Error fetching user data:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
 