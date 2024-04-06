using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.FileProviders;
using server.Models;

namespace server.Services;

public class SchedulingService
{
    static Scheduling scheduling { get; set; }
    static SchedulingService() {
        scheduling = new Scheduling{schedule = new int[6]{0,0,0,0,0,0}};
    }

    public static Scheduling GetAll() => scheduling;
    public static Scheduling UpDate(Scheduling s)
    {
        if(s != null)
        {
            scheduling = s;
        }
        return scheduling;
    }

}