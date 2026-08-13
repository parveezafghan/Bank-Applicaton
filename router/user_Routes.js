
const express=require('express');
const user_controller=require('../controller/user_controller');
const auth=require('../controller/authController');
const router=express.Router();
const user_Router_controller=require('../controller/user_Router_controller');
const get_user_data_from_Account=require('../controller/get_user_data_from_Account_controller');
const user_Transefer_money_and_credit_and_debit=require('../controller/user_Transfer_money_and_debit_and_credit_controller');
const user_change_password=require('../controller/user_change_password_controller');
const user_send_check=require('../controller/user_send_check_controller');
const user_deposite_Debit_credit_Transer_and_check_list_paganition=require('../controller/user_Debit_Transfer_credit_check_and_Tranfer_lists_pagination_controller');




router.get('/user_Deposite/',user_Router_controller.Deposite_controller);
router.get('/user_widthraw',user_Router_controller.widthraw_controller);
router.get('/user_check',user_Router_controller.check_controller);
router.get('/user_transaction',user_Router_controller.transaction_controller);
router.get('/user_send_check',user_Router_controller.user_send_check_controller);
router.get('/user_contact',user_Router_controller.contact_controller);
router.get('/logout',auth.Tracking_logout_);
router.get('/get_user_data_from_Account',get_user_data_from_Account.get_user_data);
router.get('/get_10_deposite_Record',user_deposite_Debit_credit_Transer_and_check_list_paganition.get_10_Deposite_Record);
router.get('/get_all_depostie_list',user_deposite_Debit_credit_Transer_and_check_list_paganition.get_all_depostie_list);
router.get('/get_10_widthraw_Record',user_deposite_Debit_credit_Transer_and_check_list_paganition.get_10_widthraw_Record);
router.get('/get_all_Widthraw_list',user_deposite_Debit_credit_Transer_and_check_list_paganition.get_All_Widthraw_Records);
router.get('/get_10_checks_Record',user_deposite_Debit_credit_Transer_and_check_list_paganition.get_10_check_Records);
router.get('/get_all_check_list',user_deposite_Debit_credit_Transer_and_check_list_paganition.get_All_checks_Records);
router.get('/user_search_check_by_status',user_deposite_Debit_credit_Transer_and_check_list_paganition.user_search_check_by_status);
router.post('/user_Transfer_Money',user_Transefer_money_and_credit_and_debit.Transfer_money);
router.get('/get_10_Transfer_Record',user_deposite_Debit_credit_Transer_and_check_list_paganition.get_10_Transfer_Records);
router.get('/get_all_Transfer_list',user_deposite_Debit_credit_Transer_and_check_list_paganition.get_All_Transfer_Records);
router.get('/user_profile_data',get_user_data_from_Account.user_profile_data);
router.post('/user_change_password',user_change_password.change_password);
router.post('/user_send_check',user_send_check.user_check);


module.exports=router;