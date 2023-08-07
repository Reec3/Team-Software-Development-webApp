# Sprint 3 - *t26* - *VNER*

## Goal
### *Where should we go?*

## Sprint Leader: 
### *Eric *

## Definition of Done

* The Increment release for `v3.x` created as a GitHub Release and deployed on black-bottle under TEAM.
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
* Write the tests before the code.
* Unit tests are fully automated.
* Code coverage is greater than the class mean.

### Processes
* Incremental development.  No big bangs.
* Main is never broken. 
* All pull request builds and tests for Main are successful.
* All dependencies managed using Maven, npm, and WebPack.
* GitHub etiquette is followed always.


## Planned Epics

1. "Load Trip" - Implementing the ability to restore saved past trips.

The user would like to load a previously saved trip that is stored on their system. The file format must be compatible with the file specification so trips from other applications may be loaded.

2. "Distance Units" - Implement ability to create custom units of measurement.

The user wants a way to specify what units the distances are displayed in. They also want to add their own custom units.

3. "Save Trip" - The user would like to be able to save their trip.

The user would like to save in JSON or CSV format and have the ability to choose the default format they prefer and the system should remember the format for future sessions. 

4. "Find Places Basic Server" - Server side functionality to allow user to query a database.

The user would like to find places to visit that match a simple string to add to their trip. This will involve checking user input against a database.

5. "Find Places Basic Client" - Client side additions to provide string search functionality

The user would like to search for places in the client with a simple UI.

6. "Find Places Type Server" - Server side functionality for searching places by type.

The user would like to receive a list of places of a specific type. The server should query the database for places only of that type, and return the results in an http response to the client in JSON format.

7. "Find Places Type Client" - Client side additions for searching places by type.

The user would like to search for specific types of places, e.g. airports, breweries, etc. The user should be able to enter a type of place into the search bar and receive a list of places that are of that type.

8. "Find Places Country Server" - Server side functionality for searching places by country.

The user would like to receive a list of places filtered by country. The server should respect this request and only query the database for places that are located in that country when asked.

9. "Find Places Country Client" - Client side additions for searching places by country.

The user would like to search for places within a specific country. A dropdown should be added to the search places popup that allows the user to select which country (including All Countries) to narrow their search.

10. "Find Places Random" - Implement ability to add random places to the trip.

The user would like to find random places to add to their trip. When the user searches for trips with an empty search string, random places should be returned instead. Any other specifications such as country of origin should still be respected.

## Metrics

| Statistic | # Planned | # Completed |
| --- | ---: | ---: |
| Epics | 10 | *6* |
| Tasks |  22   | *61* | 
| Story Points |  34  | *49* | 

We are confident in our ability to complete all the planned tasks/story points. We completed roughly 30 tasks in the last sprint, totaling 40 story points. We are likely going to add more tasks/story points during the sprint. We are more efficient and experienced than we were last sprint and will be able to complete the outlined tasks on time.

During this sprint we added quite a lot of issues and tasks and did not complete all of our planned epics but we made great progress. Due to database connection issues we were unable to complete one of our high priority epics but we will readily complete it in sprint 4.

## Scrums

| Date | Tasks closed  | Tasks in progress | Impediments |
| :--- | :--- | :--- | :--- |
| *03/02* | *#211, #266, #295, #325* | *#354, #356, #358,#360, #362, #365* | * n/a * | 
| *03/04* | *#331, #367, #332 #350, #354, #356, #358, #360, #362, #365* | *#368, #298* | * n/a * |
| *03/07* | * #368, #298 * | *#380, #378, #376, #294 #372* | * n/a * |
| *03/09* | * #308 #371, #395, #407, #411* | *#333, #384, #402 #409* | * n/a * |
| *03/11* | * #333, #384, #402 #409* | * #318, #336* | Spring Break |
| *03/13* | * n/a | *#393, #318, #336, 421* | Spring Break |
| *03/16* | * #393* | *#318, #336, #421, #425* | Spring Break |
| *03/17* | * #421, #423, #425, #397, #318, #336, #401 * | * n/a * | Spring Break |
| *03/21* | * #436, #438, #428 * | #430, #436, #438, #428, #432, #434 *| * Database Issues* |
| *03/23* | * #440, #434, #432, #442, #444, #452, #450, #446 * | *   #440, #442, #444, #452, #450, #446, #448  * | * Database Issues * |
| *03/24* | * #448 * | * n/a  * | * n/a * |


## Review

### Epics completed  

* Find Places Basic Server
* Distance Units
* Distances UI
* Distance Server Interface
* Load Trip
* Interoperability

### Epics not completed 

* Find Places Basic Client
* Save Trip
* Find Places by Type Server
* Find Places by Type Client
* Find Places by Country Server
* Find Places by Country Client
* Find Places Random

## Retrospective

### Things that went well
Our burndown report shows good incremental progress over the course of this sprint. Our ZenHub tasks were broken down well between epics and maintained flexibility for creating new tasks as they were needed. We improved on our test driven development techniques and added test cases for previously added components. We were focused on increasing our code maintainability and coverage and succeeded to raise our scores.

### Things we need to improve

There were a few elements that needed reworking after taking consideration to the user-experience. We need to make sure that we are thinking about the end-user while adding features to the app.Our code coverage and technical debt need to be maintained throughout development. Getting bogged down with tech debt slowed us down this sprint and we don't want to have that happen again in the future. Additionally, we need to focus on setting reasonable and manageable expectations in our planning and design phases so that we are not setting ourselves up with too lofty of goals. By keeping the scope of our work smaller and more approachable we can better focus on delivering the high-priority items that our client wishes to see progress on. 

### One thing we will change next time
We will make sure to write test cases before implementing different components and add test cases to maintain code coverage. We will strive to complete tasks that the client deems high-priority before trying to add additional features. We will try to build our components modularly and independent so that we will not have to change existing features when adding new ones. 

There were a few elements that needed reworking after taking consideration to the user-experience. We need to make sure that we are thinking about the end-user while adding features to the app. Our code coverage and technical debt need to be maintained throughout development. Getting bogged down with tech debt slowed us down this sprint and we don't want to have that happen again in the future. We really struggled as a team to understand how client side testing using Jest works. We are still working on this and hope to improve our code coverage even more next sprint.

### One thing we will change next time
We will make sure to write test cases before implementing different components and add test cases to maintain code coverage. We cannot afford to write code without coexisting testing being written at the same time. 

