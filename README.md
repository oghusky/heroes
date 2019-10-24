## Wednesday Sesssion 10/23/19
- We created the boilerplate for a full stack application
### How to start app
- 1. run "npm i" in both the "heroes" folder and "heroes/client"
- 2. open "Postman" and next to where it shows the name method of the routes "GET, POST" etc type in "localhost:5000/api/heroes"
### How to use
- 1. make sure the routing name in your "Postman" left of the route link "localhost:5000/api/heroes" says "GET"
- 2. Hit "Send"
-- a. This will initially show an empty array "[]"
#### To add a new Hero
- 1. Change route method name from "GET" to "POST"
-- a. In the toolbar below the link and route method you will see "params", "authorization", "headers", "body", etc
-- b. Click on "Body"
-- c. Under that tool bar is a third that displays "none", "form-data", "x-www-form-urlencoded", "raw", "binary", "GraphQL" and a final option is a drop down
-- d. choose "raw"
-- e. In the option with the drop down choose "JSON"
2. Once you have to previous options set there is a text area under the third toolbar
-- a. in the text area type:
{
  "name": "<\your name>",
  "ability": "<\your ability>"
  "powerLevel": "<\your powerLevel>"
}
-- b. Hit "Send" button next to link