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
app.use(express.json());

//GET SECTION

//note page
app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

//get notes
app.get("/api/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "/db/db.json"));
});

app.get("/api/notes/:id", function(req, res) {
  let savedNotes = JSON.parse(fs.readFileSync("./db/db.json"));
  res.json(savedNotes[Number(req.params.id)]);
});

//home page
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

//END OF GET SECTION


app.listen(PORT, function() {
  console.log(`App listening on PORT ${PORT}`);
});