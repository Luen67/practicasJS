const songsData = [
    {
      name: "Kashmir",
      band: "Led Zeppelin",
      releaseYear: "1980",
      image: "kashmir.jpg",
      statistics: {
        likes: 20000,
        reproductions: 8000,
      },
    },
    {
      name: "Smells Like Teen Spirit",
      band: "Nirvana",
      releaseYear: "1989",
      image: "slts.jpg",
      statistics: {
        likes: 25000,
        reproductions: 100000,
      },
    },
    {
      name: "So What",
      band: "Metallica",
      releaseYear: "1990",
      image: "so_what.jpg",
      statistics: {
        likes: 12000,
        reproductions: 95000,
      },
    },
    {
      name: "Nothing Else Matters",
      band: "Metallica",
      releaseYear: "1992",
      image: "nothing_else_matters.jpg",
      statistics: {
        likes: 128000,
        reproductions: 915000,
      },
    },
    {
      name: "Daze",
      band: "Poets_of_the_Fall",
      releaseYear: "2014",
      image: "daze.jpg",
      statistics: {
        likes: 3548413,
        reproductions: 87095138,
      },
    },
    {
      name: "The Sweet Scape",
      band: "Poets_of_the_Fall",
      releaseYear: "2018",
      image: "the_sweet_scape.jpg",
      statistics: {
        likes: 26268856,
        reproductions: 2424568,
      },
    },
  ];

  const dRow = document.querySelector('#d_row');
  const dContainer = document.querySelector('#d_container');

  const insertSongInfo = (songInfo) =>{
    const divCardSong = document.createElement('div');
    const divSongContainer  = document.createElement('div');
    const imgSong = document.createElement('img');
    const pSongText = document.createElement('p');
    const pBandtext = document.createElement('p');
    divCardSong.className = "col-12 col-lg-4 col-md-6 card__song";
    divSongContainer.className = "song__container d-flex flex-column justify-content-end align-items-center m-2";
    divSongContainer.setAttribute("data-bs-toggle","modal");
    divSongContainer.setAttribute("data-bs-target","#modal-"+(songInfo.name).replaceAll(" ","-"));
    imgSong.className = "song__image";
    imgSong.setAttribute("src","assets/"+songInfo.image);
    pSongText.className = "fs-3 fw-bold text-white song__text";
    pSongText.textContent = songInfo.name;
    pBandtext.className = "fs-5 fw-bold text-white band__text";
    pBandtext.textContent = songInfo.band;
    dRow.appendChild(divCardSong);
    divCardSong.appendChild(divSongContainer);
    divSongContainer.appendChild(imgSong);
    divSongContainer.appendChild(pSongText);
    divSongContainer.appendChild(pBandtext);    
  }

const insertModalSong = (songInfo) =>{
    const divModal = document.createElement('div');
    const divModalDialog  = document.createElement('div');
    const divModalContent  = document.createElement('div');
    const divModalHeader  = document.createElement('div');
    const h1 = document.createElement('h1');
    const button  = document.createElement('button');
    const divModalBody  = document.createElement('div');
    const pBand  = document.createElement('p');
    const spanBand = document.createElement('span');
    const spanBandText = document.createElement('span');
    const pYear  = document.createElement('p');
    const spanYear = document.createElement('span');
    const spanYearText = document.createElement('span');
    const pStatistics  = document.createElement('p');
    const spanStatistics = document.createElement('span');
    const spanStatisticsText = document.createElement('span');
    const ul  = document.createElement('ul');
    const liLikes = document.createElement('li');
    const liReproductions = document.createElement('li');
    divModal.className = "modal fade";
    divModal.setAttribute("id","modal-"+(songInfo.name).replaceAll(" ","-"));
    divModal.setAttribute("tabindex","-1");
    divModal.setAttribute("aria-labelledby","exampleModalLabel");
    divModal.setAttribute("aria-hidden","true");
    divModalDialog.className = "modal-dialog modal-dialog-centered";
    divModalContent.className = "modal-content";
    divModalHeader.className = "modal-header";
    h1.className = "modal-title fs-5 fw-bold";
    h1.setAttribute("id","exampleModalLabel");
    h1.textContent = songInfo.name;
    button.className = "btn-close";
    divModal.setAttribute("data-bs-dismiss","modal");
    divModal.setAttribute("aria-label","Close");
    divModalBody.className = "modal-body";
    spanBand.className = "fw-bold";
    spanBand.textContent = "Banda: ";
    spanBandText.textContent = songInfo.band;
    spanYear.className = "fw-bold";
    spanYear.textContent = "Año Lanzamiento: ";
    spanYearText.textContent = songInfo.releaseYear;
    spanStatistics.className = "fw-bold";
    spanStatistics.textContent = "Estadisticas: ";
    liLikes.textContent = "Likes: "+songInfo.statistics.likes;
    liReproductions.textContent = "Reproducciones: "+songInfo.statistics.reproductions;

    document.body.insertBefore(divModal,dContainer);
    divModal.appendChild(divModalDialog);
    divModalDialog.appendChild(divModalContent);
    divModalContent.appendChild(divModalHeader);
    divModalHeader.appendChild(h1);
    divModalHeader.appendChild(button);
    divModalContent.appendChild(divModalBody);
    divModalBody.appendChild(pBand);
    pBand.appendChild(spanBand);
    pBand.appendChild(spanBandText);
    divModalBody.appendChild(pYear);
    pYear.appendChild(spanYear);
    pYear.appendChild(spanYearText);
    divModalBody.appendChild(pStatistics);
    pStatistics.appendChild(spanStatistics);
    pStatistics.appendChild(spanStatisticsText);
    divModalBody.appendChild(ul);
    ul.appendChild(liLikes);
    ul.appendChild(liReproductions);
}


const createSongsSection = (songsList, insertSongInfoCB, insertModalSongCB) => {
    songsList.forEach((songInfo,index) =>{
        insertSongInfoCB(songInfo);
        insertModalSongCB(songInfo);
    })
  }


 createSongsSection(songsData,insertSongInfo,insertModalSong);



  /*<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">Kashmir</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p><span class="fw-bold ">Banda: </span>Led Zeppelin</p>
              <p><span class="fw-bold ">Año Lanzamiento: </span>1980</p>
              <p><span class="fw-bold ">Estadisticas: </p>
              <ul>
                <li>Likes: 2000</li>
                <li>Reproducciones: 8000</li>
              </ul>
            </div>
          </div>
        </div>
      </div>*/