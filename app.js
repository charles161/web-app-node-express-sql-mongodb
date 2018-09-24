const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const charlesRouter = express.Router();
const port = process.env.PORT || 3000;
const app = express();
app.use(morgan('combined')); 
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/css',express.static(path.join(__dirname,'node_modules/bootstrap/dist/css'))) when we use css/some_css_file this line makes the htnl file to check for the css file in public directory as well as in the node modules specifically and says that go look for css in that particular folder

app.set('views','./src/views');
app.set('view engine','ejs');

charlesRouter.route('/').get((req,res) => {
  res.send('hi im charles');
})

charlesRouter.route('/profile').get((req,res)=> {
  res.send("this is my profile")
})

app.use('/charles',charlesRouter);
app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, 'views/index.html'));
  res.render('index',{title:'cool',list:['a','b','c'],name:'Maria Charles'});//its gonna render a view called index its gonna look for it in the views directory
});
app.listen(port, (err) => {
  if (err) return console.log('err');
  debug(chalk.blue('hi there...'));
});
