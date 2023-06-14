"use strict"
// let numberOffilms;
// // const numberOffilms = +prompt('Сколько фильмов ты уже посмотрел?')

// // const personalMovieDB = {
// //     count: numberOffilms,
// //     movies: {},
// //     actors: {},
// //     genres: [],
// //     privat: false
// // };

// //     for(let i = 0; i < 2; i++){
// //       const a = prompt('Один из последних просмотренных фильмов?',''),
// //       b = prompt('На сколько оцените его?','');

// //       personalMovieDB.movies[a] = b;
// //     }
// //     console.log(personalMovieDB);



// // let tre = 6;
// // do {
// //   console.log('hfp');
// //   tre++;
// // }
// // while(tre <= 20);

// // const pismo = function(){
// //   return 23 +90;
// // }

// // console.log(pismo()) ;
// function start(){
    
//     while (numberOffilms == '' || numberOffilms == null || isNaN(numberOffilms)){
//         numberOffilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start();
// const personalMovieDB = {
//         count: numberOffilms,
//         movies: {},
//         actors: {},
//         genres: [],
//         privat: false
//     };

//     function RememberMe() {

//         for(let i = 0; i < 2; i++){
//             const a = prompt('Один из последних просмотренных фильмов?',''),
//                   b = prompt('На сколько оцените его?','');
                 
//         if(a != '' && b != '' && a != 0 && b !=0 && a.length < 50){
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         }else{
//             console.log('error');
//             i--;
//         }
//     }
// }

//     RememberMe();

//     function DetectPersonalLevel(){
        
//         if(personalMovieDB.count < 10) {
//             console.log('Вы посмотрели мало фильмов');
//         } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 40){
//             console.log('Вы посмотрели приличное количество фильмов');
//         } else if(personalMovieDB.count >40){
//             console.log('Вы посмотрели много фильмов');
//         }
//     }

//     DetectPersonalLevel();

//     function ShowmyDB(hidden){
//         if(!hidden){
//            console.log(personalMovieDB); 
//         }
//     }

//     ShowmyDB(personalMovieDB.privat);
//     let i;
//     function writeYoureGenre(){
//         for(i = 1; i<=3; i++){
           
//             personalMovieDB.genres[i - 1] = prompt(`Какой ваш любимый жанр под номером {i}?`); 
//         }
//     }

//     writeYoureGenre();

// const options = {
//     film: 'Baobab',
//     city: 'Moscow',
//     genre: 'Horor',
//         color: {
//             1: 'green',
//             2: 'green',
//             3: 'green'
//         },
    
//     MakeTest: function(){
//         console.log('Do something right');
//     }
// }
// options.MakeTest();

// for (let key in options){
//     if(typeof(options[key]) === 'object'){
//         for(let i in options[key]){
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//      } else {
//             console.log(`Свойство ${key} содержит ${options[key]}`);
//             }
//     }

