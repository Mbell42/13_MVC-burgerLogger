# UCSD-CodeBootCamp-13_MVC-burgerLogger

For this assignment, I will create a burger logger using MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Be sure to follow the MVC design pattern; use Node and MySQL to query and route data in the app, and Handlebars to generate the HTML.

Instructions:

------------
Instructions are located in the readme.md file in the root folder of the hw assignment repository: <https://ucsd.bootcampcontent.com/UCSD-Coding-Bootcamp/UCSD-SD-FSF-PT-12-2019-U-C/blob/master/13-MVC/02-Homework/Instructions/homework_instructions.md>

Resources used:

------------

- GitBash
- GitHub
- nodeJS
- nodeJS modules:
       - MySQL
       - Express
       - Sequelize
       - body-parser
- MySql
- Oracle
- Handlebars

Progress:

------------
2020.03.17_10~~ - Initial Commit.  Created and cloned repository to my local drive.  I then imported 'instructions' folder from class files.  I then created empty folder structure and initialized 'readme.md'.

2020.03.25_1128 - I added 'LICENSE.txt' to the project root folder, using the MIT License.

2020.03.25_1132 - I installed npm module 'express' and created 'package-lock.json'.

2020.03.28_0559 - I completed researching and practicing for this app by following a tutorial at 'https://bezkoder.com/node-js-express-sequelize-mysql/' by following along and creating a full-stack app from scratch using node,js,express,sequelize, and mysql.  After testing al functionality, I then added this project to '/_practice'.  I will now continue on the main project.

2020.03.28_0649 - I finished building folder structure and adding required files with gitBash.  I then added pseudo-code directly from the instructions in each file to help give me a satrting point.  I then created 'schema.sql', and added the necessary code to drop, create, and use 'burgers_db', as well as create the 'burgers' table.  I then created 'seeds.sql', and added the necessary code to insert 4 burgers, whose names I got from the TV show 'Bob's Burgers'.

2020.03.28_0708 - I completed initial setup, except for adding routes, to 'server.js' With the steps for 'App Setup' and 'DB Setup' complete, I will now begin step for 'Config Setup'.

2020.03.28_0713 - I added code to connect Node to MySQL in 'connection.js'.  I will now begin coding 'orm.js'.

2020.03.28_0736 - I have changed the format of the connection in 'connection.js', and added an error message for if the connection fails.  I then added the orm dependency to 'burger.js'.  I then added some pseudo-code to 'orm.js'.

2020.03.28_0758 - For 'orm.js', I added two helper functions, one for assisting with SQL syntax, and one for converting object key/value pairs to SQL.  I then created a function for displaying all burgers, and a function for creating a new burger and adding it to the database.

2020.03.28_1452 - For model 'burger.js', I added the Burger object and its associated methods.  I then used module.exports to export the Burger object.  I will next work on Controller Setup.

2020.03.28_1458 - For model 'burger.js', I added deleteBurger method to the Burger object.

2020.03.28_1502 - For controller 'burgers_controller.js', I added dependencies, created empty router with express, and used modules.export to export the router.

2020.03.28_1508 - For controller 'burgers_controller.js', I added pseudocode for each necessary route.

2020.03.28_1517 - For controller 'burgers_controller.js', I added route logic for returning all Burgers.

2020.03.28_1522 - For controller 'burgers_controller.js', I began to add route logic for adding a new Burger to the database by defining the route, and I reviewed/updated all of my project files to use arrow function syntax.

2020.03.28_1918 - For controller 'burgers_controller.js', I added route logic for adding a new Burger to the database and for updating an existing Burger in the database.

2020.03.28_1923 - For controller 'burgers_controller.js', I added route logic for deleting a Burger from the database.

2020.03.28_1941 - For view 'main.handlebars', I added dependencies and added the body section so it is able to be used by Handlebars.  For view 'index.handlebars', I added a Header section, and began a row section for Burgers waiting to be devoured.

2020.03.28_1952 - For view 'index.handlebars', I added sections for input to add new Burgers, and a section for Devoured Burgers.

2020.03.28_1926 - For view 'index.handlebars', I completed each section, added a form and button for adding 'new' Burgers, added a button for updating the status of a Burger from 'waiting to be devoured' to 'devoured', and added a button for removing Burgers that have been 'devoured'.  I then reviewed spelling in each file.

2020.03.28_1926 -  I added npm install for 'cors'.

2020.03.28_1928 -  I added routes in 'server.js'

2020.03.28_2145 -  I re-created database, and then ran nodeJS and solved bug issues with miss-spellings and an incorrect path.  These fixes were for 'connection.js' and 'burgers_controller.js' and 'server.js'.

2020.03.28_2148 -  I added app to Heroku, connected project GitHub repository, and enabled automatic deploys.

2020.03.28_2151 - I changed app folder structure such that the app resides in the github repository root folder.

2020.03.28_2155 - I am now trying to track down a bug where the response for the hosted url for the app on Heroku reads 'Method Not Allowed'.

2020.03.28_2218 - I updated '.gitignore' to only include node_modules.  I then added a missing semicolon in 'burgers_controller.js', and updated quote styles in 'server.js' and changed a parameter name in 'orm.js'.
