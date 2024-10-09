const currentWeather = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const figCaption = document.querySelector('figcaption');

const apiKEY = '405d8b981cd2f075df8e8a5e43e8f35a'
const url = `https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=${apiKEY}&units=imperial`;


async function apiFetch() {
    try {
        const response = await fetch(url)
        if (response.ok){
            const data = await response.json()
            console.log(data)
            displayResults(data)
        } else {
            throw Error(await response.text())
        }
        

    } catch (error) {
        console.log(error)
    }
}

function displayResults(data){
    const town = data.name
    currentWeather.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = ` https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    figCaption.textContent = `${desc}`;
}




apiFetch()

