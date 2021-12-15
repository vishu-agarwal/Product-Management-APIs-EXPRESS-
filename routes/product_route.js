// Main file like index

const express = require("express");
//express is frsmework so initialize object
const exp = express();
// include router to make separate files
const router = express.Router();

router.use(express.json());

// import product data files

const product = require("../product");
// home page or url
router.get('/', (req, res) => res.send('Welcome Product Page !!'))
    // insert product data
router.post("/add", (req, res) => {


    const productlist = req.body;
    const prolist = product;
    product.push(productlist)
    console.log(prolist);
    res.json({ data: product });

});
router.post("/fetch", (req, res) => {
    res.json({ data: product });
});
router.post("/delete", (req, res) => {
    const dltdata = req.body;
    product.pop(dltdata);
    res.json({ data: product });
});
router.post("/update", (req, res) => {

    const productlist = req.body;
    console.log(productlist);
    product[1] = productlist;
    console.log(product[1]);
    res.json({ data: product });
});
module.exports = router;