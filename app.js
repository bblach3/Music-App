const { response } = require ('express');
const express = require ('express')

const app = express()
let port = 3000

app.use(express.static('public')) // static assets, css, images, videos
app.set('view engine', 'ejs')

app.use(required('./routes/index.js'));
app.use(require('./routes/albums.js'))









app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);

})