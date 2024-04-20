
const express=require('express');
const Product=require('../models/product.models');
const router=express.Router();
const {getProducts,getProduct,createProduct,updateProduct,deleteProduct}=require('../controllers/product.controler.js');


router.get('/',getProducts);
router.get('/',getProduct);
router.post('/',createProduct);
router.put("/:id",updateProduct);
router.delete("/:id",deleteProduct);



module.exports=router; 
