class HomeController{


 // views   
    index=async(req,res)=>{
        try {
            res.render("index.ejs",{title:"index page"})
        } catch (error) {
            console.log(error);
        }
    }
    index2=async(req,res)=>{
        try {
            res.render("index2.ejs",{title:"index2 page"})
        } catch (error) {
            console.log(error);
        }
    }

    index3=async(req,res)=>{
        try {
            res.render("index3.ejs",{title:"index3 page"})
        } catch (error) {
            console.log(error);
        }
    }

    starter=async(req,res)=>{
        try {
            res.render("starter.ejs",)
        } catch (error) {
            console.log(error);
        }
    }


    iframe=async(req,res)=>{
        try {
            res.render("iframe.ejs",)
        } catch (error) {
            console.log(error);
        }
    }

    iframe_dark=async(req,res)=>{
        try {
            res.render("iframe-dark.ejs",)
        } catch (error) {
            console.log(error);
        }
    }


    // pages

    calendar=async(req,res)=>{
        try {
            res.render("calendar.ejs")
        } catch (error) {
            console.log(error);
        }
    }

    gallery=async(req,res)=>{
        try {
            res.render("gallery.ejs")
        } catch (error) {
            console.log(error);
        }
    }

    
    kanban=async(req,res)=>{
        try {
            res.render("kanban.ejs")
        } catch (error) {
            console.log(error);
        }
    }

    
    widgets=async(req,res)=>{
        try {
            res.render("widgets.ejs")
        } catch (error) {
            console.log(error);
        }
    }


    // charts

    chartjs=async(req,res)=>{
        try {
            res.render("charts/chartjs.ejs")
        } catch (error) {
            console.log(error);
        }
    }
    flot=async(req,res)=>{
        try {
            res.render("charts/flot.ejs")
        } catch (error) {
            console.log(error);
        }
    }
    inline=async(req,res)=>{
        try {
            res.render("charts/inline.ejs")
        } catch (error) {
            console.log(error);
        }
    }
    uplot=async(req,res)=>{
        try {
            res.render("charts/uplot.ejs")
        } catch (error) {
            console.log(error);
        }
    }

    // examples

    examples_404 = async(req,res)=>{
        try{
            res.render('examples/404.ejs',{title :"404 page"})
        } catch(error){
            console.log(error)
        }
    }

    examples_500 = async(req,res)=>{
        try{
            res.render('examples/500.ejs',{title :"500 page"})
        } catch(error){
            console.log(error)
        }
    }
    examples_blank = async(req,res)=>{
        try{
            res.render('examples/blank.ejs',{title :"blank page"})
        } catch(error){
            console.log(error)
        }
    }
    examples_contact_us = async(req,res)=>{
        try{
            res.render('examples/contact-us.ejs',{title :"contact_us page"})
        } catch(error){
            console.log(error)
        }
    }
    examples_contacts = async(req,res)=>{
        try{
            res.render('examples/contacts.ejs',{title :"contacts page"})
        } catch(error){
            console.log(error)
        }
    }
    examples_e_commerce = async(req,res)=>{
        try{
            res.render('examples/e-commerce.ejs',{title :"e_comerce page"})
        } catch(error){
            console.log(error)
        }
    }
    examples_faq = async(req,res)=>{
        try{
            res.render('examples/faq.ejs',{title :"faq page"})
        } catch(error){
            console.log(error)
        }
    }
    examples_forgot_password_v2 = async(req,res)=>{
        try{
            res.render('examples/forgot-password-v2.ejs',{title :"forgot password v2  page"})
        } catch(error){
            console.log(error)
        }
    }
    examples_forgot_password = async(req,res)=>{
        try{
            res.render('examples/forgot-password.ejs',{title :"forgot password page"})
        } catch(error){
            console.log(error)
        }
    }
    examples_invoice_print = async(req,res)=>{
        try{
            res.render('examples/invoice-print.ejs',{title :"invoice print page"})
        } catch(error){
            console.log(error)
        }
    }
    examples_invoice = async(req,res)=>{
        try{
            res.render('examples/invoice.ejs',{title :"invoice page"})
        } catch(error){
            console.log(error)
        }
    }
    examples_language_menu = async(req,res)=>{
        try{
            res.render('examples/language-menu.ejs',{title :"language menu page"})
        } catch(error){
            console.log(error)
        }
    }
    examples_legacy_user_menu = async(req,res)=>{
        try{
            res.render('examples/legacy-user-menu.ejs',{title :"legacy user menu page"})
        } catch(error){
            console.log(error)
        }
    }
    examples_lockscreen = async(req,res)=>{
        try{
            res.render('examples/lockscreen.ejs',{title :"lockscreen page"})
        } catch(error){
            console.log(error)
        }
    }

    examples_login_v2 = async(req,res)=>{
        try{
            res.render('examples/login-v2.ejs',{title :"login v2 page"})
        } catch(error){
            console.log(error)
        }
    }
    examples_login = async(req,res)=>{
        try{
            res.render('examples/login.ejs',{title :"login page"})
        } catch(error){
            console.log(error)
        }
    }
    examples_pace = async(req,res)=>{
        try{
            res.render('examples/pace.ejs',{title :"pace page"})
        } catch(error){
            console.log(error)
        }
    }
    examples_profile = async(req,res)=>{
        try{
            res.render('examples/profile.ejs',{title :"profile page"})
        } catch(error){
            console.log(error)
        }
    }
    examples_project_add = async(req,res)=>{
        try{
            res.render('examples/project-add.ejs',{title :"project add page"})
        } catch(error){
            console.log(error)
        }
    }
    examples_project_details= async(req,res)=>{
        try{
            res.render('examples/project-detail.ejs',{title :"project details page"})
        } catch(error){
            console.log(error)
        }
    }
    examples_project_edit = async(req,res)=>{
        try{
            res.render('examples/project-edit.ejs',{title :"project edit page"})
        } catch(error){
            console.log(error)
        }
    }
    examples_projects= async(req,res)=>{
        try{
            res.render('examples/projects.ejs',{title :"projects page"})
        } catch(error){
            console.log(error)
        }
    }

    examples_recover_password_v2 = async(req,res)=>{
        try{
            res.render('examples/recover-password-v2.ejs',{title :"recover password v2 page"})
        } catch(error){
            console.log(error)
        }
    }
    examples_recover_password = async(req,res)=>{
        try{
            res.render('examples/recover-password.ejs',{title :"recover password page"})
        } catch(error){
            console.log(error)
        }
    }

    examples_register_v2 = async(req,res)=>{
        try{
            res.render('examples/register-v2.ejs',{title :"register v2 page"})
        } catch(error){
            console.log(error)
        }
    }
    examples_register = async(req,res)=>{
        try{
            res.render('examples/register.ejs',{title :"register page"})
        } catch(error){
            console.log(error)
        }
    }

    //forms
     
     advanced=async(req,res)=>{
        try {
            res.render("forms/advanced.ejs")
        } catch (error) {
            console.log(error);
        }
     }

     editors=async(req,res)=>{
        try {
            res.render("forms/editors.ejs")
        } catch (error) {
            console.log(error);
        }
     }

     general=async(req,res)=>{
        try {
            res.render("forms/general.ejs")
        } catch (error) {
            console.log(error);
        }
     }

     validation=async(req,res)=>{
        try {
            res.render("forms/validation.ejs")
        } catch (error) {
            console.log(error);
        }
     }

     
     //layout

     boxed=async(req,res)=>{
        try {
            res.render("layout/boxed.ejs")
        } catch (error) {
            
        }
     }

     collapsed_sidebar=async(req,res)=>{
        try {
            res.render("layout/collapsed-sidebar.ejs")
        } catch (error) {
            
        }
     }

     fixed_footer=async(req,res)=>{
        try {
            res.render("layout/fixed-footer.ejs")
        } catch (error) {
            
        }
     }

     fixed_sidebar_custom=async(req,res)=>{
        try {
            res.render("layout/fixed-sidebar-custom.ejs")
        } catch (error) {
            
        }
     }

     fixed_sidebar=async(req,res)=>{
        try {
            res.render("layout/fixed-sidebar.ejs")
        } catch (error) {
            
        }
     }

     fixed_topnav=async(req,res)=>{
        try {
            res.render("layout/fixed-topnav.ejs")
        } catch (error) {
            
        }
     }

     top_nav_sidebar=async(req,res)=>{
        try {
            res.render("layout/top-nav-sidebar.ejs")
        } catch (error) {
            
        }
     }

     top_nav=async(req,res)=>{
        try {
            res.render("layout/top-nav.ejs")
        } catch (error) {
            
        }
    }

    //mailbox
    compose=async(req,res)=>{
        try {
            res.render("mailbox/compose.ejs")
        } catch (error) {
            
        }
    }

    mailbox=async(req,res)=>{
        try {
            res.render("mailbox/mailbox.ejs")
        } catch (error) {
            
        }
    }

    read_mail=async(req,res)=>{
        try {
            res.render("mailbox/read-mail.ejs")
        } catch (error) {
            
        }
    }


    //search

    enhanced_results=async(req,res)=>{
        try {
            res.render("search/enhanced-results.ejs")
        } catch (error) {
            
        }
    }

    enhanced=async(req,res)=>{
        try {
            res.render("search/enhanced.ejs")
        } catch (error) {
            
        }
    }

    simple_results=async(req,res)=>{
        try {
            res.render("search/simple-results.ejs")
        } catch (error) {
            
        }
    }
    simple=async(req,res)=>{
        try {
            res.render("search/simple.ejs")
        } catch (error) {
            
        }
    }

    // tables

    data=async(req,res)=>{
        try {
            res.render("tables/data.ejs")
        } catch (error) {
            
        }
    }

    
    jsgrid=async(req,res)=>{
        try {
            res.render("tables/jsgrid.ejs")
        } catch (error) {
            
        }
    }

    
    simple_tables=async(req,res)=>{
        try {
            res.render("tables/simple.ejs")
        } catch (error) {
            
        }
    }


    //UI

    ui_buttons = async(req,res)=>{
        try{
            res.render('UI/buttons.ejs',{title :"ui buttons page"})
        } catch(error){
            console.log(error)
        }
    }

    ui_general = async(req,res)=>{
        try{
            res.render('UI/general.ejs',{title :"ui general page"})
        } catch(error){
            console.log(error)
        }
    }
    ui_icons = async(req,res)=>{
        try{
            res.render('UI/icons.ejs',{title :"ui icons page"})
        } catch(error){
            console.log(error)
        }
    }
    ui_modals = async(req,res)=>{
        try{
            res.render('UI/modals.ejs',{title :"ui modals page"})
        } catch(error){
            console.log(error)
        }
    }
    ui_navbar = async(req,res)=>{
        try{
            res.render('UI/navbar.ejs',{title :"ui navbar page"})
        } catch(error){
            console.log(error)
        }
    }
    ui_ribbons = async(req,res)=>{
        try{
            res.render('UI/ribbons.ejs',{title :"ui ribbons page"})
        } catch(error){
            console.log(error)
        }
    }
    ui_sliders = async(req,res)=>{
        try{
            res.render('UI/sliders.ejs',{title :"ui sliders page"})
        } catch(error){
            console.log(error)
        }
    }
    ui_timeline = async(req,res)=>{
        try{
            res.render('UI/timeline.ejs',{title :"ui timeline page"})
        } catch(error){
            console.log(error)
        }
    }


    // _layout
     _layout_default=async(req,res)=>{
        try {
            res.render("_layout/default.ejs")
        } catch (error) {
            console.log(error);
        }
     }

     _layout_page=async(req,res)=>{
        try {
            res.render("_layout/page.ejs")
        } catch (error) {
            console.log(error);
        }
     }
 

     //_includes
     _includes_foot=async(req,res)=>{
        try {
            res.render("_includes/foot.ejs")
        } catch (error) {
            console.log(error);
        }
     }

     _includes_footer=async(req,res)=>{
        try {
            res.render("_includes/footer.ejs")
        } catch (error) {
            console.log(error);
        }
     }

     _includes_head=async(req,res)=>{
        try {
            res.render("_includes/head.ejs")
        } catch (error) {
            console.log(error);
        }
     }

     _includes_navbar=async(req,res)=>{
        try {
            res.render("_includes/navbar.ejs")
        } catch (error) {
            console.log(error);
        }
     }
     _includes_preloader=async(req,res)=>{
        try {
            res.render("_includes/preloader.ejs")
        } catch (error) {
            console.log(error);
        }
     }
     _includes_sidebar=async(req,res)=>{
        try {
            res.render("_includes/sidebar.ejs")
        } catch (error) {
            console.log(error);
        }
     }





}



module.exports=new HomeController()