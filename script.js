let weather = {
    apiKey : "461486238e89ff341344bde3ab9f41c7",
    fetchWeather: function (city) {
    fetch ("https://api.openweathermap.org/data/2.5/weather?q="
    + city
    + "&units=metric&appid="
    + this.apiKey
    )
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
    const {name} = data;
    const {icon, description} = data.weather [0];
    const {temp, humidity} = data.main;
    console.log(name, icon, description, temp, humidity);
    document.querySelector(".current_location").innerText = name;
    document.querySelector(".temperature").innerText = Math.round(temp) +"°C";
    document.querySelector(".description").innerText = description;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".humidity").innerText = "Humidity: "+ humidity + "%";
    document.body.style.backgroundImage = "url('https://source.unsplash.com/random/?" + name + "')";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".searchbar").value);
    },
};

document.querySelector(".searchbutton").addEventListener("click", function () {
weather.search();
});

document.querySelector(".searchbar").addEventListener("keyup", e => {
    if (e.key === "Enter") {
    weather.search();
    }
    });

weather.fetchWeather("London");