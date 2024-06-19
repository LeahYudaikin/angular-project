# Volunteer and Transport Management System

This project is designed to manage volunteers and their scheduling within a weekly transport system. It includes features for volunteer management and allocation to weekly transport schedules.

## Project Overview

The application consists of several components and services to facilitate volunteer management and scheduling of transportation:

### Components

1. **AppComponent**
   - Main component containing navigation menu for Volunteers List and Transport Schedule pages.

2. **VolunteersListComponent**
   - Displays existing volunteers. (Pre-loaded list from server; no addition needed)

3. **EditVolunteerComponent**
   - Allows editing of volunteer details using reactive forms.

4. **TransportScheduleComponent**
   - Displays the weekly transport schedule where volunteers can be assigned to specific days.

### Features and Functionality

1. **EditVolunteerComponent**
   - Includes a checkbox list for selecting days the volunteer is available.
   - Upon saving, validates against the server to ensure no conflicting assignments exist (e.g., volunteer previously scheduled for a day no longer selected).

2. **TransportScheduleComponent**
   - Each day of the week is represented as a slot where volunteers can be assigned.
   - Dropdown lists display potential volunteers available for each day.
   - Saving the schedule commits all changes to the server.

### Development Modules

#### Volunteer Management Module

- **Components**: VolunteersListComponent, EditVolunteerComponent
- **Service**: VolunteerService
  - Methods:
    - `getVolunteersList()`: Retrieves list of existing volunteers.
    - `saveVolunteer(volunteerData)`: Saves volunteer details including availability.

#### Scheduling Module

- **Component**: TransportScheduleComponent
- **Service**: ScheduleService
  - Methods:
    - `getAvailableVolunteers(day)`: Retrieves potential volunteers available for a specific day.
    - `saveWeeklySchedule(scheduleData)`: Saves the weekly transport schedule.

### Error Handling

- Ensures no overlapping assignments are saved without confirmation from the user to remove conflicting schedules first.

### Installation and Setup

1. **Clone Repository**: `git clone https://github.com/LeahYudaikin/angular-project.git`
2. **Install Dependencies**: `npm install`
3. **Run Development Server**: `ng serve`
