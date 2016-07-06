using System.Web.Mvc;
using Webinars.DAL.Context;
using Webinars.DAL.Core;
using Webinars.DAL.Repositories;

namespace Webinars.Controllers
{
    public class HomeController : Controller
    {
        IUnitOfWork uow;
        public HomeController()
        {
            uow = new UnitOfWork(new WebinarContext()); 
        }
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public JsonResult GetWebinarsByLaw(int id)
        {
            return Json(uow.WebinarRepository.FindWebinarsByLawId(id), JsonRequestBehavior.AllowGet);
        }
    }
}