# Sprint 5 - *T26* - *VNER*

## Goal
### *Release!*

## Sprint Leader: 
### *Eric *

## Definition of Done

* The Increment release for `v5.x` created as a GitHub Release and deployed on black-bottle under TEAM.
* The design document (`design.md`) is updated.
* The sprint document (`sprint.md`) is updated with scrums, completed metrics, review, and retrospective.

## Policies

### Mobile First Design
* Design for mobile, tablet, laptop, desktop in that order.
* Use ReactStrap for a consistent user experience (no HTML, CSS, style, etc.).

### Clean Code
* Code Climate technical debt ratio less than the class mean.
* Minimize code smells and duplication.

### Test Driven Development
* Code Climate technical debt ratio less than the class mean.
* Minimize code smells and duplication.
### Processes
* Incremental development.  No big bangs.
* Main is never broken. 
* All pull request builds and tests for Main are successful.
* All dependencies managed using Maven, npm, and WebPack.
* GitHub etiquette is followed always.


## Planned Epics

"Find Places Type Server" - Server side functionality for searching places by type.
The user would like to receive a list of places of a specific type. The server should query the database for places only of that type, and return the results in an http response to the client in JSON format.

"Find Places Country Server" - Server side functionality for searching places by country.
The user would like to receive a list of places filtered by country. The server should respect this request and only query the database for places that are located in that country when asked.

"Find Places Random" - Implement ability to add random places to the trip.
The user would like to find random places to add to their trip. When the user searches for trips with an empty search string, random places should be returned instead. Any other specifications such as country of origin should still be respected.

"Save Trip" - The user would like to be able to save their trip.
The user would like to save in JSON or CSV format and have the ability to choose the default format they prefer and the system should remember the format for future sessions.

"Increase Test Coverage" - The team will work to increase test coverage of client-side code in order to raise test coverage as high as possible before the final release.

"UX Improvements" - The team has performed UX experiments and wants to work on implememting better user interface designs to increase user experience with the application.

"Map Improvements" - The user would like to be able to change the line color as well as choose different map backgrounds.

## Metrics

| Statistic | # Planned | # Completed |
| --- | ---: | ---: |
| Epics | *7* | *4* |
| Tasks |  *49*   | *40* | 
| Story Points |  *43*  | *37* | 

We are focusing a lot on increasing our test coverage for this final sprint before product release. We are also working towards getting the required functionality completed and are working on doing a final cleanup of the UI in order to increase UX.

## Scrums

| Date | Tasks closed  | Tasks in progress | Impediments |
| :--- | :--- | :--- | :--- |
| *date* | *#task, ...* | *#task, ...* |  | 
| *04/18* | *#578* | *#581, #582, #583, #594* |  | 
| *04/19* | *#594, #581, #582, #583* | * #590* |  | 
| *04/20* | *#590* | *#600* |  |
| *04/21*| *#600* | *#603, #604* |  |
| *04/22*| *#604* | *#603* |  |
| *04/25*| *#603, #477* | *#608* |  | 
| *04/26*| *#613* | *#613* |  | 
| *04/27*| *#615, #617, #621, #623* | *#615, #608, #617* |  | 
| *04/28*| *#621, #623* | * * |  | 
| *05/02*| *#631, #636, #639, #597, #413* | *#631, #636, #639* |  |
| *05/03*| *#628, #632, #642* | * #633, #645* |  |
| *05/04*| *#633, #645* | * * |  |

## Review

### Epics completed  

"Save Trip" - The user would like to be able to save their trip.
The user would like to save in JSON or CSV format and have the ability to choose the default format they prefer and the system should remember the format for future sessions.

"Increase Test Coverage" - The team will work to increase test coverage of client-side code in order to raise test coverage as high as possible before the final release.

"UX Improvements" - The team has performed UX experiments and wants to work on implememting better user interface designs to increase user experience with the application.

"Map Improvements" - The user would like to be able to change the line color as well as choose different map backgrounds.

### Epics not completed 

"Find Places Type Server" - Server side functionality for searching places by type.
The user would like to receive a list of places of a specific type. The server should query the database for places only of that type, and return the results in an http response to the client in JSON format.

"Find Places Country Server" - Server side functionality for searching places by country.
The user would like to receive a list of places filtered by country. The server should respect this request and only query the database for places that are located in that country when asked.

"Find Places Random" - Implement ability to add random places to the trip.
The user would like to find random places to add to their trip. When the user searches for trips with an empty search string, random places should be returned instead. Any other specifications such as country of origin should still be respected.

## Retrospective

### Things that went well
We ended up getting all of the base functionality that the client asked for but we did not end up getting many of the improvements to the functionality completed. We ended up finishing 82% or our tasks and 86% of our story points for the sprint. Overall we did a great job

### Things we need to improve
We did not follow our burndown chart projection as well as we could have. The team took more time off this sprint compared to the last sprint. We also completed the UI for certain functionalities but failed to actually finish the server side functionality which ended meaning we wasted time on components that were not used.

### What did we learn througout this class
We all have learned the value of Agile methodologies and scrum. We have all learned how scrum and agile allow for a more rapid and flexible software development process, which can be beneficial when working on complex or rapidly changing projects like this one. We improved communication and collaboration between each other which led to better code quality and a more efficient development process. The processes we followed placed a strong emphasis on customer satisfaction, which helped ensure that the final product met the needs and expectations of the customer. We as a team promoted transparency throughout the software development process, which helped to reduce errors and improve the quality of the final product.
