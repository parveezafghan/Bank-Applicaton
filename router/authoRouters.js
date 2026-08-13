const express=require('express');
const router=express.Router();


const authController=require('../controller/authController');


router.get('/login',authController.login_page);
router.post('/user_login',authController.login);
router.get('/user_dashboard',authController.user_dashboard_controller);
router.get('/get_kabul_bank_Branchs',authController.get_kabul_bank_Branchs_controller);



module.exports=router;
 
