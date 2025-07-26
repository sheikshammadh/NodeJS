import express from 'express'
import Product from '../models/product'
let router = express.Router()
/*Product Root Req
URL:http://127.0.0.1:5000/api/
*/
router.get("/",(req,resp)=>{
    return resp.json({"msg":"Product Root Request"})
})

//1.create new  Product
/*Usage:create new  Product
API URL:http://127.0.0.1:5000/api/products
Method Type:POST
Required Fields:name,price,image,qty,info
Access Type:Public
*/
router.post("/products",async(req,resp)=>{
    try{
        let newProduct={
            name:req.body.name,
            image:req.body.image,
            price:req.body.price,
            info:req.body.info,
            qty:req.body.qty
        }
        //verify Product Exists or not
        let product=await ProductModel.findOne({name:newProduct.name})
        if(product){
            return resp.status(401).json({"msg":"Product already Exists"})
        }
        product=new ProductModel(newProduct);
        await product.save();//insert product data into collection
        resp.status(200).json({"result":"Product is created",product:product})
    }
    catch(err){
        console.log(err);
        resp.status(500).json({"msg":err.message})
    }

})
//2.Fetch All Products
/*Usage:Fetch all Products
API URL:http://127.0.0.1:5000/api/products
Method Type:GET
Required Fields:None
Access Type:Public
*/
router.get("/products",async(req,resp)=>{})
export default  router;