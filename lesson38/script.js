const myKey = '3b155ba1';
const button = document.querySelector('.button');
const input = document.querySelector('#input');
button.addEventListener('click', sss);

let muvieData;
function sss(){
   $.get('http://www.omdbapi.com/?apikey=3b155ba1&t='+input.value, (data) => setData(data));
};

function setData(data) {
  console.log('d', data);
  muvieData = data;
  $('#p1').text(muvieData.Actors);
  $('.div2').text(muvieData.DVD);
  $('.img').attr('src', muvieData.Poster);
}   
