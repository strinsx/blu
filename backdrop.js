

const reel = new URLSearchParams(window.location.search);
const reeledID = reel.get('id'); 
const reeledTitle = reel.get('title');
const reeleddesc = reel.get('desc');
const frame = document.querySelector(".frame");
const reeledPoster = reel.get('poster');
let title = document.querySelector(".backdrop-title");
let description = document.querySelector(".backdrop-description");
let poster = document.querySelector(".backdrop-poster")



async function fetchAPI() {

  try{

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjAzMTFmMTFjMWM3ZTljZDIzMWVlYzlhZTExZjhkOSIsIm5iZiI6MTczMjM0NzI5OS40NDg3NDg4LCJzdWIiOiI2NzNhZGZlZjJjMGI3ZmQyMDM0YWI4MjAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xjh96UMOvsrY57aHLWhlQ-J4y2_nKayH47yUBk4lUgg'
      }
    };

    const api = await fetch ('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options);
     const fetchDATA = await api.json();
     frame.src = `https://moviesapi.club/movie/${reeledID}`;
     title.textContent = reeledTitle;
     description.textContent = reeleddesc;
     poster.src = reeledPoster;
     

     
     

   

  }
  catch(error) {

  }
  
}

fetchAPI();