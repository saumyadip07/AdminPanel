const express=require("express");
const HomeController=require("../App/controller/HomeController")

const Route=express.Router();

// views
Route.get("/",HomeController.index)
Route.get("/index2",HomeController.index2)
Route.get("/index3",HomeController.index3)
Route.get("/iframe",HomeController.iframe)
Route.get("/iframe-dark",HomeController.iframe_dark)
Route.get("/starter",HomeController.starter)


// pages
Route.get("/page/calendar",HomeController.calendar)
Route.get("/page/gallery",HomeController.gallery)
Route.get("/page/kanban",HomeController.kanban)
Route.get("/page/widgets",HomeController.widgets)

//charts

Route.get("/page/charts/chartjs",HomeController.chartjs)
Route.get("/page/charts/flot",HomeController.flot)
Route.get("/page/charts/inline",HomeController.inline)
Route.get("/page/charts/uplot",HomeController.uplot)

//examples

Route.get('/page/examples/404',HomeController.examples_404);
Route.get('/page/examples/500',HomeController.examples_500);
Route.get('/page/examples/blank',HomeController.examples_blank);
Route.get('/page/examples/contact-us',HomeController.examples_contact_us);
Route.get('/page/examples/contact',HomeController.examples_contacts);
Route.get('/page/examples/e-commerce',HomeController.examples_e_commerce);
Route.get('/page/examples/faq',HomeController.examples_faq);

Route.get('/page/examples/forgotpassword-v2',HomeController.examples_forgot_password_v2);

Route.get('/page/examples/forgotpassword',HomeController.examples_forgot_password);

Route.get('/page/examples/invoice-print',HomeController.examples_invoice_print);

Route.get('/page/examples/invoice',HomeController.examples_invoice);

Route.get('/page/examples/language-menu',HomeController.examples_language_menu);

Route.get('/page/examples/legacy-user-menu',HomeController.examples_legacy_user_menu);

Route.get('/page/examples/lockscreen',HomeController.examples_lockscreen);

Route.get('/page/examples/login-v2',HomeController.examples_login_v2);
Route.get('/page/examples/login',HomeController.examples_login);
Route.get('/page/examples/pace',HomeController.examples_pace);
Route.get('/page/examples/profile',HomeController.examples_profile);
Route.get('/page/examples/project-add',HomeController.examples_project_add);
Route.get('/page/examples/project-details',HomeController.examples_project_details);
Route.get('/page/examples/project-edit',HomeController.examples_project_edit);

Route.get('/page/examples/projects',HomeController.examples_projects);
Route.get('/page/examples/recover-password-v2',HomeController.examples_recover_password_v2);
Route.get('/page/examples/recover-password',HomeController.examples_recover_password);
Route.get('/page/examples/register-v2',HomeController.examples_register_v2);
Route.get('/page/examples/register',HomeController.examples_register);

//forms

Route.get("/page/forms/advanced",HomeController.advanced)
Route.get("/page/forms/editors",HomeController.editors)
Route.get("/page/forms/general",HomeController.general)
Route.get("/page/forms/validation",HomeController.validation)


//layout

Route.get("/page/layout/boxed",HomeController.boxed)
Route.get("/page/layout/collapsed-sidebar",HomeController.collapsed_sidebar)
Route.get("/page/layout/fixed-footer",HomeController.fixed_footer)
Route.get("/page/layout/fixed-sidebar-custom",HomeController.fixed_sidebar_custom)
Route.get("/page/layout/fixed-sidebar",HomeController.fixed_sidebar)
Route.get("/page/layout/fixed-topnav",HomeController.fixed_topnav)
Route.get("/page/layout/top-nav-sidebar",HomeController.top_nav_sidebar)
Route.get("/page/layout/top-nav",HomeController.top_nav)


//mailbox

Route.get("/page/mailbox/compose",HomeController.compose)
Route.get("/page/mailbox/mailbox",HomeController.mailbox)
Route.get("/page/mailbox/read-mail",HomeController.read_mail)


// search

Route.get("/page/search/enhanced-results",HomeController.enhanced_results)
Route.get("/page/search/enhanced",HomeController.enhanced)
Route.get("/page/search/simple-results",HomeController.simple_results)
Route.get("/page/search/simple",HomeController.simple)


//tables

Route.get("/page/tables/data",HomeController.data)
Route.get("/page/tables/jsgrid",HomeController.jsgrid)
Route.get("/page/tables/simple",HomeController.simple_tables)


// ui

Route.get('/page/ui/buttons',HomeController.ui_buttons);
Route.get('/page/ui/general',HomeController.ui_general);
Route.get('/page/ui/icons',HomeController. ui_icons);
Route.get('/page/ui/modals',HomeController. ui_modals);
Route.get('/page/ui/navbar',HomeController.ui_navbar);
Route.get('/page/ui/ribbons',HomeController. ui_ribbons);
Route.get('/page/ui/sliders',HomeController. ui_sliders);
Route.get('/page/ui/timeline',HomeController. ui_timeline);

//_layout


Route.get('/_layout/default',HomeController. _layout_default);
Route.get('/_layout/page',HomeController. _layout_page);


// _includes
Route.get('/_includes/foot',HomeController. _includes_foot);
Route.get('/_includes/footer',HomeController. _includes_footer);
Route.get('/_includes/head',HomeController. _includes_head);
Route.get('/_includes/navbar',HomeController. _includes_navbar);
Route.get('/_includes/placeholder',HomeController. _includes_preloader);
Route.get('/_includes/sidebar',HomeController. _includes_sidebar);



module.exports=Route