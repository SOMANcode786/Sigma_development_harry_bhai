// const apiKey = "284b4de12232d216d51ea1da940ff6ca";

document.getElementById("searchBtn").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;
  getWeather(city);
});

async function getWeather(city) {
  try {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=284b4de12232d216d51ea1da940ff6ca&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    let data = await response.json();

    document.getElementById("weatherResult").innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>🌡 Temperature: ${data.main.temp}°C</p>
      <p>☁ Weather: ${data.weather[0].description}</p>
      <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    document.getElementById(
      "weatherResult"
    ).innerHTML = `<p style="color:red">${error.message}</p>`;
  }
}
