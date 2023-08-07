# User Experience - Team *T26* 

The report summarizes user experience testing performed on the team's application.

Each developer should ask the user to accomplish one or more simple tasks while monitoring their efforts.  
The user should attempt to complete the tasks without any aid from the developer.
Use a pseudonym to identify the user below. 
Set a time limit and tasks for the user to perform.

 
### Tasks

Each user should complete the following tasks in 10 minutes.
Developers should not guide the user, but the user may ask for help as a last resort.  
Consider this a failure when it happens.  

1. Create a trip starting in Fort Collins and ending in New Zealand, with at least 5 stops along the way. Then delete one of the destinations from the trip.
1. Change the units of measurement from Miles to Kilometers. Then change the units to a custom unit with a radius > 10,000.

### Demographics

Age, nationality, and other background information can sometimes be helpful understanding the problems a user encountered.

| Pseudonym | Demographics |
| :--- | :--- |
| Bob | 20 / Male / Caucasian / College Student |
| Ivan | 61 / Male / Caucasian / Retired Engineer |
| Brena | 30 / Female / Caucasian / Math Tutor |
| Gabriella | 22 / Female / Caucasian / College Student |



### Observations

Note the users interactions with the system for each of the tasks.
Record the success, failures, and problems the user encountered for each task.
Note any aid that was given along with anything you notice from their use of the application.
Add issues to GitHub for any changes necessary to the system.

| Task | problem, aid, observation | hi/med/low | github#  |
| :--- | :--- | :---: | :---: | 
| 1 | Didn't have any problems with this task, added destinations by clicking on the map, recognized that they could delete destinations using the dropdown right away. | N/A | N/A |
| 2 | Had to search for the units menu - first opened the top-level dropdown thinking it would be in there, then opened the slider dropdown and opened the optimization popup before finding the units popup. Using the units popup seemed to be intuitive, though they didn't like that they had to press Select and then Save to change the units. One click would be better. | Med | #413 |
| 1 | Did not have problems with this task. Was intuitively able to select a place in Fort Collins, add other locations around the map, and finish the trip in New Zealand. Only issue they had was accidentally adding a location they didn't intend to with a misclick. | N/A | N/A |
| 2 | Tried to search for units menu in the hamburger menu. They tried multiple of the buttons in the dropdown before realizing it wasn't in there. After clicking out of the hamburger menu they went to the sliders menu button and was able to change units. They did not like having to hit Select to choose the units and then Save to change the units. Having the select button also acting as the save would be better. | Low | #413 | 
| 1 | First thing they did was edit the trip name which was intuitive. Did not like the Leaflet map as much as Google Maps as it was less fluid feeling. Was intuitively able to select a place in Fort Collins but wanted to double-click when the app requires a single click. Ocassionally added places by accident but was quickly able to find the delete option. | Low | N/A |
| 2 | Tried to search for units menu in the hamburger menu. They tried multiple of the buttons in the dropdown before realizing it wasn't in there. After clicking out of the hamburger menu they went to the sliders menu button and was able to change units. They did not like having to hit Select to choose the units and then Save to change the units. Having the select button also acting as the save would be better. | Low | #530 | 
| 1 | Gabriella did not have any probelms with this task. She understood what the applicaiton was designed to do and was able to select places in Fort Collins and in other areas in the world. She intuitivly deleted selections and enjoyed how the distances were displayed. | N/A | N/A |
| 2 | She found the units menu pretty quickly and liked the nautical miles selection. The only thing she did not like about it was having to click save after selecting the unit of measurement. As stated previously, one click to change the units would be "less clunky" and more intuitive. | Med | #413 |

