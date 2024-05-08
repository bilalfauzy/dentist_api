require('dotenv').config()
const express = require("express");
const app = express();
const cors = require("cors");
const setRoutes = require('./routes/routes')
const { sequelize } = require('./models')

app.use(cors());
app.use(express.json());
setRoutes(app)

const PORT = process.env.PORT || 8080;

app.listen(PORT, async() => {
  console.log(`Server is live at ${PORT}`)
  await sequelize.authenticate()
  console.log('Database Connected!')
});
