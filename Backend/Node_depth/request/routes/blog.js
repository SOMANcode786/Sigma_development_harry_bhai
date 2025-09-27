const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello World Blog !");
})

router.get("/about", (req, res) => {    
    res.send("Hello About Page !");
}   )


router.get("/blogPost/:slug", (req, res) => {
    console.log(req.query);
    console.log(req.params);
    res.send(`fetch the blog post with slug: ${req.params.slug}`);
})

module.exports = router;

