const express = require('express');

const app = express ();
app.use(express.json());
const PORT = 3001 

app.get(`/`, (request, response) => {
   const status = {
      Status: "Simple node app (Running)"
   }
   
   response.send(status);
});

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});
