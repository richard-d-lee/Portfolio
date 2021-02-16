const express = require('express');
const app = express();
const PORT = 3005;

app.use(express.static('../client/dist'));
app.use(express.json());

app.get('/products/:id', (req, res) => {
		res.status(200).send('The server is taking requests to the products/:id endpoint');
});

app.listen(PORT, () => {
    console.log('Serving up now at '+ JSON.stringify(PORT))
});