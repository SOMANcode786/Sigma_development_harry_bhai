const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    console.log('Request URL:', req.url);
    
    res.render('index');
});


app.post('/get-form-data', (req, res) => {
    console.log(req.body);
    res.send('Form data received');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
 