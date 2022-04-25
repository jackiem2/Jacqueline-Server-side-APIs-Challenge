var getWeather = function(city) {
    var apiKey = "86ca01d3351656f207026dbba41aabc2"
    var apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

    fetch(apiURL)
    .then(function(response){
        response.json().then(function(data){
            displayWeather(data, city);
        })
    })
}

