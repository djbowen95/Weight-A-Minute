USE weight_a_minute;

INSERT INTO user_info (name, email, password, date_of_birth, kg_db)
VALUES ("Jake", "Jake@Jakesworld.com", "password", 24021995, "kg"),
        ("Matthew", "Matthew@MatthewWebsite.com", "123hello", 19071994, "lb"),
        ("Raoul", "Raoul@RaoulandPals.com", "something", 04011866, "kg");

INSERT INTO exercise_bank (exercise_name, exercise_icon)
VALUES ("Seated Leg Curl", 1),
        ("Leg Press", 1),
        ("Bicep Curl", 2),
        ("Bench Press", 2);

INSERT INTO workout_record (user_id, workout_length, exercise_ids, workout_date)
VALUES (1, 4, "[1, 2, 3, 4]", 01042022),
        (2, 3, "[5, 6, 7]", 02042022),
        (1, 2, "[8, 9]", 03042022);


-- Ask Kenny about table that links these two.

INSERT INTO exercise_record (exercise_id, workout_id, unit, reps_1, reps_2, reps_3, reps_4, reps_5, weight_1, weight_2, weight_3, weight_4, weight_5)
VALUES (1, 1, "kg", 10, 10, 10, NULL, NULL, 15, 15, 15, NULL, NULL),
        (2, 1, "kg", 15, 15, 20, 20, NULL, 10, 10, 10, 10, NULL),
        (3, 1, "kg", 15, 15, 20, 20, NULL, 15, 15, 15, 15, NULL),
        (4, 1, "kg", 5, 5, NULL, NULL, NULL, 5, 5, NULL, NULL, NULL),
        (1, 2, "lb", 10, 10, 10, 10, 8, 50, 55, 60, 65, 70),
        (2, 2, "lb", 20, 18, 16, 14, NULL, 75, 75, 75, 75, NULL),
        (4, 2, "lb", 100, NULL, NULL, NULL, NULL, 60, NULL, NULL, NULL, NULL),
        (2, 3, "kg", 10, 15, 20, NULL, NULL, 35, 35, 35, NULL, NULL),
        (3, 3, "kg", 10, 15, 20, NULL, NULL, 45, 45, 45, NULL, NULL);