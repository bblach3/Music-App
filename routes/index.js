const express = require('express')
const router = express.Router()



router.get('/', (req, res) => {
    res.render('index', {
        pageTitle: "Drake's Home"      // <= sending this to ejs file in a <% %> brackets
    })
})





module.exports = router