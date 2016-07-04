using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Webinars.Controllers
{
    public class WebinarController : Controller
    {
        IUnitOfWork uow;

        public WebinarController()
        {
            uow = new IUnitOfWork();
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
            return Json(bookClient.GetItem(id), JsonRequestBehavior.AllowGet);
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
                uow.webinarRepository.Upadate(webinar);
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