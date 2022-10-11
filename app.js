const express = require('express')

const app = express();

app.listen(3000, () => {
    console.log('Servidor corriendo...')
})

app.use('/static', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
})