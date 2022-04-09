const fs = require("fs");

// Collect data from exercise name
const exerciseName = document.querySelector('#exercise-name');

// Collect data from sets
const sets = document.querySelector('#sets-input');

// Collect data from rep 1 - 5
const rep1 = document.querySelector('#reps-1-input');
const rep2 = document.querySelector('#reps-2-input');
const rep3 = document.querySelector('#reps-3-input');
const rep4 = document.querySelector('#reps-4-input');
const rep5 = document.querySelector('#reps-5-input');

// Collect data from weight 1 - 5
const weight1 = document.querySelector('#weight-1-input');
const weight2 = document.querySelector('#weight-2-input');
const weight3 = document.querySelector('#weight-3-input');
const weight4 = document.querySelector('#weight-4-input');
const weight5 = document.querySelector('#weight-5-input');

// Date (Needs to be with Sumaya's page);
// ID for Workout Data (Needs to be with Sumaya's page);

// BONUS: Collect data / create option buttons
const createExerciseButton = document.querySelector('#create-exercise-button');
createExerciseButton.addEventListener('click', () => {
    event.preventDefault();
    const newExerciseRecord = {
        exerciseName: exerciseName.value,
        numberOfSets: sets.value,
        rep1: rep1.value,
        rep2: rep2.value,
        rep3: rep3.value,
        rep4: rep4.value,
        rep5: rep5.value,
        weight1: weight1.value,
        weight2: weight2.value,
        weight3: weight3.value,
        weight4: weight4.value,
        weight5: weight5.value
    }
    pushNewData(newExerciseRecord);
    console.log("New record added");
});

function pushNewData (newExerciseRecord) {
    fs.readFile('./exercisedata.json', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            const database = JSON.parse(data);
            database.push(newExerciseRecord);
            fs.writeFileSync('./exercisedata.json'. JSON.stringify(database));
        }
    })
};