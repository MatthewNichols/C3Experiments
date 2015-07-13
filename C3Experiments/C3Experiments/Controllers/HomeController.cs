using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace C3Experiments.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Page1()
        {
            return View();
        }

        public ActionResult Page2()
        {
            return View();
        }
    }
}