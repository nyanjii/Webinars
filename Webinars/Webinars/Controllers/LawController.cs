using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Webinars.DAL.Repositories;

namespace Webinars.Controllers
{
    public class LawController : Controller
    {
        private LawRepository repo;
         
        public LawController()
        {
            repo = new LawRepository();
        }
        public JsonResult GetAllLaws()
        {
        }
    }
}