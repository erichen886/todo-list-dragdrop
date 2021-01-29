const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
const port = 3000;

//can apply middleware here if gonna use req.body remember to use body parser etc
// app.use(bodyParser.json()) // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/
//here we can also create virtual paths
//app.use('/static', express.static(path.join(__dirname,'public')))
app.use(express.static('public'));

//here we add our routes could also import express router
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port,()=> {
  console.log(`Listening at http://localhost:${port}`);
});
