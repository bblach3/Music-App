const express = require('express')
const router = express.Router()



let dataFile = require('../data/data.json')

let pageAlbums = dataFile.albums; //array of objects [{},{},{}]

router.get('/albums', (req, res)=>{

   //an array that holds all of the songs
    res.render('albumlinks', {
    albums: pageAlbums,
    pageTitle: "Drake Albums"

    })
})



//time 1:45 of lecture
router.get('/albums/:albumid', (req, res) => {
    let songs = []; //array of songs for individual albums
    let albums = [];
    console.log(req.params.albumid);


    pageAlbums.forEach(albumObj =>{
        if(albumObj.shortname == req.params.albumid){
            songs = albumObj.tracklist;
            albums.push(albumObj)              
        }})


    
    res.render('albumlinks', {
        tracklist: songs,             
        albums: albums, // <= sending to ejs file, array of albums in this case
        pageTitle: "Drake Albums"
    })
})

module.exports = router




// <% for( let i = 0; i < artwork.length; i++ ) { %>
//     <img src="/images/artwork/<%= artwork[i] %>" alt="">
// <% } %>