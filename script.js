async function getweather() {
    const city=
    document .getElementById("city") .value;
  const apiKey="14351bacd944928237b016bc4d09dbd9";

    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("weatherResult").innerHTML = `
      <h2>${data.name}</h2>
      <p>Temperature: ${data.main.temp} °C</p>
      <p>Weather: ${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity}%</p>
    `;
  } catch (error) {
    alert("Error fetching data");
  }
}

    
