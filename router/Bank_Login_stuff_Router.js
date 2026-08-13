
const express=require('express');
const router=express.Router();

const BanK_login_stuff_controller=require('../controller/Bank_login_stuff_controller');

router.post('/admin_login',BanK_login_stuff_controller.stuff_controller);
// router.post('/admin_login',(req,res)=>{


//     console.log(req.body);
// })

module.exports=router;