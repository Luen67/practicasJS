const mentorsArray = [
    {
      name: "Ivan Diaz",
      scores: [
        {
          signature: "HTML",
          score: 8
        },
        {
          signature: "CSS",
          score: 10
        },
        {
          signature: "JS",
          score: 8
        },
        {
          signature: "ReactJS",
          score: 8
        }
      ]
    },
    {
      name: "Alan Medina",
      scores: [
        {
          signature: "HTML",
          score: 8
        },
        {
          signature: "CSS",
          score: 7
        },
        {
          signature: "JS",
          score: 10
        },
        {
          signature: "ReactJS",
          score: 10
        }
      ]
    },
    {
      name: "Elvira Camarillo",
      scores: [
        {
          signature: "HTML",
          score: 9
        },
        {
          signature: "CSS",
          score: 9
        },
        {
          signature: "JS",
          score: 10
        },
        {
          signature: "ReactJS",
          score: 9
        }
      ]
    },
    {
      name: "Alejandra Paez",
      scores: [
        {
          signature: "HTML",
          score: 8
        },
        {
          signature: "CSS",
          score: 10
        },
        {
          signature: "JS",
          score: 9
        },
        {
          signature: "ReactJS",
          score: 10
        }
      ]
    },
    {
      name: "Alejandra Paez",
      scores: [
        {
          signature: "HTML",
          score: 10
        },
        {
          signature: "CSS",
          score: 10
        },
        {
          signature: "JS",
          score: 9
        },
        {
          signature: "ReactJS",
          score: 10
        }
      ]
    }
  ];

/*- Generar un array nuevo mostrando el promedio de por mentor*/

const  calculateAverageMentor = (mentores) => {
    mentores.forEach((mentor) =>{
        let score = 0;
        mentor.scores.forEach((item) =>{
            score = score + item.score;
        });
        mentor.average = score/(mentor.scores).length;
    });
    return mentores;
}

console.log(calculateAverageMentor(mentorsArray));

/*- Generar el promedio de las calificaciones de todos los mentores*/
const  calculateAverageMentores = (mentores) => {
    let scoreFinal = 0;
    let average = 0;
    mentores.forEach((mentor) =>{
        let score = 0;
        mentor.scores.forEach((item) =>{
            score = score + item.score;
        });
        mentor.average = score/(mentor.scores).length;
        scoreFinal = scoreFinal + mentor.average;
    });
    average = scoreFinal/mentores.length

    return average;
}

console.log(calculateAverageMentores(mentorsArray));