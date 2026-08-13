
const express=require('express');

const path=require('path');

const Home_Router=express.Router();



const Home_Controller=require('../controller/Home_controller');


// Home_Router.get('/show',(req,res)=>{



//     res.send("show Page in Router");
// })

Home_Router.get('/',Home_Controller.show);
Home_Router.get('/Home',Home_Controller.show_Home);
Home_Router.get('/about',Home_Controller.show_about);
Home_Router.get('/contact',Home_Controller.show_contact);
Home_Router.get('/services',Home_Controller.show_services);
Home_Router.get('/Admin_login',Home_Controller.show_Admin_login);
Home_Router.post('/Generial_contact_form',Home_Controller.Generial_contact_form_controller);

// Home_Router.get('/login',Home_Controller.show_login);
module.exports=Home_Router;