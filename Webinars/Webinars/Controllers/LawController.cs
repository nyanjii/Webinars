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
            repo = new UnitOfWork();
        }

        public ActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public JsonResult GetAllLaws()
        {
            return Json(repo.lawRepository.GetAll(), JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult Get(int id)
        {
            return Json(repo.lawRepository.Get(id), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public void Delete(int id)
        {
            var entity = repo.lawRepository.Get(id);
            repo.lawRepository.Delete(entity);
        }

        [HttpPost]
        public void Edit(Law model)
        {
            repo.lawRepository.Update(model);
        }

        [HttpPost]
        public void Create(Law model)
        {
            repo.lawRepository.Add(model);
        }
    }
}