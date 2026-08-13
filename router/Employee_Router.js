const express=require('express');
const router=express.Router();

const Employee_Router_controller=require('../controller/Employee_Router_controller');
const Employee_Add_customer=require('../controller/Employee_Add_customer_controller');
const Employee_get_kabul_bank_Branchs_and_id_controller=require('../controller/Employee_Router_controller');
const Employee_Find_account_details_controller=require('../controller/Employee_Find_Account_details_controller');
const Employee_Remove_customer_controller=require('../controller/Employee_Remove_customer_controller');
const Employee_Credit_fund_controller=require('../controller/Employee_credit_fund_controller');
const Employee_Debit_fund_controller=require('../controller/Employee_Debit_fund_controller');
const Employee_Customer_list_paggination_controller=require('../controller/Employee_customer_list_paggination_controller');
const Employee_show_debit_credit_check_List_controller=require('../controller/Employee_show_debit_credit_check_List_controller');
const Bank_status_controller=require('../controller/Bank_status_controller');
const Employee_Transfer_fund_controller=require('../controller/Employee_Transfer_Fund_controller');
const Employee_check_controller=require('../controller/Employee_check_controller');
const Employee_change_card_and_Account=require('../controller/Employee_change_card_&_Account_state');
const { change_Account_state } = require('../module/Employee_chanage_card_&_Account_state_model');
const Employee_Bank_status_char_data=require('../controller/Employee_get_Bank_status_data_for_char_controller');
const Employee_change_password=require('../controller/Employee_change_password_controller');
const Employee_Profile_data=require("../controller/Employee_profile_controller");

router.get('/Employee',Employee_Router_controller.Employee_controller);
router.get('/Customer_list',Employee_Router_controller.Customer_list);
router.get('/Employee_logout',Employee_Router_controller.logout);
router.get('/Employee_contact_us',Employee_Router_controller.Employee_contact_us_controller);
router.get('/Employee_Account_Details',Employee_Router_controller.Employee_Account_Details);
router.get('/Add_customer',Employee_Router_controller.Add_customer_controller);
router.get('/Remove_customer',Employee_Router_controller.Remove_customer_controller);
router.get('/Credit_Funds',Employee_Router_controller.Credit_Funds_controller);
router.get('/Debit_Funds',Employee_Router_controller.Debit_Funds_controller);
router.get("/Transfer_funds",Employee_Router_controller.Transfer_funds_controller);
router.get('/check_pay',Employee_Router_controller.check_pay_controller);
router.get('/get_Debit_list',Employee_show_debit_credit_check_List_controller.Employee_show_Debit_controller);
router.get('/show_Debit_list',Employee_show_debit_credit_check_List_controller.Employee_show_Debit_ejs_controller);
router.get('/show_Transfer_fund_list',(req,res)=>{


    let id=req.query.id;

    res.render("Bank_Employee/Transfer_Fund_list_js.ejs",{id});
})

router.get('/get_All_Transfer_Funds',Employee_Transfer_fund_controller.All_Transaction_list);
router.post('/get_Transfer_Fund_By_Account_Number',Employee_Transfer_fund_controller.Search_Transfer_Fund_By_Account_Number);
router.post('/search_customer_Debit',Employee_show_debit_credit_check_List_controller.Employee_search_customer_Debit);
router.get('/show_Credit_list',Employee_show_debit_credit_check_List_controller.Employee_show_credit_ejs_controller);
router.post('/Employee_Add_customer',Employee_Add_customer.Employee_Add_customer_controller);
router.get('/get_Credit_list',Employee_show_debit_credit_check_List_controller.Employee_show_credit_controller);
router.get('/show_check_list',Employee_Router_controller.check_list_controller);
router.get('/change_card_and_Account_status',(req,res)=>{

     let id=req.query.id;
     res.render('Bank_Employee/change_card_and_Account_status.ejs',{id});
})
router.get('/get_check_list',Employee_show_debit_credit_check_List_controller.check_list_controller);
router.post('/search_check',Employee_show_debit_credit_check_List_controller.Employee_search_check);
router.get('/search_check_by_status',Employee_show_debit_credit_check_List_controller.search_check_by_status);
router.post('/search_customer_Credit',Employee_show_debit_credit_check_List_controller.Employee_search_customer_credit_controller);
router.get('/get_kabul_bank_Branchs_and_id',Employee_get_kabul_bank_Branchs_and_id_controller.get_kabul_bank_Branchs_and_id_controller);
router.post('/get_new_customer_info',Employee_Add_customer.Employee_get_new_customer_controller);
router.post('/Employe_Find_Account_details',Employee_Find_account_details_controller.Employee_Find_account_details_controller);
router.post('/Employee_Remove_customer',Employee_Remove_customer_controller.Employee_Remove_Account_controller);
router.post('/Employee_credit_fund',Employee_Credit_fund_controller.Employee_Credit_fund_controller)
router.post('/Employee_Debit_fund',Employee_Debit_fund_controller.Employee_Debit_FUNDS_controller);
router.get('/page',Employee_Customer_list_paggination_controller.Employee_customer_List_paggination_controller);
router.get('/show_Status',(req,res)=>{

    let id=req.query.id;
    res.render('Bank_Employee/Employee_status.ejs',{id});
})

router.post('/Transfer_Fund',Employee_Transfer_fund_controller.Transfer_fund);
router.post('/pay_check',Employee_check_controller.pay_check);
router.get('/get_status_balance',Bank_status_controller.Balance_controller);
router.get('/get_status_widthraw',Bank_status_controller.Widthraw_controller);
router.get('/get_Transfer_Amount',Bank_status_controller.Transfer_Amount);
router.get('/get_check',Bank_status_controller.check);
router.get('/get_account_',Bank_status_controller.Account);
router.get('/get_card',Bank_status_controller.card);
router.get('/Employee_profile_data',Employee_Profile_data.Employee_PROFILE_data);
// router.get('/Bank_status_data',Bank_status_controller.Bank_status_data);
router.get('/Bank_status_data',Employee_Bank_status_char_data.widthraw_deposite_check_and_Transfer_data);

router.post('/change_Account_state',Employee_change_card_and_Account.change_Account_state);
router.post('/change_card_state',Employee_change_card_and_Account.change_card_status);
router.post('/change_password',Employee_change_password.change_password);
router.get('/get_Employee',Bank_status_controller.get_Employee);
module.exports=router;

