const router=require('express').Router()

//routes

router.get("/", (req, res)=>{
    res.send("welcome")
})


module.exports=router;