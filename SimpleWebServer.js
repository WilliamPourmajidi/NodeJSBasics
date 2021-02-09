const express = require("express");

const app = express();

// above lines can be shortened to:  const app = require("express")();
app.get("/", (req,res) => res.send(`Hey, I got this as your GET request ${req}`));



app.listen(8080,()=> console.log(`Litening on port 8080`));

