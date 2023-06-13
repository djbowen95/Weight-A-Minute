# Installation Instructions

These instructions are for running a version of <strong>Weight a Minute...!</strong> locally on your machine. These instructions will walk you through cloning the repository; creating a MySQL database in a Docker container; establishing a connection between the application and the database; and running the application.

 Before following these instructions, make sure you meet the following requirements:
- You must have a recent version of both [Node](https://nodejs.org/en/download) and the [node package manager](https://www.npmjs.com/package/npm).
- You will also require [Docker](https://docs.docker.com/engine/install/).
- To clone the repository, you should have an SSH Key set up for GitHub.
- These instructions are written for Windows, and command-line instructions may need to be changed if using a Linux or Mac OS.

These are the instructions to install and run our application locally. These instructions assume you have Node and the node package manager installed; docker installed; and an SSH key set up with GitHub so you can clone a repository. 

## Installing the Files
1. Clone the repository. Navigate to the directory you want to save the application in. Run the command `git clone git@github.com:djbowen95/Weight-a-Minute.git`. Once installed, navigate to the directory with `cd Weight-a-Minute`.
2. Install the node modules locally. Run `npm install` from the application's route directory.
3. Create a .env file in the route directory. In the .env file, create a file similar to this:
    `DB_NAME=weight_a_minute  
    DB_PASSWORD=password  
    DB_USER=root`  
You are better off making the password unique.

### Setting Up the Database Locally
4. Create a Docker container with MySQL installed (I will edit instructions for this at a later date).
5. Connect to the database from the command line: `winpty mysql -h127.0.0.1 -uroot -ppassword` (change user / password accordingly).
6. Run the schema by entering this command to the MySQL CLI: `source config/db/schema.sql`.*
7. Exit the MySQL CLI (`exit`).
8. Finally, you can optionally seed the database with the prebuilt data, by running the `node seeds/seeds.js` command. This data can be viewed in a program like DBeaver if you want to make sure the database has been connected to successfully.

## Running the Application 
9. To launch, run `npm run start`. 
10. The application should now be running! To view the application, navigate to either `http://localhost:3001` or `http://127.0.0.1:3001/` (or the custom PORT, if you decided to use one instead).