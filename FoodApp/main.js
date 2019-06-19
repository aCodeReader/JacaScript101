function randomMeal(){
    fetch('https://www.themealdb.com/api/json/v1/1/random.php',
    { credentials: 'same-origin' })
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
     return(JSON.stringify(myJson));
    });
  const meal = document.getElementById('box')
  
  }