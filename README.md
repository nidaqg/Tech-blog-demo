# Tech Blog Demo

![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)
![badge](https://img.shields.io/badge/license-MIT-orange)

A sample CMS-style blog site following the MVC paradigm created using Express.js, handlebars.js, Sequellize and express-session.

## User Story

AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

## Description

This project aimed at creating a CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well. The app follows MVC paradigm in it's architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM and express-session npm pakage for authentication.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing Guidelines](#contributing)
* [License](#license)
* [Questions](#questions)


## Installation

This app makes use of the following technologies:
1 express-handlebars
2 MySQL2
3 Sequelize
4 dotenv
5 bcrypt
6 espress-session
7 connect-session-sequelize

[Click here to view the deployed app](https://lychee-pie-95871.herokuapp.com/)

Alternatively, the repo can be downloaded and run locally. All the npm packages are provided in the package.json file and running npm i from the command line will install them all. After that just run npm start to start app.

## Usage

When a user navigates to the blog, they will be presented with a homepage with all blogposts along with each post's author and date of creation. No other page will be able to be accessed without being logged in and clicking on any of the blogposts will automatically direct the user to the login/signup page. The login page can also be reached from the link in the navbar. Once the user is logged in, they will be able to see a link to their dashboard + a logout button in the navbar. Now the user can click on any of the blogposts from the home page and they will be taken to the blog post page which will display the entire post, all comments on that blog as well as a field to leave a new comment. 
If the user navigates to their dashboard, they will see al the blogposts they have written, an option to edit or delete each of the posts as well as the option to add a new blogpost. If new blogpost is added, it will be displayed on the user's dashboard.
If the user is inactive for more then 1 minute they will automatically be logged out of the website and need to log in again to access it.


## Contributing
 ![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)

 Link to Contributor's Covenant:[Contributors Covenant](https://www.contributor-covenant.org/version/2/0/code_of_conduct/) 

 
## License
![badge](https://img.shields.io/badge/license-MIT-orange)
   
Copyright (c) [2021] [Nida Ghuman]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. 

## Questions

The repo for this project can be found here: https://github.com/nidaqg/Tech-blog-demo

Heroku link for ddeployed project can be found at: https://lychee-pie-95871.herokuapp.com/

For any questions or to report issues, email me at: nidaqg@gmail.com
