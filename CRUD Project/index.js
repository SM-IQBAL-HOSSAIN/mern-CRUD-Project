const express=require('express'); 
const mongoose = require('mongoose');
const Product=require('./models/product.models'); 
const productRoute=require('./routes/product.route.js')
const app=express();

const port=5000;
//middleware

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// routes
app.use("/api/products",productRoute); 


app.get('/', (req, res) => {
res.send('Hello World!')
  })

mongoose.connect('mongodb+srv://smiqbal:bd4499176@cluster0.ffkpebn.mongodb.net/My-API?retryWrites=true&w=majority')
.then(()=>{
 console.log('server is connected successfuly!');

})
.catch(()=>{
console.log("connect Fail"); 

});

app.listen(port,()=>{
console.log(`Your Server is runing at http://localhost:${port}`); 
      
   })
