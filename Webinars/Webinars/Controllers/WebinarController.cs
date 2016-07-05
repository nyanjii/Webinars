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
            uow = new UnitOfWork();
        }
        // GET: Webinar
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public JsonResult GetAllWebinars()
        { 
            IEnumerable<Webinar> webinars = uow.webinarRepository.GetAll();
            return Json(webinars, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetWebinar(int id)
        {
            return Json(uow.webinarRepository.Get(id), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Delete(Webinar id)
        {
            if (id != null)
            {
                uow.webinarRepository.Delete(id);
                return Json("Success");
            }
            else
            {
                return Json("An Error Has occured");
            }
        }

        [HttpPost]
        public ActionResult Edit(Webinar webinar)
        {
            if (webinar != null)
            {
                uow.webinarRepository.Update(webinar);
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
                uow.webinarRepository.Add(webinar);
                return Json("Success");
            }
            else
            {
                return Json("An Error Has occoured");
            }
        }


    }
}