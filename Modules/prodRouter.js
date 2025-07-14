import express from 'express'
let router = express.Router();
//API info

/*
Usage: update product based in product id
API URL:http://127.0.0.1:8080/prod/update/1
Method Type:PUT
Required Fields:None
Access Type:Public
*/

router.put("/update/:pid",(req,resp)=>{
    console.log(req.params.pid)
    return resp.json({"message":"updating Product Details"})
})
/*
Usage: delete product based in product id
API URL:http:127.0.0.1:8080/prod/del/1
Method Type:DELETE
Required Fields:None
Access Type:Public
*/

router.delete("/del/:pid",(req,resp)=>{
    console.log(req.params.pid);
    return resp.json({"message":"delete product based on id"})
})
export default router;