import express from 'express'
let router = express.Router();
//API info
/*
Usage: User root Request
API URL:http:127.0.0.1:8080/user/
Method Type:GET
Required Fields:None
Access Type:Public
*/
router.get("/",(req,resp)=>{
    return resp.json({"message":"User - Root Request"})
})

/*
Usage: fetch all user details
API URL:http:127.0.0.1:8080/user/all
Method Type:GET
Required Fields:None
Access Type:Public
*/
router.get("/all",(req,resp)=>{
    return resp.json({"message":"Fetch all users"})
})

/*
Usage: update user based in user id
API URL:http:127.0.0.1:8080/user/update/1
Method Type:PUT
Required Fields:None
Access Type:Public
*/
router.put("/update/:id",(req,resp)=>{
    console.log(req.params.id)
    return resp.json({"message":"updating user based in id"})
})

router.delete("/users/:delete",(req,resp)=>{
    console.log(req.params.delete);
    return resp.json({message:"deleted successfully"})
})

export default router;