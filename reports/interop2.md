# Interop for t26

Interoperability testing allows us to verify correct operation when connected to another team's client or server.
Each team member will verify interoperability with the client and server from another team.
Each of the different aspects of the protocol will be verified.
We will discuss these issues with the other team and create defects in GitHub for any problems found in our system.
 
### Other Teams

This table lists each student in the team, the team they verified interoperability with, and the time to complete the testing.

| Name | Team | Time |
| ---- | ---- | ---- |
| Eric  | 5 | 2/20/2022 8:35:03 PM MST |
| Victor  | 7 | 2/20/2022 7:03 PM MST |
| Reece  | 9 | 2/19/2022 9:53 PM MST |
| Nicholas  | 10 | 2/20/2022 9:35 PM MST |

### Client Problems found

We found these problems when connecting our client to another team's server.

| team | problem | github# |
| :--- |  :--- | --- |
| t05 High Five | Response from server was 404 for distance requests which is technically correct since distance is not implemented yet| issue #1654|
| t07 Opulence | Distances API endpoint is set up, but not working properly. The response received from the server is missing the distances array so it does not pass the schema validation. Valid distances requests all returned a 400 error code. The Distances feature is also missing from the Config response. Postman did verify that the server correctly returns the same request type, earth radius, and list of places in the response. |  |
| t09 Grapefruits | Distances not listed in config response. Distances endpoint not enabled, 404 error code returned from server when valid distances request is sent. | |
| t10 Random Code Generators| Distance API endpoint is setup and working properly. The response received from the server passes the schema validation. Postman verified that the server correctly returns the same request type, earth radius, and list of places in the response. 2/3 test cases returned with unexpected distance values. |  |


### Server Problems found

We found these problems when connecting the other team's client to our server.

| team |  problem | github# |
| :--- |  :--- | --- |
| t05 High Five | None found. | N/A |
| t07 Opulence | None found. |  |
| t09 Grapefruits | None found. |  |
| t10 Random Code Generators | None found. |  |

