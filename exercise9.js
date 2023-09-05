/*-Crea una funcion que retorne las personas vacunadas */
let arrayPersons = [
    {
        name: "Phibee", age: 25, vaccinated: true, gender: "mujer"
    },
    {
        name: "Katrinka", age: 26, vaccinated: false, gender: "mujer"
    },
    {
        name: "Bruno", age: 48, vaccinated: false, gender: "hombre"
    },
    {
        name: "Jon", age: 22, vaccinated: true, gender: "hombre"
    },
    {
        name: "Brian", age: 20, vaccinated: false, gender: "hombre"
    },
    {
        name: "Eugene", age: 38, vaccinated: true, gender: "hombre"
    },
    {
        name: "Big Bob", age: 29, vaccinated: true, gender: "hombre"
    },
    {
        name: "Ximena", age: 40, vaccinated: false, gender: "mujer"
    },
    {
        name: "Paulet", age: 37, vaccinated: false, gender: "mujer"
    },
    {
        name: "Harold", age: 45, vaccinated: true, gender: "hombre"
    },
    {
        name: "Gerald", age: 22, vaccinated: false, gender: "hombre"
    },
    {
        name: "Arnold", age: 35, vaccinated: true, gender: "hombre"
    },
    {
        name: "Gelga", age: 28, vaccinated: true, gender: "mujer"
    },
    {
        name: "Lila", age: 18, vaccinated: true, gender: "mujer"
    },
    {
        name: "Rhonda", age: 18, vaccinated: true, gender: "mujer"
    },
  ];

const peopleVaccinated = arrayPersons.filter((item) => item.vaccinated);

console.log(peopleVaccinated);

/*-Agrupar las canciones por banda*/
let songsData = [
    {
      name: "Kashmir",
      band: "Led Zeppelin",
      releaseYear: "1980",
      statistics: {
        likes: 20000,
        reproductions: 8000,
      },
    },
    {
      name: "Smells Like Teen Spirit",
      band: "Nirvana",
      releaseYear: "1989",
      statistics: {
        likes: 25000,
        reproductions: 100000,
      },
    },
    {
      name: "So What",
      band: "Metallica",
      releaseYear: "1990",
      statistics: {
        likes: 12000,
        reproductions: 95000,
      },
    },
    {
      name: "Nothing Else Matters",
      band: "Metallica",
      releaseYear: "1992",
      statistics: {
        likes: 128000,
        reproductions: 915000,
      },
    },
    {
      name: "Daze",
      band: "Poets_of_the_Fall",
      releaseYear: "2014",
      statistics: {
        likes: 3548413,
        reproductions: 87095138,
      },
    },
    {
      name: "The Sweet Scape",
      band: "Poets_of_the_fall",
      releaseYear: "2018",
      statistics: {
        likes: 26268856,
        reproductions: 2424568,
      },
    },
  ];


const findSongsByBanda = (songsData_,band) => {
    const songsByBanda =  songsData_.filter((item) => item.band === band).map((item, index, array) => {    
    return item.name; });
    return songsByBanda;
}

const bandsSongs =  {
    Led_Zeppelin: findSongsByBanda(songsData,'Led Zeppelin'),
    Nirvana: findSongsByBanda(songsData,'Nirvana'), 
    Metallica: findSongsByBanda(songsData,'Metallica'),
    Poets_of_the_Fall: findSongsByBanda(songsData,'Poets_of_the_Fall')
};


console.log(bandsSongs);

/*Mostrar la cancion mas antigua de la lista */
const getYearOldestSong = songsData.map((item, index, array) => { return item.releaseYear; }).sort()[0];

const oldestSong =  songsData.filter((item) => item.releaseYear === getYearOldestSong);

console.log(oldestSong[0].name);
