# Inspection - Team *T26 - VNER*

The goal of an Inspection is to find defects.
We first identify the code we wish to inspect, determine the time we wish to meet, and determine the checklist we will use to find faults in our code during the preparation before the meeting.

|  | Details |
| ----- | ----- |
| Subject | *client/src/components/Trip/Itinerary/SetUnits.js* |
| Meeting | *03/09/2022, , location* |
| Checklist | *./checklist.md* |

### Roles

We note the amount of time each person spent reviewing the code in preparation for the meeting.

| Name | Preparation Time |
| ---- | ---- |
| Victor  | 30 min |
| Nicholas  | 45 min |
| Eric  | 35 min |
| Reece  | 30 min |


### Problems found

We list each potential defect we found in the code during our preparation so we can discuss them in the meeting.
We add a GitHub issue for each defect that requires a modification to the system.

| file:line | problem | hi/med/low | who found | github#  |
| --- | --- | :---: | :---: | --- |
| SetUnits.js:107 | User may want to input more than 2 letters for unit name | Med | Eric  | #397 |
| SetUnits.js:97 | User wants selected units to persist between sessions | Med | Eric  | #398 |
| SetUnits.js:123 | The custom units row doesn't get highlighted when selected | Med | Victor  | #395 |
| SetUnits.js:120 | The select button doesn't set units/radius to custom input. Instead units/radius are set with onChange in input field. Causes selection bug. | Hi | Victor  | #413 |
| SetUnits.js:97 |User wants selected units to persist between sessions | Med | Eric  | #398 |
| SetUnits.js:86 |User may want the unit select button to apply and close window | Med | Nicholas  | #409 |
| SetUnits.js:125 |Remove Save button in Footer | Med | Nicholas  | #410 |
| SetUnits.js:58-67 | Combine variable definitions for refactoring purposes to shorten length of SetUnitsBody | Low | Reece  + Eric  | #401 |
| SetUnits.js:51-53 | Assess possibility to refactor the row declarations into a for loop in "DefinedUnitsRow selectedIndex={props.selectedIndex} rowIndex={i}" i=1,2,3 to reduce duplication | Med | Reece  | #402 |
