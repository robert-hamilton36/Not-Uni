#### Major Components

| Route | Component | Notes |
|---|---|---|
| / | App | Root Component |
| / | Nav | Shows on all pages |
| / | Search Modules | 
| /categories | View All Categories |
| /categories/:name | View all modules for selected category
| /module | View individual module 
| /login | Login | NOT Authenticated |
| /register | Register | NOT Authenticated |
| /userID | User profile, view saved and created modules | Authenticated |
| /create | Authenticated |
|---|---|---|



#### Components & Children

App\
\
-- Nav\
-- -- Login\
-- -- Register\
\
Home\
\
Categories\
\
-- Module-Card\
-- -- Module\
\
Profile\
\
-- Module-Card\
-- Create-Module

## Wire Frames



![login and register](/pics/login-register.png)

![homepage and search page](/pics/homepage-search.png)

![create module](/pics/create.png)

![view module](/pics/moduleView.png)

![user profile](/pics/profile.png)



## Database

![database diagram](/pics/database-diagram.png)



## Routes

| Method | Path | Description | NOTES |
|---|---|---|---|
| POST | /api/v1/register | adds a user - registering them | Firebase
| POST | /api/v1/login | logging in a user and getting user info from DB | Firebase
| GET | /api/v1/modules | gets all modules available
| GET | /api/v1/modules/:moduleID | gets one module
| GET | /api/v1/modules/saved | shows the logged in persons saved modules
| GET | /api/v1/modules/created | shows modules created by logged-in user
| POST | /api/v1/modules/saved/:id | saves a module to users profile
| GET | /api/v1/user | Get the user information
|---|---|---|---|


## Global State


```javascript
user{
  name: str,
  saved:[module_id,module_id],
  created:[module_id,module_id]
}

modules{
  id: int,    //module_id
  author: str,
  time: str,
  numOfElements: int,
  elements:[
    {
      element_id:int,
      title:str,
      link: str,
      txt: str
    },
    {
      element_id:int, 
      title:str,
      link: str,
      txt: str
    }
  ]
}
```
## Auth

Helper info: https://medium.com/firebase-developers/how-to-setup-firebase-authentication-with-react-in-5-minutes-maybe-10-bb8bb53e8834
