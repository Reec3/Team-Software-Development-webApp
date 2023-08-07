# Inspection - Team *T26* 

The goal of an Inspection is to find defects.
We first identify the code we wish to inspect, determine the time we wish to meet, and determine the checklist we will use to find faults in our code during the preparation before the meeting.

|  | Details |
| ----- | ----- |
| Subject | /client/src/components/Trip/Itinerary/OptTrip.js |
| Meeting | 4/6/2022 |
| Checklist | ./checklist.md |

### Roles

We note the amount of time each person spent reviewing the code in preparation for the meeting.

| Name | Preparation Time |
| ---- | ---- |
| Victor | 30 min |
| Eric | 25 min |



### Problems found

We list each potential defect we found in the code during our preparation so we can discuss them in the meeting.
We add a GitHub issue for each defect that requires a modification to the system.

| file:line | problem | high/med/low | who found | github#  |
| --- | --- | :---: | :---: | --- |
| OptTrip.js:62:68 | This logic probably needs to happen server-side, since we have no way to send the value of *optMethod* to the server when a tour request is made. | high | Victor | #477, #478 |
| OptTrip.js:1 | useEffect is not used in this class and does not need to be imported | low | Eric |  |
| OptTrip.js:10| optMethodTypes will most likely need to be determined server side so this can be removed| high | Eric | #477, #478 |
| OptTrip.js:25| optMethodTypes will most likely need to be determined server side so this can be removed | high | Eric | #477, #478 |
| OptTrip.js:45:51| Preview of distanced saved with optimization and associated units will need to be added | low | Eric | #534 |
| OptTrip.js:45:51| Preview of map post optimization | low | Eric | #534 |
