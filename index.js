const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.render('header.html');
});
app.listen(port, () => {
  console.log(`App listening on ${port}`)
})