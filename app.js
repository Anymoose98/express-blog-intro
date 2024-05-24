// Vari require e const importanti
const express = require('express');
const app = express();
const port = 3000
    // Prendo il file di posts
    const posts = require("./controllers/posts.js");

// Pagina benvenuto
app.get('/', (req, res) => {
    res.send('<h1>Benvenuto nel mio blog!</h1>')
})

// Posts
app.get("/posts", posts.index)

app.listen(port, () => {
})