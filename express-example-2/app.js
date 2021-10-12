const express = require("express");
const products = require("./products");
const app = express();

app.set("json spaces", 8);
// app.set("json replacer", replacer);

app.get("/products", (req, res) => {
    // res.json(null);
    // res.send(null);
    res.json(products);
    // res.send(products);
    // res.send({
    //     status: "success",
    //     message: "All products "
    // });
});

app.post("/products", (req, res) => {
    res.json({
        status: "success",
        message: "Product and success"
    });
})

app.listen(3000)