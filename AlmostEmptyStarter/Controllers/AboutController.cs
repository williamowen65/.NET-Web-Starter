using Microsoft.AspNetCore.Mvc;

namespace AlmostEmptyStarter.Controllers
{
    public class AboutController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
