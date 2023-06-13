<h1 align="center"> 🏋️‍♂️ Weight a Minute...! 🏋️‍♀️</h1>
<h2 align="center"> Gym Session Tracker. <i> Version 1.0.0 </i> </h2>

# Introduction
<p><strong>Weight a Minute...!</strong> is a gym tracker that gives users total freedom to record their workout just how they want to. So many gym applications go hard trying to sell a workout program: not us! <strong>Weight a Minute...!</strong> lets your record <em>your own workout, your own way</em>. You name the exercise. You set the number of sets and reps. You choose your weights. We've aimed to give you an easy way to store and view your data. We leave all the choices about your workout program to you!</p>

<p><strong>Weight a Minute...!</strong> is a <em>full-stack application</em> built in <strong><em>JavaScript</em></strong> and <strong><em>Node.js</em></strong>, with an <strong><em>Express</em></strong> server and a <strong><em>MySQL</em></strong> database. It uses <strong><em>Handlebars</em></strong> for templating; <strong><em>Advanced CSS</em></strong> for responsive design; <strong><em>Sequelize</em></strong> for Object-Relational Mapping; and <strong><em>bcrypt</em></strong> for encryption. We built it together as an end of term project on the University of Birmingham and 2U/Trilogy Web Development Coding Bootcamp. It was built in two weeks and still needs a little love: but we'd love you to take a look at what we managed to build in that short time!</p>

## Notes on the current repository
This is a group project build for the University of Birmingham Coding Bootcamp. I am making changes based on what I've learned since completing the Bootcamp, and to improve the application that was originally built under time pressure (we had two weeks). You can view the group repository for the project [here](https://github.com/HummaNosh/Weight-A-Minute).  

I am rewriting the README, so it is currently in note form. You can read the old README (also note form but more detailed) [here](./docs/OLD-README.md). You can view my current road map / list of tasks [here](./docs/ROADMAP.md). You can read more detailed notes on my thoughts around the project in its current state [here](./docs/REFACTOR-NOTES.md).

# Live Deployment
This project was deployed on Heroku under the free membership, which is no longer available. I intend to redeploy the project to Amazon Web Service's EC2 soon. 



---
Contents (for when complete)

1. About the Project
2. Meet the Developers
3. Using Weight a Minute...!: Key Features
4. Building Weight a Minute...!: What We Did / Learned
5. Technology Stack
6. Contribution
7. Installation
8. Testing
9. Version History
10. Contact

1. About the Project
- Project History
- Introduce the Developers
- Talk about the process (how it was Agile, what we did)
- Talk about the group presentation

2. Meet the Developers

3. Using Weight a Minute
 - Creating Your Account
 - Recording Your First Workout
 - Looking At Your Exercise History
 - Changing Your Profile
 - Visualising Your Data* (atm just pie chart)

4. Building Weight a Minute
- Node / Node Package Manager
- Express
- - Routing for the Front-End
- - Routing for CRUD Requests
- - SQL and Sequelize ODM/ORM (I think its ODM)
- User Authentication and Encryption
- Handlebars Template Engine
- Responsive Design / Front-End Design
- Agile
- Model-View-Controller
- Object-Oriented Programming Concepts (?)
- Chart.js

- Nodemon
- Docker Containers
- Manual Testing with Postman

- Version Control

5. Technology Stack
- JavaScript, Node: Languages / runtime environment.  
- Node Package Manager: Bringing in libraries to build with.  
- Express: Routing, both front-end/between HTML pages and back-end/querying the server.  
- MySQL: Database.
- Sequelize: ODM for the database.
- Handlebars: Template engine.
- bcrypt: encryption.
- dotenv: package for environment variables. 
- AWS EC2: Hosting the website.
- AWS S3: Storing user data / profile images.
- Chart.js: Pie chart, currently used for health tips but at some point hopefully will display user data. 

7. Installation
These are the instructions to install and run our application locally. These instructions assume you have Node and the node package manager installed; docker installed; and an SSH key set up with GitHub so you can clone a repository. 

## Installing the Files
1. Clone the repository. Navigate to the directory you want to save the application in. Run the command `git clone git@github.com:djbowen95/Weight-a-Minute.git`. Once installed, navigate to the directory with `cd Weight-a-Minute`.
2. Install the node modules locally. Run `npm install` from the application's route directory.
3. Create a .env file in the route directory. An example would be:
`DB_NAME=weight_a_minute
DB_PASSWORD=password
DB_USER=root`
But make the password unique. 

### Setting Up the Database Locally
These instructions are for windows users.
4. Set up docker container for mysql database (duplicate instructions / explain instructions from inst. repo?)
5. Connect to the database from the command line: `winpty mysql -h127.0.0.1 -uroot -ppassword` (maybe changer user / password).
6. Run the schema by entering this command to the mysql CLI: `source config/db/schema.sql`.
7. Exit the mysql command-line interface.
8. Seed the database by running `node seeds/seeds.js` from the route directory.

## Running the Application 
9. Run `npm run start`. 
10. The application should now be running on PORT 3001 or the port you assigned in your .env file (?). You can view it at `http://localhost:3001` or at `http://127.0.0.1:3001/`.