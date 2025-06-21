const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js'); // ✅ Correct path and casing

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Root Route
// app.get('/', (req, res) => {
//   res.send("Hello from Node.js");
// });

// Product Routes
app.use('/api/products', productRoute);

// MongoDB Connection
mongoose.connect("mongodb+srv://thanujasekuri000:9pganLQXAeFp6WWP@bckenddb.ea1yyha.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Bckenddb")
  .then(() => {
    console.log("Connected successfully");
    app.listen(5173, () => {
      console.log("Server running at port 5173");
    });
  })
  .catch((error) => {
    console.log("Connection failed", error);
  });
