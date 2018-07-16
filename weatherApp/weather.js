// const bookMapping = {
//     1: 1234,
//     2: 43,
//     id: 234
// };

// const id = 2;
// const isbn = bookMapping[id]

function getWeather(selectedCity) {
    const encodedSelectedCity = window.encodeURIComponent(selectedCity);

    var url =
    "https://query.yahooapis.com/v1/public/yql?q=select%20item.condition %20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + encodedSelectedCity + "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";


    $.get(url).done(function(response) {
        debugger
        var weatherCondition = response.query.results.channel.item.condition.text;
        var weatherTemp = response.query.results.channel.item.condition.temp;

        $('.city-name').text(selectedCity);
        $('.weather-condition').text(weatherCondition);
        $('.weather-temp').text(weatherTemp);

        // $('#weatherDisplay').show();
        var weatherDisplay = document.getElementById('weatherDisplay')

        if (weatherCondition.toLowerCase().indexOf('sunny') !== -1) {
            weatherDisplay.classList.add('sunny');
        } else {
            weatherDisplay.classList.remove('sunny');
        }

        if (weatherCondition.toLowerCase().indexOf('cloudy') !== -1) {
            weatherDisplay.classList.add('cloudy');
        } else {
            weatherDisplay.classList.remove('cloudy');
        }


    });
};

$(document).ready(function() {
    debugger
    
    // var form = document.getElementById('weatherApp');    
    var form = document.getElementById('weatherApp');
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // var form = e.currentTarget;
        var selectedCity = $('#cities').val();
        getWeather(selectedCity);
        debugger
    });

    // button.addEventListener('submit', processWeather)
    // var processWeather = function(e) {
    //     e.preventDefault();

    //     // var form = e.currentTarget;
    //     var selectedCity = $('#cities').val();
    //     getWeather(selectedCity);
    //     debugger
    // };
});