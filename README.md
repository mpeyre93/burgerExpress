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

* [Check out this video of the app for a run-through of how it works](https://youtu.be/msvdn95x9OM).


#### App Setup Hx:

1. Created a GitHub repo called `burger` and cloned it to machine.

2. Created a package.json file by running `npm init` from the command line.

3. Installed the Express npm package: `npm install express`.

4. Created a server.js file.

5. Installed the Handlebars npm package: `npm install express-handlebars`.

6. Installed MySQL npm package: `npm install mysql`.

7. Required the following npm packages inside of the server.js file:
   * express

   #### DB Setup

   1. Inside `burger` directory, created a `db` Folder.

   2. In the `db` folder, created `schema.sql`& `seeds.sql` files. Write SQL queries this file that do the following:

      * Created the `burgers_db`.
      * USE the `burgers_db`.
      * Created `burgers` table with these fields:
      * **id**: an auto incrementing int that serves as the primary key.
      * **burger_name**: a string.
      * **devoured**: a boolean.
      * Wrote INSERT queries within `seeds.sql` to populate `burgers` table with 3 entires.

   4. Ran `schema.sql` and `seeds.sql` files into the mysql server from the command line by the following:

      * Within the `db` folder of app,

      * Start MySQL command line tool and login: `mysql -u root -p`.

      * With the `mysql>` command line tool running, enter the command `source schema.sql`. This will run schema file and all of the queries in it -- in other words, creating the database.

      * Insert entries defined in `seeds.sql` by running the file: `source seeds.sql`.

      * Close out of the MySQL command line tool: `exit`.

### Hosted on Heroku

* **This application is deployed.** * Please see both the deployed Heroku link AND the link to the Github Repository for details! 
Be sure to utilize the [MYSQL Heroku Deployment Guide](../../03-Supplemental/MySQLHerokuDeploymentProcess.pdf) in order to deploy your assignment.

Please see [Heroku’s Account Verification Information](https://devcenter.heroku.com/articles/account-verification) for more details.


