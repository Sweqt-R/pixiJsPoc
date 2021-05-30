const express = require("express");
const serveStatic = require("serve-static");
app = express();

app.use(express.static('static'));

const port = 3000;
app.listen(port, () => {
    console.log("Server ONLINE");
});