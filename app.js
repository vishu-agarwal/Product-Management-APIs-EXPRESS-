// Main file like index
const express = require("express")
    //express is frsmework so initialize object
const exp = express();

//port number
const port = 1000
    // import company seller and product rourter files
const product = require("./routes/product_route");
const seller = require("./routes/seller_route");
const company = require("./routes/company_route.js");
const e = require("express");
// setup server
exp.listen(port, () => {
    console.log(`server is running ${port} !`);

});
// home page or url
exp.get('/', (req, res) => res.send('Welcome Product Management APIs (EXPRESS)!!!'))
    // urls
exp.use("/pro", product);
exp.use("/comp", company);
exp.use("/sell", seller);