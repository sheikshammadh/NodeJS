import express from 'express'
let router = express.Router();
//API info

router.get('/order/:id',(req,resp)=>{
    console.log(req.params.id);
    return resp.json({message:"orders fetched"})
})

router.put('/order/update',(req,resp)=>{
    console.log(req.params.update);
    return resp.json({message:"orders updated succrssfully"})
})

export default router;