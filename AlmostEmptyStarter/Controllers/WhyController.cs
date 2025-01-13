using Microsoft.AspNetCore.Mvc;

namespace AlmostEmptyStarter.Controllers
{
    public class WhyController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
