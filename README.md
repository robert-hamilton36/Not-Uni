
## Database

![database diagram](/database-diagram.png)



## Routes

| Method | Path | Description | NOTES |
|---|---|---|---|
| POST | /api/v1/register | adds a user - registering them | Firebase
| POST | /api/v1/login | logging in a user and getting user info from DB | Firebase
| GET | /api/v1/modules | gets all modules available
| GET | /api/v1/modules/:moduleID | gets one module
| GET | /api/v1/modules/saved | shows the logged in persons saved modules
| GET | /api/v1/modules/created | shows modules created by logged-in user
| POST | /api/v1/walks/saved/:id | saves a module to users profile
| GET | /api/v1/user | Get the user information
|---|---|---|---|


