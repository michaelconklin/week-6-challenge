var APIKey = "da64b8b8be621529947287a621d88e9d";

var city;

var cityInputEl = document.querySelector('#city');
var cityContainerEl = document.querySelector('#city-container');
var citySearchTerm = document.querySelector('#city-search-term');
var temp = data.list[i].main.temp;

var formSubmitHandler = function (event) {
    event.preventDeafault();

    var city = cityInputEl.value;

    if (city) {
        getCityWeather(city);

        cityContainerEl.textContent = '';
        cityInputEl.value = '';
    } else {
        alert("enter city");
    }
};

var getCityWeather = function (city) {
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

    fetch(queryURL)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    displayCity(data, user);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to get weather');
        });
};



