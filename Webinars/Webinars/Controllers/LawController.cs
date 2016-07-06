using System.Web.Mvc;
using Webinars.DAL.Context;
using Webinars.DAL.Core;
using Webinars.DAL.Model;
using Webinars.DAL.Repositories;

namespace Webinars.Controllers
{
    public class LawController : Controller
    {
        private IUnitOfWork repo;
         
        public LawController()
        {
            repo = new UnitOfWork(new WebinarContext());
        }

        public ActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public JsonResult GetAllLaws()
        {
            return Json(repo.LawRepository.GetAll(), JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult Get(int id)
        {
            return Json(repo.LawRepository.Get(id), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Delete(int id)
        {
            repo.LawRepository.Delete(id);
            repo.Save();
            return Json("Success");
        }


        [HttpPost]
        public ActionResult Edit(Law law)
        {
            if (law != null) {
                repo.LawRepository.Update(law);
                repo.Save();
                return Json("Success");
            }
            else
                return Json("Error");
        }

        [HttpPost]
        public void Create(Law model)
        {
            repo.LawRepository.Add(model);
            repo.Save();
        }
    }
}