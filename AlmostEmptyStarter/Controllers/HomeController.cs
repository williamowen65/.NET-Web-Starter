using Microsoft.AspNetCore.Mvc;

namespace AlmostEmptyStarter.Controllers
{
    public class HomeController : Controller
    {
        // IActionResult is a generic return type that can be used to return any type of result
        public IActionResult Index()
        {
            ViewData["Title"] = "Google Vortex";
            return View();
        }

   
    }
}
