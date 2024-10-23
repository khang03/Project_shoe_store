const express = require('express');
const app = express();
const port = 8080
const routes = require('./routes');

// Run All Routes
routes(app);


// Port :3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})