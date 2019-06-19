// let arrayOfPosts;
// let key = '8c0caf1ec75b0a9d351af523ead07898'
// // this function waits for the web page to be loaded, when it does it will run the code inside of it which happen to be getPosts()
// window.onload = function() {
//   getPosts()
  
// }
let arr
function getWeather(){
fetch('http://api.openweathermap.org/data/2.5/weather?zip=77013,us&APPID=8c0caf1ec75b0a9d351af523ead07898')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));

  })};

function display(){
    document.getElementById('wt').innerText = 'Howdy Ho';
}