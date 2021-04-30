const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3000;
const app = express();

// Sets up the Express app to handle data parsing
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});