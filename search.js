const moviecontainer = document.querySelector('.movie-container');
const reel = new URLSearchParams(window.location.search);
const reeledTitle = reel.get('keyword');
let searchTitle = document.querySelector('.search-title');
let inputID = document.querySelector("#inputID");


import {cellAttributes} from "./searchmodules.js";




async function z() {

    try{

        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjAzMTFmMTFjMWM3ZTljZDIzMWVlYzlhZTExZjhkOSIsIm5iZiI6MTczMjM0NzI5OS40NDg3NDg4LCJzdWIiOiI2NzNhZGZlZjJjMGI3ZmQyMDM0YWI4MjAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xjh96UMOvsrY57aHLWhlQ-J4y2_nKayH47yUBk4lUgg'
            }
          };

          const api = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent (reeledTitle)}&include_adult=false&language=en-US&page=1`, options);
          const dataAPI = await api.json();
          console.log(dataAPI);
          
          for(let i = 0; i < dataAPI.results.length; i++) {

            const cellbox = document.createElement('div');
            const poster = document.createElement('img');
            const title = document.createElement('h2');
            cellbox.className = 'cellbox';
            poster.className = 'search-poster';
            title.className = 'title-name';
            poster.src = `https://image.tmdb.org/t/p/original/${dataAPI.results[i].poster_path}}`;
            title.textContent = dataAPI.results[i].title;
            document.body.appendChild(cellbox);
            cellbox.appendChild(poster);
            cellbox.appendChild(title);
            console.log('hi');
            moviecontainer.appendChild(cellbox);

            poster.addEventListener('click', ()=> {
              let apiTitle = dataAPI.results[i].title;
              let apiPoster = `https://image.tmdb.org/t/p/original/${dataAPI.results[i].poster_path}`;
              let apiID = dataAPI.results[i].id;
              let apiDesc = dataAPI.results[i].overview;
              window.location.href = `backdrop.html?id=${encodeURIComponent(apiID)}&title=${encodeURIComponent(apiTitle)}&poster=${encodeURIComponent(apiPoster)}&desc=${apiDesc}`;
            
            })

          }

          let titleName = searchTitle.textContent = reeledTitle.toUpperCase();

          inputID.addEventListener('keydown', (s)=> {
            if(s.key === "Enter") {
              window.location.href = `search.html?keyword=${inputID.value}`;
            }
          })

    }
    catch(error) {
        console.error(error);
    }
    
}

z();
