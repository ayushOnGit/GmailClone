const express = require("express");
const Connections = require("./databse/db.js");
const routes = require("./Routes/route.js");
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: 'https://gmail-clone-74y9.vercel.app', // Remove the trailing slash
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

// Additional CORS headers in route handling middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://gmail-clone-74y9.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use('/', routes);

const PORT = 8000;
Connections();

app.listen(PORT, (error) => {
  if (error) {
    console.error("Error starting the server:", error);
  } else {
    console.log(`Server is Connected on port ${PORT}`);
  }
});