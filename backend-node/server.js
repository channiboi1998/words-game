const express = require("express");
const app = express();
const server = app.listen(8000);

app.get("/", function(request, response) {
    response.send("Hello this is node backend.");
});