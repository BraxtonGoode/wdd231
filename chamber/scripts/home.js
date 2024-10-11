const currentWeather = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const figCaption = document.querySelector('figcaption');
const weatherDescription = document.querySelector('#weatherDescription')
const lat = 32.25
const lon = -110.98

const apiKEY = '405d8b981cd2f075df8e8a5e43e8f35a'
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKEY}&units=imperial`;
async function apiFetch() {
    try {
        const response = await fetch(url)
        if (response.ok){
            const data = await response.json()
            console.log(data)
            displayCurrentResults(data)
        } else {
            throw Error(await response.text())
        }
        

    } catch (error) {
        console.log(error)
    }
}
function displayCurrentResults(data){
    const town = data.name
    
    const iconsrc = ` https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    const sunset = data.sys.sunset
    const sunrise = data.sys.sunrise
    const date = new Date(sunset)
    currentWeather.innerHTML = `
        <p><strong>Current temp</strong>: ${data.main.temp}&deg;F</p>
        <p><strong>description</strong>: ${desc}</p>
        <p><strong>High</strong>: ${data.main.temp_max}&deg;F</p> 
        <p><strong>Low</strong>: ${data.main.temp_min}&deg;F</p>
        <p><strong>Humidity</strong>: ${data.main.humidity}%</p>
        <p><strong>Sunrise</strong>: ${calculateSunTime(data.sys.sunrise)}</p>
        <p><strong>Sunset</strong>: ${calculateSunTime(data.sys.sunset)}</p>    
    `;




}
function calculateSunTime(number) {
    const timestamp = number * 1000
    let date = new Date(timestamp)


    let hours = String(date.getHours())
    const minutes = String(date.getMinutes())

    const amPm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12 || 12; 

    // Format time
    const formatTime = `${hours}:${minutes} ${amPm}`;
    


    return formatTime
}




apiFetch()
