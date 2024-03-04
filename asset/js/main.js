var API = "97ed86b99fdcf738c7a080e0fa9fde20"
var city = 'Surat'
var serch = document.getElementById('seatcycrch')
serch.addEventListener("keyup", () => {
    city = document.getElementById('seatcycrch').value
    $.ajax({
        url: `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API}`,
        method: 'GET',
        success: function (res) {
            let cityname = document.getElementById('cityname')
            cityname.innerHTML=''
            for (var i = 0; i < res.length; i++) {
                var li=document.createElement('option')
                 li.value=`${res[i].name}`
                 li.innerHTML=`<span>${res[i].state},${res[i].country}</span>`
                cityname.appendChild(li)
            }
        }
    })
})

function enter(city) {
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`,
        method: 'GET',
        success: function (cityWeather) {
            console.log(cityWeather)
            // alert('dcaui')
            var weather = document.getElementById('weather')
            weather.innerHTML = `
                <img class="weather-icon"
                src="https://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@2x.png"
                alt="...">
                <h1 class="temp">${Math.trunc(cityWeather.main.temp - 273)} °C</h1>
                <h2 class="city">${cityWeather.name},${cityWeather.sys.country}</h2>
                <div class="details">
                    <div style="display: flex;" class="col">
                        <img class="humi"
                            src="https://static-00.iconduck.com/assets.00/humidity-icon-2048x1675-xxsge5os.png">
                        <div class="info">
                            <p class="humidity">${cityWeather.main.humidity}%</p>
                            <p>Humidity</p>
                        </div>
                    </div>
                    <div class="col">
                        <img src="https://cdn-icons-png.flaticon.com/512/136/136712.png">
                        <div class="info">
                            <p class="wind">${cityWeather.wind.speed}km/h</p>
                            <p>Wind Speed</p>
                        </div>
                    </div>
                </div>`
        }
    })
}