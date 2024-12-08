let movieCells = document.querySelectorAll(".cellbox");
let movietitle = document.querySelector("#titlemov");
let poster = document.querySelectorAll(".poster");
let titles = document.querySelectorAll(".title-name");
let backdropTitle = document.querySelectorAll(".backdrop-title")
let miniTitle = document.querySelectorAll(".mini-title");
let miniPoster = document.querySelectorAll(".mini-poster");
let description = document.querySelectorAll(".description");
let releaseDate = document.querySelectorAll(".released-date");
let estimated = document.querySelectorAll(".estimated")
let backdropA = document.querySelectorAll(".backdrop-description");
let inputID = document.querySelector("#inputID");



/// DECLARE THE API CODE SA LOOB
/// WHEN A IS CLICKED, EGT THE API CODE OF THE CLICKED A,
/// THEN SERVE THE BACKDROP FUNCTION


async function overview() {

    try {

        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjAzMTFmMTFjMWM3ZTljZDIzMWVlYzlhZTExZjhkOSIsIm5iZiI6MTczMjM0NzI5OS40NDg3NDg4LCJzdWIiOiI2NzNhZGZlZjJjMGI3ZmQyMDM0YWI4MjAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xjh96UMOvsrY57aHLWhlQ-J4y2_nKayH47yUBk4lUgg'
            }
          };

        const api = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options);
        const response = await api.json();
        const searchAPI = await fetch('https://api.themoviedb.org/3/search/keyword?page=1', options);
        console.log(response);
        const serachRes = await searchAPI.json();
        console.log(serachRes);
       

        for(let i = 0; i < movieCells.length; i++) {
          console.log(response.results[i].title);
        let posterapi = response.results[i].poster_path;
         titles[i].textContent = response.results[i].title;
          poster[i].src = `https://image.tmdb.org/t/p/original/${posterapi}`;

          poster[i].addEventListener('click', ()=> {
            let idAPI =  response.results[i].id;
            let titleAPI = response.results[i].title;
            let descAPI = response.results[i].overview;
            let reposter = `https://image.tmdb.org/t/p/original/${posterapi}`
            window.location.href = `backdrop.html?id=${idAPI}&title=${encodeURIComponent(titleAPI)}&desc=${encodeURIComponent(descAPI)}&poster=${encodeURIComponent(reposter)}`;
            
          })
          
         }


         for(let i = 0; i < movieCells.length; i++) {
          let backdropapi = response.results[i].backdrop_path;
          miniTitle[i].textContent = response.results[i].title;
          miniPoster[i].src = `https://image.tmdb.org/t/p/original/${backdropapi}`;
          description[i].textContent = response.results[i].overview;
          releaseDate[i].textContent = `Date released:  ${response.results[i].release_date}`;
          estimated[i].textContent = `Vote ratings: ${response.results[i].vote_average}`;


         }
       
      
        
    }

    catch(error) {
        console.error(error);
    }
    
}

inputID.addEventListener('keydown', (ins)=>{
  if(ins.key === "Enter") {
    const keywordValue = inputID.value;
    window.location.href = `search.html?keyword=${keywordValue}&id=`;
  }
})





overview();



