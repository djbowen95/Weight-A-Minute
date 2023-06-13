<h1 align="center"> 🏋️‍♂️ Weight a Minute...! 🏋️‍♀️</h1>
<h2 align="center"> Gym Session Tracker. <i> Version 1.0.0 </i> </h2>

This is a group project build for the University of Birmingham Coding Bootcamp. I am making changes based on what I've learned since completing the Bootcamp, and to improve the application that was originally built under time pressure (we had two weeks). You can view the group repository for the project [here](https://github.com/HummaNosh/Weight-A-Minute).  

I am rewriting the README, so it is in note form. You can read the old README (also note form but more detailed) [here](./docs/OLD-README.md).

1. About the Project
2. Meet the Developers (?)
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
 - Create an Account
 - Recording Your Workout
 - View Your Past Workouts

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

- Nodemon
- Docker Containers
- Manual Testing with Postman

- Version Control

5. Technology Stack
JavaScript, Node: Languages / runtime environment.
Node Package Manager: Bringing in libraries to build with.
Express: Routing, both front-end/between HTML pages and back-end/querying the server.
MySQL: Database.
Sequelize: ODM for the database.
Handlebars: Template engine.
bcrypt: encryption.
dotenv: package for environment variables. 
AWS EC2: Hosting the website.
AWS S3: Storing user data / profile images.
Graphs - not sure yet.

7. Installation
These are the instructions to install and run our application locally. These instructions assume you have Node and the node package manager installed; docker installed; and an SSH key set up with GitHub so you can clone a repository. 
These instructions assume you have node and the node package manager installed. To install and run the application locally:
1. Clone the repository. Navigate to the directory you want to save the application in. Run the command `git clone git@github.com:djbowen95/Weight-a-Minute.git`. Once installed, navigate to the directory with `cd Weight-a-Minute`.
2. Install the node modules locally. Run `npm install` from the application's route directory.
3. Create a .env file in the route directory. An example would be:
`DB_NAME=weight_a_minute
DB_PASSWORD=password
DB_USER=root`
But make the password unique. 

These instructions are for windows users.
4. Set up docker container for mysql database (duplicate instructions / explain instructions from inst. repo?)
5. Connect to the database from the command line: `winpty mysql -h127.0.0.1 -uroot -ppassword` (maybe changer user / password).
6. Run the schema by entering this command to the mysql CLI: `source db/schema.sql`.
7. Exit the mysql command-line interface.
8. Seed the database by running `node seeds/seeds.js` from the route directory.
9. Run `npm run start`. 
10. The application should now be running on PORT 3001 or the port you assigned in your .env file (?). You can view it at `http://localhost:3001` or at `http://127.0.0.1:3001/`.