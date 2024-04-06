using server.Models;

namespace server.Services;

public class VolunteerService
{
    static List<Volunteer> volunteerList { get; set; }
    static VolunteerService()
    {
        volunteerList = new List<Volunteer>()
        {
            new Volunteer() { id= 1, firstName= "Rut", lastName= "Chen", phone= "052-7652104", days= new bool[6]{true,true,false,true,false,true} },
            new Volunteer() { id= 2, firstName= "Sari", lastName= "Levi", phone= "053-2548432", days= new bool[6]{true,false,true,true,false,false} },
            new Volunteer() { id= 3, firstName= "Zipi", lastName= "Cohen", phone= "052-8452537", days= new bool[6]{false,true,false,true,true,true} },
            new Volunteer() { id= 4, firstName= "Shira", lastName= "Cheshin", phone= "055-6723545", days= new bool[6]{true,true,true,false,false,true} },
            new Volunteer() { id= 5, firstName= "Ayala", lastName= "Cohen", phone= "058-4825346", days= new bool[6]{false,true,false,true,true,false} },
            new Volunteer() { id= 6, firstName= "Tamar", lastName= "Tzadok", phone= "054-8442152", days= new bool[6]{false,true,false,true,false,true} },
            new Volunteer() { id= 7, firstName= "Yehudit", lastName= "Fridman", phone= "054-8473251", days= new bool[6]{false,false,true,true,false,false} }

        };
    }

    public static List<Volunteer> GetAll() => volunteerList;
    public static Volunteer? Get(int id) => volunteerList.FirstOrDefault(v => v.id == id);
    public static bool UpDate(Volunteer volunteer)
    {
        var index = volunteerList.FindIndex(v => v.id == volunteer.id);
        if(index != -1)
        {
            volunteerList[index] = volunteer;
            return true;
        }
        return false;
    }

}