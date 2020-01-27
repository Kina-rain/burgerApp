# Burger App
App to Devour Burgers

## Overview

This project was to create a burger application with MySQL, Node, Express, Handlebars and a homemade ORM. The Burger App was made so that a
user may order and click burgers that they may eat. The Burgers that are ordered move to the devoured list and can be deleted from that list.
This project followed the MVC design pattern; using Node and MySQL to query and route data in the app. The project also used Handlebars to
generate the HTML. The project was also uploaded to Heroku.

## Heroku Link:

* Link: https://hidden-garden-54962.herokuapp.com/

I utilize the [MYSQL Heroku Deployment Guide](../../03-Supplemental/MySQLHerokuDeploymentProcess.pdf) in order to deploy this assignment.

## Screen Shot

* Link: https://github.com/Kina-rain/burgerApp

![alt text][screenshot]

[screenshot]: https://github.com/Kina-rain/burgerApp/blob/master/screenshot.png "Burger Project"

## References

* stackoverflow

* youtube videos on Intro to MVC and Handlebars

* jQuery.com

### Project Used the following packages:

* express

* express-handlebars

* handlebars

* mysql

* body-Parser

#### Directory structure

All the recommended files and directories from the steps above should look like the following structure:

.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```
