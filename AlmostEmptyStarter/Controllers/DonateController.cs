using Microsoft.AspNetCore.Mvc;

namespace AlmostEmptyStarter.Controllers
{
    public class DonateController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
