using Microsoft.AspNetCore.Mvc;
using server.Models;
using server.Services;

namespace server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class VolunteerController : ControllerBase
{
    public VolunteerController() { }

    [HttpGet("Get")]
    public ActionResult <List<Volunteer>> GetAll() => VolunteerService.GetAll();

    [HttpGet("Get/{id}")]
    public ActionResult <Volunteer> Get(int id)
    {
        var volunteer = VolunteerService.Get(id);
        if(volunteer == null)
            return NotFound();
        return volunteer;
    }

    [HttpPut("Put")]
    public ActionResult <List<Volunteer>> UpDate(Volunteer volunteer)
    {
        var existingVolunteer = Get(volunteer.id);
        if(existingVolunteer == null)
            return NotFound();
        VolunteerService.UpDate(volunteer);
        return VolunteerService.GetAll();
    }

}
