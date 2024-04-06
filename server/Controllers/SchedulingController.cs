using Microsoft.AspNetCore.Mvc;
using server.Models;
using server.Services;

namespace server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SchedulingController : ControllerBase
{
    public SchedulingController() { }

    [HttpGet("Get")]
    public ActionResult <Scheduling> GetAll() => SchedulingService.GetAll();

    [HttpPut("Put")]
    public ActionResult <Scheduling> UpDate(Scheduling schedule)
    {
        if(schedule == null)
            return NotFound();
        SchedulingService.UpDate(schedule);
        return SchedulingService.GetAll();
    }

}
