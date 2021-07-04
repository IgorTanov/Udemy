"use strict";
// LESSON_1
let numberOfFilms;

// function start() {
//     numberOfFilms = prompt("Сколько фильмов вы уже смотрели?");
//     while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = prompt("Сколько фильмов вы уже смотрели?");
//     }
// }
// start();
let personalMovieDB = {};
personalMovieDB.count = numberOfFilms;
personalMovieDB.movies = {};
personalMovieDB.actors = {};
personalMovieDB.genres = [];
personalMovieDB.privat = false;
// for (let i = 0; i < 2; i++) {
//     let a = prompt("Один из последних просмотренных фильмов?");
//     let b = prompt("На скольео его оцените?");
//     if (a == "" || b == "" || a.length > 50 || a == null || b == null) {
//         alert("не коректный ответ");
//         i--;
//     }

//     personalMovieDB.movies[a] = b;
// }

// function showMyDB() {
//     if (personalMovieDB.privat == false) {
//         console.log(personalMovieDB);
//     }
// }

// function writeYourGenres() {
//     for (let i = 1; i < 4; i++) {
//         personalMovieDB.genres[i - 1] = (prompt(`Ваш любимый жанр под номером ${i}`));
//     }
// }
personalMovieDB.start = function () {
    personalMovieDB.count = prompt("Сколько фильмов вы уже смотрели?");
    while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = prompt("Сколько фильмов вы уже смотрели?");
    }
};
personalMovieDB.toogleVisibleMyDB = function () {
    if (personalMovieDB.privat == false) {
        personalMovieDB.privat = true;
    } else {
        personalMovieDB.privat = false;
    }
};


personalMovieDB.writeYourGenres = function () {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
        while (personalMovieDB.genres[i - 1] == "" || personalMovieDB.genres[i - 1] == null) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
        }
    }
    let f=0;
    personalMovieDB.genres.forEach((item,i) =>
        console.log(`Любимый жанр №${i+1}-это ${item}`));

};