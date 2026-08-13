
exports.dashboard=(req,res)=>{


    res.render('Users_pages/User_Home_page.ejs',{user:req.user});
};
