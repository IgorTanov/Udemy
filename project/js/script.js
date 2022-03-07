"use strict";

let numberOfFilms;
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против"
    ]
};

function start() {
    let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
    while ((numberOfFilms == "") || (isNaN(numberOfFilms)) || (numberOfFilms == undefined)) {
        numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

    }
    personalMovieDB.count = numberOfFilms;
}

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    detectUserLvl: function () {
        if (personalMovieDB.count < 10) {
            confirm("Просмотрено довольно мало фильмов");
        } else
            if ((personalMovieDB.count >= 10) & (personalMovieDB.count <= 30)) {
                confirm("Вы классический зрител");
            } else
                if (personalMovieDB.count > 30) {
                    confirm("Вы киноман");
                } else {
                    confirm("произошла ошибка");
                }
    },
    collectInformation: function () {
        for (let i = 0; i < 2; i++) {
            let film = prompt('Один из последних просмотренных фильмов?');
            while ((film === "") || (film == undefined) || (film.length >= 50)) {
                film = prompt('Один из последних просмотренных фильмов?');
            }
            let value = prompt("Во сколько вы его оцениваете?");
            while ((value === "") || (value == undefined) || (value.length >= 50) || isNaN(value)) {
                value = prompt("Во сколько вы его оцениваете?");
            }

            personalMovieDB.movies[film] = value;
        }
    },
    showMyDB: function () {
        if (personalMovieDB.private == false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под №${i + 1}`);
            while ((personalMovieDB.genres[i] == undefined) || personalMovieDB.genres[i] === ("")) {
                personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под №${i + 1}`);
            }
        }
        personalMovieDB.genres.forEach(function (item, i) {
            console.log(`любимый жанр №${i + 1}-это ${item}`);

        });


    },

    toggleVisibleMyDB: function () {
        let item = this.private;
        switch (item) {
            case true:
                item = false;
                break;
            case false:
                item = true;
                break;
        }
        this.private = item;

    }
};

// удаление рекламного блока ------------------------------------------------


const rem=document.querySelectorAll('.promo__adv img');
rem.forEach(item => {
    item.remove();
});



// меняем жанр комедия на драмму----------------------------------------------------
const genre=document.querySelector(".promo__bg");
const replace=genre.querySelector(".promo__genre");
replace.textContent=("Драмма");


//меняем задний фон------------------------------------------------------------------

const bgImg=document.querySelector(".promo__bg");
bgImg.style.backgroundImage="url(img/bg.jpg)";

//Создаем список фильмов и сортируем их по алфавиту------------------------------------
movieDB.movies.sort();
const filmList=document.querySelectorAll(".promo__interactive-item");
filmList.forEach((item, i)  => {
    item.textContent=`№${i+1} ${movieDB.movies[i]}`;
});




//-----------------------------------------------------------------------------------