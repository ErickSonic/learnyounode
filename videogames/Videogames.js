const fs = require('fs');

let arr = fs.readFileSync('videogames.json');
let videogames = JSON.parse(arr);

//console.log(videogames)
module.exports = videogames


// Datos iniciales
/*let videogames = [{
        id: 1,
        name: 'Super Smash Bros.',
        developer: 'Nintendo',
        year: '2018'
    },
    {
        id: 2,
        name: 'Fortnite',
        developer: 'Epic',
        year: '2017'
    },
    {
        id: 3,
        name: 'PUBG',
        developer: 'BlueHole',
        year: '2016'
    },
    {
        id: 4,
        name: 'Warzone',
        developer: 'Activision',
        year: '2020'
    },
    {
        id: 5,
        name: 'Zelda',
        developer: 'Nintendo',
        year: '2017'
    }]*/

// Convertir el arreglo original en un json con los datos originales
/*fs.writeFile(
    path.join(__dirname, '/', 'videogames.json'),
      JSON.stringify(videogames),
    err=> {
      if (err)
      console.log(err);
    })*/

