# Sprint 4 - *t26* - *VNER*

## Goal
### *Shorter tours!*

## Sprint Leader: 
### *Victor *

## Definition of Done

* The Increment release for `v4.x` created as a GitHub Release and deployed on black-bottle under SPRINT.
* The design document (`design.md`) is updated.
* The sprint document (`sprint.md`) is updated with scrums, completed metrics, review, and retrospective.

## Policies

### Mobile First Design
* Design for mobile, tablet, laptop, desktop in that order.
* Use ReactStrap for a consistent user experience (no HTML, CSS, style, etc.).

### Clean Code
* Code Climate maintainability of A (technical debt ratio==0).
* Minimize code smells and duplication.
* Use Single Responsibility Principle.

### Test Driven Development
* Write the tests before the code.
* Unit tests are fully automated.
* Code coverage is 80% minimum.

### Processes
* Incremental development.  No big bangs.
* Main is never broken. 
* All pull request builds and tests for Main are successful.
* All dependencies managed using Maven, npm, and WebPack.
* GitHub etiquette is followed always.


## Planned Epics

1. "Find Places Basic Client" - Client side additions to provide string search functionality

The user would like to search for places in the client with a simple UI.

2. "Shorter Trip" - Optimizing the route to minimize round trip distance

The user would like to see a shorter version of the trip to the same destinations if one exists.

3. "Find Places Type Server" - Server side functionality for searching places by type.

The user would like to receive a list of places of a specific type. The server should query the database for places only of that type, and return the results in an http response to the client in JSON format.

4. "Find Places Type Client" - Client side additions for searching places by type.

The user would like to search for specific types of places, e.g. airports, breweries, etc. The user should be able to enter a type of place into the search bar and receive a list of places that are of that type.

5. "Find Places Country Server" - Server side functionality for searching places by country.

The user would like to receive a list of places filtered by country. The server should respect this request and only query the database for places that are located in that country when asked.

6. "Find Places Country Client" - Client side additions for searching places by country.

The user would like to search for places within a specific country. A dropdown should be added to the search places popup that allows the user to select which country (including All Countries) to narrow their search.

7. "Find Places Random" - Implement ability to add random places to the trip.

The user would like to find random places to add to their trip. When the user searches for trips with an empty search string, random places should be returned instead. Any other specifications such as country of origin should still be respected.


## Metrics

| Statistic | # Planned | # Completed |
| --- | ---: | ---: |
| Epics | 7 | 4 |
| Tasks | 24 | 43 |
| Story Points | 37 | 45 |


## Scrums

| Date | Tasks closed  | Tasks in progress | Impediments |
| :--- | :--- | :--- | :--- |
| *date* | *#task, ...* | *#task, ...* |  | 
| 3/30 | #462,  #465, #480 | #466, #495 |  | 
| 4/1 | #466, #495 | n/a | Getting going on OptimizeTour/overall lack of understanding  | 
| 4/4 | #501, #472, #470 | #473, #475, #483 | |
| 4/6 | #507, #506, #505, #473, #504, #475, #494, #511, #515, #513, #483, #476, #510 | #519, #482 | |
| 4/13 | #519, #482, #319, #549, #418, #547, #320, #321, #323, #544, #542 | #322, #551, #545 | |


## Review

### Epics completed  
1. Find Places Basic Client
The user can search for places by name or location in the Search popup. They can also add a place by entering its coordinates into the search bar.

1. Shorter Trip
The user can optimize their trip by clicking on the optimize button in the Trip slider menu, and this will greatly reduce their trip's round-trip total distance.

1. Find Places By Type Client
We built a UI for filtering search results by Type of place, and modified the requests that are sent to the server. The UI is currently hidden because the server-side code hasn't been finished yet.

1. Find Places By Country Client
We built a UI for filtering search results by country, and modified the requests that are sent to the server. The UI is currently hidden because the server-side code hasn't been finished yet.

### Epics not completed 
1. Find Places By Type Server
Backend communication between server and database needs to be updated to query by type.

1. Find Places By Country Server
Backend communication between server and database needs to be updated to query by country.

1. Find Places Random
Front end needs an "I'm Feeling Lucky" button to send a {match="" limit=1} request to the server, and server needs to query server for one random place in database and respond with result.

## Retrospective

### Things that went well
We had almost as many Pull Requests as Story Points completed, so we broke down tasks into small enough issues that one pull request only covered one issue. We also added almost 20 more tasks throughout the sprint as we discovered new issues and split up some larger tasks.

### Things we need to improve
We only finished 75% of our created story points, and our burndown chart didn't look great during the sprint. We overestimated how much we could get done, and ended up with several half-finished epics.

### One thing we will change next time
We'll focus more on finishing one epic completely before moving on to another one. All of us don't need to work on the same epic, but we should individually try to stick to the epic we're currently working on.
