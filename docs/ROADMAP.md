These are notes for myself: things to work on!

Overall to-do list:
- New design - page frame work and goals.
- Installation / package.json commands - improve.
- User stuff: make notes, unit property...

Notes from installation:
1. Would be good to have a command that builds the database (ie. runs db/schema.sql which I had to run manually, then seeds the database). `npm run start` currently creates the tables but nothing else.

2. Server file is a bit messy - might be worth making notes. It also doesn't really match the one in the SQL week at all - and imports so many files!

Going through files:
ROUTE:
- See note above about server file being messy. 
- s3 file should probably not be in the route - either make part of the `server.js` or move it elsewhere (?)
- `.gitignore` has some really unnecessary files in it! 
- Folders atm: .vscode, config, controllers, db, docs, models, public, seeds, upload, utils, views
- Think what I need is: config, controllers, docs, models, views, possibly utils, possibly public?
- in index, there are two paths for the route `/`.
- Also might be worth doing a wildcard route, like there was for the routing project. 
 - The if signed in thing is repeated a bunch of times on the home routes - should refactor this


CONFIG:
- Only one file: connection.js
- Might be worth moving s3 file here? Anything else I want to modularize from server.js, or utils? But not sure - want to look at what's usually in a config folder?
- Worth putting notes. 
- What is `.JAWSDB_URL`? Its there in all the example config files for the MVC week.
- Want to be able to automate db folder too. 

CONTROLLERS:
 - `homeRoutes.js`: Needs notes; also the page names themselves need tidying. Are these all the pages I want? Not worth updating until the templates are updated, or a page structure is created.
 - Also worth noting this is something that caused confusion: in future, page names / file names need to be agreed on - worth finding an example and talking about it as something we learned/useful for group work. Also was a problem in Rat World!
 - `image-controller.js`: This is Humma's file. Not sure if I want to use it or start from scratch; name of the file inconsistent.
 API:
 - `index.js` is pretty perfect as it is? Doesn't import `imageRoutes.js` at the moment. 
 - `userRoutes.js`: Has 'poo' which I need to change. Want to comment up. Is a task for when looking at encryption, session cookies, etc... But probably a copy + paste job. Has three POST routes. 
 - `workoutRoutes.js`: Seems incomplete. Has one POST route at the moment. 
 - I think there's some confusion about what the tables in the database are called; I think they might need changing for clarity.
 - `exerciseRoutes.js`: This one is the individual record. More complete than any of the others - might be worth completing this and tidying it before working on the rest; and renaming later. Should take out the console.logs. Feel like the must be a more succinct way to do this. 
 - Should do a model of what the databases look like. 
 - `historyRoutes.js`: This is the set of GET routes. Can build these with seed data. Not sure ultimately if these should be one file, or routse in workout/exercise, or other. 
 - `progressRoutes.js`: I don't understand this file. Its a nightmare.
 - `bankRoutes.js`: Not sure if I want this seperate, or in the `exerciseRoutes` file - want to do a check before writing new data if it already exists, basically. Might use a uuid() rather than just a 1/2/3 index?

 - The if logged in (on history routes, for example) feels like something that shouldn't be repeated in multiple files. Modularise or remove!

MODELS:
- I built most of these too. They seem to make sense / work already, although there's some notes. Need to tidy / make cleaner notes.
 - Exercise Bank: the notes on this one are more, "should i do  this in the code or in the model" questions. Assigning a number/`icon` property seems like it could be confusing for other devs.
 - Exercise Record: Seems like a lot of code here - ie. so many properties for weights / reps.
 - Unit: I want this to be something that can be changed / converted! Not sure how. Maybe on writing? Need to fetch it from the user? Or store in cookies/session data maybe?
 - User: Seems neat already, other than might want a DOB option; sign-up date option; unit preference option? 
 - Workout Record: Seems simple, don't *think* I need any other properties. 
 - Is the path I want for my API route: `create Workout Record` -> `create all exercise records` -> `save`, or do I want to store the current workout in session cookies? If so do I want a timeout? This is a lot more complicated.

PUBLIC:
 - need icons for exercise types 
 CSS:
 - This is just three files (and then one video that I should move directory of or remove entirely). The third one (style.css) is a nightmare and something that we imported from somewhere / should be crediting. I need to update remove this, would be a massive overhaul though. Unsure if easier to start from scratch - or maybe remove section by section, keep Sumaya/Fatumo's parts.

IMAGES:
 - Some of these are svg files, unsure what they are - should store separately maybe? Make a list of what they are/where they are used?
 - Pictures of our faces for the about us page.
 - These I might want to store on S3 once that is set up? 

SCRIPTS:
 - login / logout - i feel like these could be one file? 
 - Event handling files here, but also files that query the database. Not sure if I should seperate these out. 
 - Two json files I think I can delete.
 - I'd have to change it everywhere but would prefer this folder is called 'javascript' or 'scripts' to 'js'.
 - There's pie chart logic: this something Humma built and it works, so worth keeping in for now! And a pie chart could be a useful extra feature/library to show off - add chart.js to the tech stack / README.
 - Humma says some of the S3 image stuff works - worth going back to.
 - Think 'script.js' is for the video in the background?

SEEDS:
 - Maybe could be a sub-folder of config? 
 - Might make some tidier / more realistic data.
 - Might fill the exercise bank with exercises I do / popular ones.
 - Need to change the names of these files if I change them elsewhere.
 - Not sure what 'history data' file is.

UPLOAD:
 - Just a picture of Humma but she might have been using it to test S3?

UTILS:
 - auth - to check if the user signed in; this is front-end / could potentially move it to public?
 - helpers - are these used by sequelize / in the models? I need to find where this is imported? At the moment I'm going to keep it.

VIEWS:
 - Why is select the Homepage?
 - What is main, vs select?
 - Sign Up page is also login page

 - About Me: actually an about the developers page: rename, doesn't really need work at the moment. Responsively designed and works. Not sure why when you hover a bunch of squares come over our faces (maybe they're supposed to have useful links in?)
 - Create New Exercise: The form that writes new exercise data to the database. I don't think it is writing the data I want... Also no general nav bar here.
 - 'Dashboard': This is actually Humma's healthy living pie chart. 
 - Follow Plan: Not useful at the moment, seems to be the start of a page for following a particular plan - I might scrap this entirely. 
 - History: Table. Doesn't read from the database yet.  
 - New Workout: This is a sort of navigation page. The styling is quite useful I think? 
 - Profile: Seems to be the bit at the top for the exercises/navigation, which is confusing. There's also some forms - not sure if they read/write to the database at all? Change password... etc. Worth working on second I think, as it will be using S3. 
 - Progress - this is a page for uploading images so you can track your body over time, Humma's idea. Might demonstrate S3 better but... I'm going to leave it for now!
 - Sign Up redirects to profile at the moment. 


TESTS: They don't exist yet - but might be worth building. What do I want to test?
CONFIG: Test connection? Test / check that the database exists, has all the right tables.

CONTROLLERS:
INDEX / HTML PAGE ROUTES: Check routes exist, return correct different pages. Check signed in/not signed in access. 
API

PAGES:
Home / Dashboard
Users: Login / Sign Up - Wildcard (Not Signed In) - Profile
New Workout: Exercise Page for Now
History: Just a table for now
Healthy Tips!: Humma's Pie Chart Page

