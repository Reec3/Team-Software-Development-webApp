# Sprint 2 - *t26* - *VNER*

## Goal
### *How far is it?*

## Scrum Master: 
### *Victor *

## Definition of Done

* The release for `v2.x` created as a GitHub Release and deployed on black-bottle under TEAM.
* The design document (`design.md`) is updated.
* The sprint document (`sprint.md`) is updated with scrums, completed metrics, review, and retrospective.

## Policies

### Mobile First Design
* Design for mobile, tablet, laptop, desktop in that order.
* Use ReactStrap for a consistent user experience (no HTML, CSS, style, etc.).

### Clean Code
* Code Climate technical debt ratio < 5.
* Minimize code smells and duplication.

### Test Driven Development
* Write the tests before writing the code.
* Tests are fully automated.

### Processes
* Main is never broken. 
* All pull request builds and tests for Main are successful.
* All dependencies managed using Maven, npm, and WebPack.
* GitHub etiquette is followed always.


## Planned Epics

**1. "Load Trip" - Implementing the ability to restore saved past trips.**

The user would like to load a previously saved trip that is stored on their system. The file format must be compatible with the file specification so trips from other applications may be loaded.

**2. "Distances" - Provide distances for the user related to their trip.**

The user would like to know the distances related to their trip, including the return leg to the starting point. Assume an airborne conveyance that can go directly to the destination without roads or other inconveniences. Show distance between legs, cumulative distance at each leg, and total trip distance.

**3. "Interoperability" - Ensure user is able to use different services to plan their trip.**

The user would the client to be able to operate with other servers that implement the protocol. The client should be able to verify if the necessary features are available and if they are not, inform the user. The client should also not provide or advertise features that are not supported in its user interface.

## Metrics

| Statistic | # Planned | # Completed |
| --- | ---: | ---: |
| Epics | 7 | *count* |
| Tasks |  35   | *count* | 
| Story Points |  43  | *sum* | 


## Scrums

| Date | Tasks closed  | Tasks in progress | Impediments |
| :--- | :--- | :--- | :--- |
| 2/11 | #144, #145 | #151 | General unfamiliarity with React, need to study ZyBooks more |
| 2/14 | #151, #167, #166, #158, #155, #152 | #147 |  |
| 2/16 | #207, #170, #169, #168, #164, #163, #162, #160, #159, #206, #147 | #205, #202 | |
| 2/18 | #214, #202, #205, #216, #171, #221 | #165, #161 | |
| 2/21 | #150, #229, #231, #232, #234, #233, #236, #235 | | |
| 2/23 | #264, #203, #101, #154, #271, #259 | #261, #153, #267, #266, #250 | |


## Review

### Epics completed  
1. Distances Server Interface
2. Distances UI
3. Interoperability

### Epics not completed 
1. Distance Units - Partially completed, missing support for custom units.
2. Load Trip - Partially completed, missing support for CSV files and uploading units/radius.
3. Save Trip
4. Save Map


## Retrospective

### Things that went well
Our burndown report looks really good. We accomplished almost all of our story points. Only 2 were remaining.
We maintained our ZenHub issues by rewriting issues, splitting issues into smaller ones, and adding new issuse as we worked throughout the sprint.

### Things we need to improve
We had a few large PR's that could have been broken up into smaller PR's/issues.
There were several times when we would start on a task that wasn't yet an issue, create a PR, and then make an issue after-the-fact. Instead, we need to make issues before starting on a task, assign it to ourselves, and move it to the In Progress pipeline to increase transparency in our workflow. When planning our sprint, we will make a few larger tasks with bigger story point estimates, and then split those issues up into smaller issues as we start working on it.

### One thing we will change next time
We will make sure to always create issues before starting on a task, and during our scrum meetings we will talk about what we need to work on and create tasks during the meeting if needed.
