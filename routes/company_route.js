// Main file like index

const express = require("express");
//express is frsmework so initialize object
const exp = express();
// include router to make separate files
const router = express.Router();
// for use json apis
router.use(express.json());
// import company data files

const company = require("../company.js");

// home page or url
exp.get('/', (req, res) => res.send('Welcome Company Page !!'))
    // insert product data
router.post("/add", (req, res) => {

    const c_list = req.body;

    company.push(c_list)
    console.log(c_list);
    res.json({ data: company });
});
router.post("/fetch", (req, res) => {
    res.json({ data: company });
});
router.post("/delete", (req, res) => {
    const dltdata = req.body;
    company.pop(dltdata);
    res.json({ data: company });
});
router.post("/update", (req, res) => {

    const c_list = req.body;
    company[1] = c_list;
    res.json({ data: company });
});
module.exports = router;