using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Webinars.DAL.Core;
using Webinars.DAL.Model;
using Webinars.DAL.Repositories;

namespace Webinars.Controllers
{
    public class WebinarController : Controller
    {
        IUnitOfWork uow;

        public WebinarController()
        {
            uow = new UnitOfWork(new DAL.Context.WebinarContext());
        }
        // GET: Webinar
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public JsonResult GetAllWebinars()
        { 
            IEnumerable<Webinar> webinars = uow.WebinarRepository.GetAll();
            return Json(webinars, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetWebinar(int id)
        {
            return Json(uow.WebinarRepository.Get(id), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Delete(int id)
        {
                uow.WebinarRepository.Delete(id);
                uow.Save();
                return Json("Success");
        }

        [HttpPost]
        public ActionResult Edit(Webinar webinar)
        {
            if (webinar != null)
            {
                uow.WebinarRepository.Update(webinar);
                uow.Save();
                return Json("Success");
            }
            else
            {
                return Json("An Error Has occured");
            }
        }

        [HttpPost]
        public ActionResult Create(Webinar webinar)
        {
            if (webinar != null)
            {
                uow.WebinarRepository.Add(webinar);
                uow.Save();
                return Json("Success");
            }
            else
            {
                return Json("An Error Has occoured");
            }
        }


    }
}