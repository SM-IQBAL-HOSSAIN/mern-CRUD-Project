
const mongoose=require('mongoose');
const ProductSchima=mongoose.Schema(
{


    name:{
        type :String,
        required:[true,"pls enter product name"], 
    },

    quantity:{
        type :Number,
        required:[true,"pls enter product name"], 
        default:0
    },

    price:{
        type :Number,
        required:[true,"pls enter product name"], 
        default:0
    },
    image:{
        type :String,
        required:false, 
        },
    
},

{
 
    timestamps:true
}


); 

const Product = mongoose.model("myproducts",ProductSchima);
module.exports = Product;