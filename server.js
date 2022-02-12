const express = require('express')
const app = express()

const apiRoutes = require('./routes/apiRoutes/playersRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
}); 