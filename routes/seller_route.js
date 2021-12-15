// Main file like index

const express = require("express");
//express is frsmework so initialize object
const exp = express();
// include router to make separate files
const router = express.Router();
// for use json apis
router.use(express.json());
// import company data files

const seller = require("../seller.js");

// home page or url
exp.get('/', (req, res) => res.send('Welcome Seller Page !!'))
    // insert product data
router.post("/add", (req, res) => {

    const s_list = req.body;

    seller.push(s_list)
    console.log(s_list);
    res.json({ data: seller });
});
router.post("/fetch", (req, res) => {
    res.json({ data: seller });
});
router.post("/delete", (req, res) => {
    const dltdata = req.body;
    seller.pop(dltdata);
    res.json({ data: seller });
});
router.post("/update", (req, res) => {

    const s_list = req.body;
    seller[1] = s_list;
    res.json({ data: seller });
});
module.exports = router;