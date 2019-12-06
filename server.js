// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var fs = require("fs");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

//GET SECTION
//note page
app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});
//home page
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });
//END OF GET SECTION

//POST SECTION

//END OF POST SECTION

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});