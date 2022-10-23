// Question: Simulate a backend api , by using ExpressJs with a GET type of request handling the data of a set of movies.
// The data must be in the form of Array of objects and must be sent as response to the client.
// Also, mention the usage of each argument in the GET request route handler function.
// Example :moviedata =[
//                                       {name:”movie1”,releaseDate:”jan 2021”},
//                                        {name:”movie2”,releaseDate:”march 2021”},
//                                          ])

var express = require("express");
var app = express();
moviedata = [
  { name: "movie1", releaseDate: "jan 2021" },
  { name: "movie2", releaseDate: "march 2021" },
];

app.get("/", (req, res) => {
  res.send(JSON.stringify(moviedata));
  res.end();
});

app.listen(5000, () => {
  console.log("Server Strated on 5000");
});
