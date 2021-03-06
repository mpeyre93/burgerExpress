# Node Express Handlebars
# burgerExpress

### Overview

In this application features a burger logger with MySQL, Node, Express, Handlebars and a ORM. This follows the MVC design pattern; uses Node and MySQL to query and route data in the app, and Handlebars to generate the HTML.


### User-story / Criteria
```
* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

* The app will store every burger in a database, whether devoured or not.
```

#### App Setup Hx:

1. Created a GitHub repo

2. Created a package.json file by running `npm init` from the command line.

3. Installed the Express npm package: `npm install express`.

4. Installed the Handlebars npm package: `npm install express-handlebars`.

5. Installed MySQL npm package: `npm install mysql`.

5. Required the following npm packages inside of the server.js file:
   * express

   #### DB Setup

   1. Created a `db` Folder.

   2. Created `schema.sql`& `seeds.sql` files. Write SQL queries this file that do the following:

      * Created the `burgers_db`.
      * Created `burgers` table with these fields:
      * **id**: an auto incrementing int that serves as the primary key.
      * **name**: a string.
      * **devoured**: a boolean.
      * Wrote INSERT queries within `seeds.sql` to populate `burgers` table with 3 entires.

   4. Ran `schema.sql` and `seeds.sql` files into the mysql server from the command line by the following:

      * Within the `db` folder of app,

      * Start MySQL command line tool and login: `mysql -u root -p`.

      * With the `mysql>` command line tool running, enter the command `source schema.sql`. This will run schema file and all of the queries in it -- in other words, creating the database.

      * Insert entries defined in `seeds.sql` by running the file: `source seeds.sql`.

      * Close out of the MySQL command line tool: `exit`.

### Hosted on Heroku

* This application is deployed on Heroku, link to application below:
   https://dry-shore-33185.herokuapp.com/





