const express = require("express");
const Connections = require("./databse/db.js");
const routes = require("./Routes/route.js");
const cors = require('cors');

const app = express();

// Allow requests from your frontend domain
const corsOptions = {
  origin: 'https://gmail-clone-74y9.vercel.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.urlencoded({extended: true}));
app.use(express.json({extended: true}));
app.use('/', routes);

const PORT = 8000;
Connections();

app.listen(PORT, (error) => {
  if (error) {
    console.error("Error starting the server:", error);
  } else {
    console.log(`Server is Connected on port ,${PORT}`);
  }
});