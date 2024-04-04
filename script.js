fetch("https://restcountries.com/v3.1/all")
    .then((data) => data.json())
    .then((data1) => foo(data1));

function foo(data1) {
    var container = document.createElement("div");
    container.className = "container";

    var row;
    for (var i = 0; i < data1.length; i++) {
        if (i % 3 === 0) { // Start a new row every 3 cards
            row = document.createElement("div");
            row.className = "row mb-4"; // Add margin-bottom to each row
        }
        var col = document.createElement("div");
        col.className = "col-md-4";
        col.innerHTML = `<div class="card border-primary mb-3 h-100" style="max-width: 18rem;">
            <div class="card-header">${data1[i].name.common}</div>
            <div class="card-body text-primary d-flex flex-column">
              <img src="${data1[i].flags.svg}" class="img-fluid mb-2" style="max-height: 150px; width: auto;" alt="Flag">
              <h5 class="card-title">Capital: ${data1[i].capital}</h5>
              <p class="card-text">Region: ${data1[i].region}</p>
              <p class="card-text">Country Code: ${data1[i].cca2}</p>
              <p class="card-text">Population: ${data1[i].population}</p>
              <button class="btn btn-primary mt-auto" onclick="getWeather('${data1[i].name.common}')">Click for Weather Data</button>
            </div>
          </div>`;
        row.append(col);

        if ((i + 1) % 3 === 0 || i === data1.length - 1) { // Append row after every 3 cards or at the end of data
            container.append(row);
        }
    }

    document.body.append(container);
}

function getWeather(countryName) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=YOUR_API_KEY`)
        .then(response => response.json())
        .then(weatherData => {
            alert(`Weather in ${countryName}: ${weatherData.weather[0].description}`);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
