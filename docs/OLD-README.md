<h1 align="center"> 🏋️‍♂️ Weight a Minute...! 🏋️‍♀️</h1>
<h2 align="center"> Gym Session Tracker. <i> Version 1.0.0 </i> </h2>
<p><strong>Weight a Minute...!</strong> is a gym tracker that gives users total freedom to record their workout just how they want to. So many gym applications go hard trying to sell a workout program: not us! <strong>Weight a Minute...!</strong> lets your record <em>your own workout, your own way</em>. You name the exercise. You set the number of sets and reps. You choose your weights. We've aimed to give you an easy way to store and view your data. We leave all the choices about your workout program to you!</p>

<p><strong>Weight a Minute...!</strong> is a <em>full-stack application</em> built in <strong><em>JavaScript</em></strong> and <strong><em>Node.js</em></strong>, with an <strong><em>Express</em></strong> server and a <strong><em>MySQL</em></strong> database. It uses <strong><em>Handlebars</em></strong> for templating; <strong><em>Advanced CSS</em></strong> for responsive design; <strong><em>Sequelize</em></strong> for Object-Relational Mapping; and <strong><em>bcrypt</em></strong> for encryption. We built it together as an end of term project on the University of Birmingham and 2U/Trilogy Web Development Coding Bootcamp. It was built in two weeks and still needs a little love: but we'd love you to take a look at what we managed to build in that short time!</p>

```Note: Currently rewriting this README on the main branch. Some of it is note form, but will be tidied soon. - Daniel, 18/01.```
## Table of Contents
    
* [01. About](#about)
* * [01A. Project History](#project-history)
* * [01B. Demonstration Video](#demonstration-video)
* * [01C. Live Deployment](#live-deployment)
* [02. Usage](#usage)
* * [04A-E. Key Usage Features](#key-usage-a)
* [02. Key Features](#key-features)
* * [02A-E Key Feature A - E](#key-feature-a)
* [03. Installation](#installation)
* * [03A. Prerequisites](#prerequisities)
* * [03B. Cloning the Repository](#cloning-the-repository)
* * [03C. Running the Project Locally](#running-the-project-locally)
* [05. Testing](#testing)
* [06. Version History](#version-history)
* [07. License](#license)
* [08. Contribution](#contribution)
* * [08A. Contribution Guidelines](#contribution-guidelines)
* * [08B. Future Development](#future-development)
* [09. Questions](#questions)

## About
### Project History
 - Coming up with the idea
 - Development cycle
 - Working with / learning version control
 - Getting Ready to present
### Demonstration Video
 - Need to find powerpoint for this one!
### Live Deployment
This project was deployed on Heroku at the time we built it: however sadly now, as they have changed their free membership, it is no longer deployed with them. I'm hoping to deploy this with AWS/an EC2 instance in the near future. In the meantime - to see the project in action, please follow the installation instructions below.
## Usage
### Key Usage A
- Create an Account / Sign In
- Record a Workout
- View a Workout
- View a Particular Exercise
- Add pictures to your account / track your progress visually
## Key Features
### Key Feature A
- Node / Node Package Manager
- Express
- - Routing for the Front-End
- - Routing for CRUD Requests
- - SQL and Sequelize ODM/ORM (I think its ODM)
- User Authentication and Encryption
- Handlebars Template Engine
- Responsive Design

- Possibly break down to 'back-end' and 'front-end'

## Installation
These instructions assume you have node and the node package manager installed. To install and run the application locally:
1. Clone the repository. Navigate to the directory you want to save the application in. Run the command `git clone git@github.com:djbowen95/Weight-a-Minute.git`. Once installed, navigate to the directory with `cd Weight-a-Minute`.
2. Install the node modules locally. Run `npm install` from the application's route directory.
- Set up the database [instructions to come].
- `npm run start`
- Set up a .env file

### Prerequisities
### Cloning the Repository
### Running the Project Locally
## Testing
- No tests yet - but link to tests. Note that this is the part of the course we learned testing, so would be particularly great to create some tests once its debugged.
## Version History
### Version 1.0.0
BootCamp version.
## License
MIT I think!
## Contribution
### Contribution Guidelines
### Future Development
## Questions

## 2. <a name='Usage'></a>Usage

Once the user accesses teh Weight A Minute application they are presented with a prompt to sign up or if they are to log in if they are a returning user. Once signed in, the user is able to select between an existing workout, creating a new workout or viewing their workout history.

## 3. <a name='Screenshot'></a>Screenshot

<figure>
<img src="./public/images/full.png">
</figure>

## <a name='License'></a> License

This project is licensed under the MIT License.

## 4. <a name='TechnologiesUsed'></a>Technologies Used

- Node js
- Express
- Heroku
- Nodemon
- MySQL/mariadb
- Docker
- Sequelize
- Dbeaver
- Bcrypt
- Postman
- S3/aws
- Chart.js
- Handlebars
- CSS
- Javascript

## 5. <a name='Contributors'></a>Contributors

- Humma Noshine <a href="https://github.com/HummaNosh">GitHub</a>
- Daniel Bowen: <a href="https://github.com/djbowen95">GitHub</a>
- Sumaya Gure: <a href="https://github.com/SuM949">GitHub</a>
- Fatumo Abdullahi: <a href="https://github.com/Fatumoabdullahi">GitHub</a>
