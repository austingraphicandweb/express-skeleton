//in this file i am going to create a basic server for my express application. the server will notify me of the port that the server will start on and display a json data file on the front end.

//require express and PORT 3000 and assign express() to a variable (app) to start plus other files that need to be required within the server page
const express = require("express");
const PORT = 3000;
const app = express();
const data = require("./data/data.json");

//display data to the front end
app.get('/', (req,res) => {
    res.json(data);
})

//setup express.listen so that I can see that the server is live within my terminal window
app.listen(PORT, () => {
  console.log(`Server is live on port ${PORT}!`);
});
