import express from 'express'

let router= express.Router()


router.get('/',(req,resp)=>{
    return ({'msg':'Application root req'})
})

// 1.create new  Product
/*Usage:create new  Product
API URL:http://127.0.0.1:5000/api/products
Method Type:POST
Required Fields:name,price,image,qty,info
Access Type:Public
*/






// 2.Fetch All Products
/*Usage:Fetch all Products
API URL:http://127.0.0.1:5000/api/products
Method Type:GET
Required Fields:None
Access Type:Public
*/








// 3.Delete Product
/*Usage:delete product
API URL:http://127.0.0.1:5000/api/products/101
Method Type:DELETE
Required Fields:node
Access Type:Public
*/








// 4.Fetch single Product
/*Usage:delete product
API URL:http://127.0.0.1:5000/api/products/101
Method Type:GET
Required Fields:node
Access Type:Public
*/









export default productRouter