# Sprint 1 - *t26* - *VNER*

## Product Goal
### *The Product Goal is an easy-to-use mobile trip planning application that satisfies a global audience.*

## Sprint Goal
### *Tell them who we are.*

## Scrum Master
### *Eric *

## Definition of Done

* The Increment release for `v1.x` created as a GitHub Release and deployed on black-bottle under SPRINT.
* The design document (`design.md`) is updated.
* The sprint document (`sprint.md`) is updated with scrums, completed metrics, review, and retrospective.


## Policies

### Mobile First Design
* Design for mobile, tablet, laptop, desktop in that order.
* Use ReactStrap for a consistent user experience (no HTML, CSS, style, etc.).

### Clean Code

### Test Driven Development

### Processes
* Main is never broken. 
* All pull request builds and tests for Main are successful.
* All dependencies managed using Maven, npm, and WebPack.
* GitHub etiquette is followed always.


## Planned Epics

**1. "Team Identification" - Providing the user with the name of the team.**

The user wants to know the name of the team that built the application components that they are currently utilizing. This name will identify our team to the rest of the organization. We will update the browser tab name as well as all other locations on server and client that require a team name.

**2. "About" - Providing the user with information about the team and the people on the team.**

The user wants to know more about the team that built the application. This is an important factor in their choice of which product to use. We need to add an image and mission statement for the team, as well as an image, name, and bio for each team member. It's important that we maintain a consistent style, format, and voice across all content.

**3. "Load Trip" - Implementing the ability to restore saved past trips.**

The user would like to load a previously saved trip that is stored on their system. The file format must be compatible with the file specification so trips from other applications may be loaded.

**4. "Save Trip" - Providing the user with a method to save their trips.**

The user would like to be able to save their trip in a format they could load back into this or other applications. The file must be formatted to display in a spreadsheet or similar tool. The user would like to choose the default format they prefer and the system should remember the format for future sessions. They should still be able to save in other formats. Acceptable formats are listed in the file specification. Files are saved in the local filesystem.

**5. "Save Map" - Providing the user with a map in SVG or KML file format.**

The user would like to save the map in SVG or KML file formats so they can view the trip in other tools. This will allow them to share or reuse previous routes for future tours. It is important that the files are retrievable so they can be utilized in other applications.

**6. "Interoperability" - Adding portability and compatibility features for cross-service and cross-server use as well displaying available UI features.**

The user would like to be able to use different services to plan their trip. The client should list the available features on the server it is connected to, and the client should verify that the necessary features are available and let the user know if they are not. The client should not provide/advertise features in its user interface that are not supported. In addition, the client must be able to operate with other servers that implement the protocol.


## Metrics

These metrics reflect what was planned at the beginning of the sprint and what we actually completed by the end of the sprint.

| Statistic | # Planned | # Completed |
| --- | ---: | ---: |
| Epics | *6* | *2* |
| Tasks |  *13*   | *22* | 
| Story Points |  *13*  | *19* | 


## Scrums

This allows us to track our progress on tasks during the scrum.
The #*task* numbers refer to the issue numbers in GitHub.

| Date | Tasks closed  | Tasks in progress | Impediments |
| :--- | :--- | :--- | :--- |
| *01/25/2022* | #*2,4,8,9* | #*none* | *none* |
| *01/26/2022* | #*11,13,14,17,19,21,23,25* | #*none* | *none* |
| *01/28/2022* | #*none* | #*26,27,28,29,30,32* | *Lack of staff* |
| *01/29/2022* | #*26,27,28,29,30,32,36,38,40* | #*34,35,43,44,45* | *none* |
| *01/30/2022* | #*48* | #*34,43,49,50,51,52,53,54,55,56,57,58* | *Lack of staff* |
| *01/31/2022* | #*59,60,61,62,63,64,65,66,68,84* | #*34,43,49,50,51,52,53,54,55,56,57,58,79,80* | *none* |
| *02/01/2022* | #*none* | #*34,43,49,50,51,52,53,54,55,56,57,58,79,80,87* | *Lack of staff* |
| *02/02/2022* | #*35,44,45,49,50,51,52,55,56,79,80,87,89,90* | #*34,43,53,54,57,58* | *none* |
| *02/03/2022* | #*34,43,53,54,57,58,106,114* | #*69,70,74,77* | *Did not complete 4 optional epics* |



## Review

#### Epics completed  

###### Team Identification
The purpose of this Epic was to provide the user with information about the team that is building their product. This epic included choosing a name to represent our team to the organization as well as updating the team identification in multiple places. We split this epic into 5 separate tasks, two of which were altering information displayed to the client amd in the browser tab. The other three tasks were adding our team name into server request files so our information is properly displayed to those using our server/product. We did not face any major issues with completing this epic -- by splitting it into small and manageable tasks it was simple and straightforward. 

###### About
The purpose of this Epic was to provide additional information about team collectively as well as its individual members. This epic required adding team member information inclduing their image. their name, and a short biography. In order for our team to present a professional image we used a consistent voice in our writings and followed the same formatting and style. Additionally, we designed our About page to minimize clutter and clearly present the information. It was necessary to deconstruct this epic into many small tasks because the information was about the individual team members -- meaning each team member was responsible for adding their own information and image. This was a successful approach because it clearly delegated responsibilities and made the individual tasks small enough to be completed in a short timeframe. 
 
#### Epics not completed
 
###### Load Trip
We included this epic into the Sprint Plan because we wanted the possibility to complete additional epics, time permitting. A combination of a lack of time as well as an unclear development path caused our team to not complete this epic during this sprint.

###### Save Trip
We included this epic into the Sprint Plan because we wanted the possibility to complete additional epics time, time permitting. A combination of a lack of time as well as an unclear development path caused our team to not complete this epic during this sprint. 

###### Save Map
We included this epic into the Sprint Plan because we wanted the possibility to complete additional epics time, time permitting. A combination of a lack of time as well as an unclear development path caused our team to not complete this epic during this sprint.

###### Interoperability
We included this epic into the Sprint Plan because we wanted the possibility to complete additional epics time, time permitting. A combination of a lack of time as well as an unclear development path caused our team to not complete this epic during this sprint.

## Retrospective

#### Things that went well
We split small tasks up into smaller tasks and utilized ZenHub well. All of us contributed to the sprint and committed changes. We had good communication throughout the sprint in the slack channel, and when any of us got confused about any part of the project, we reached out to another member or to the rest of the team as a whole.

#### Things that we need to improve
We were still working on tasks with only a couple hours left until the deadline. This meant we had to conduct our sprint review/retrospective late at night and right before the deadline. We need to aim to have a finished release the day before the release date, not the day of.

We had some pull requests that were left for two days, so we should be checking github more frequently as a team to make sure no pull requests are left to dry. We'll try to make our burndown chart look more linear and not have steep dropoffs at the end of the sprint.

We need to remember to assign tasks to ourselves and dragging them to the In Progress column prior to starting them.

#### One thing we will change next time
We will have a fully working release that is demo-ready and on the black-bottle server at the latest the day before the release date. This is to give us time to have a proper sprint review and retrospective before the sprint is finished.