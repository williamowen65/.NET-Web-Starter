using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Threading.Tasks;


namespace AlmostEmptyStarter.Controllers
{
    public class AboutController : Controller
    {
        public async Task<IActionResult> Index()
        {
            string filePath = "wwwroot/js/google-vortex.js"; // Update with the actual file path
            string fileContents;

            // Read the file contents asynchronously
            using (StreamReader reader = new StreamReader(filePath))
            {
                fileContents = await reader.ReadToEndAsync();
            }

            // Pass the file contents to the view using ViewData
            ViewData["FileContents"] = fileContents;
            ViewData["Title"] = "About";

            return View();
        }
    }
}
