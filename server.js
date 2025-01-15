const express = require('express')
const app = express()
const db = require('./db')

const bodyParser = require('body-parser');
app.use(bodyParser.json());



app.get('/', function (req, res) {
  res.send('welcome to my channel how can i help you')
})
 

// app.get('/chicken',(req,res) =>{
//     res.send('hyy there')
// })


// app.get('/itli',(req,res)=>{
//     var customized_itli = {
//         name:'rawa itli',
//         size:'10 cm',
//         is_shambhar:'true',
//         is_chutney:false,
//     }
//     res.send(customized_itli)
// })

// app.get('/shambhar',(req,res)=>{
//     res.send('welcome to south india i am good today ')
// })




const personRoutes = require('./routes/PersonRoutes');
const menuItemRoutes = require('./routes/menuRoutes');

app.use('/person',personRoutes)
app.use('/menu',menuItemRoutes)

app.listen(3000, ()=>{
    console.log('listning on port 3000');

    
})

