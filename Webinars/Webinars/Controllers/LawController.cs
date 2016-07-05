using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
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
        public void Delete(int id)
        {
            //var entity = repo.LawRepository.Get(id);
            repo.LawRepository.Delete(id);
        }

        [HttpPost]
        public void Edit(Law model)
        {
            repo.LawRepository.Update(model);
        }

        [HttpPost]
        public void Create(Law model)
        {
            repo.LawRepository.Add(model);
            repo.Save();
        }
    }
}