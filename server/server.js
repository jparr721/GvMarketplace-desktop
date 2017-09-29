const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Api is now running on port: ${port}`);
});
