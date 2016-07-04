using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Webinars.Controllers
{
    public class WebinarController : Controller
    {
        WebinarController()
        {

        }
        // GET: Webinar
        public ActionResult Index()
        {
            return View();
        }
        

    }
}