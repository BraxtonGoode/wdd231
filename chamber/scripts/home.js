const currentWeather = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const figCaption = document.querySelector('figcaption');
const weatherDescription = document.querySelector('#weatherDescription')
const lat = 32.25
const lon = -110.98

document.getElementById('heroButton').addEventListener('click', function() {
    window.location.href = 'directory.html';
});



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
        <p><strong>Current temp</strong>: ${Math.round(data.main.temp)}&deg;F</p>
        <p><strong>description</strong>: ${desc}</p>
        <p><strong>High</strong>: ${Math.round(data.main.temp_max)}&deg;F</p> 
        <p><strong>Low</strong>: ${Math.round(data.main.temp_min)}&deg;F</p>
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

const forecasturl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKEY}&units=imperial`;
async function apiforecastFetch() {
    try {
        const response = await fetch(forecasturl)
        if (response.ok){
            const data = await response.json()
            displayWeatherForecast(data)
        } else {
            throw Error(await response.text())
        }
        

    } catch (error) {
        console.log(error)
    }
}




function displayWeatherForecast(data) {
    const forecastItems = document.querySelectorAll('.forecast_items'); // Select all forecast items
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Loop to process the first three days of forecast
    for (let index = 0; index < 3; index++) { 
        const start = index * 8; // Calculate the the first measurement

       
        const forecastString = forecastItems[index].querySelector('.forecastString');
        // Create the date object
        const dateObject = new Date(data.list[start].dt * 1000);
        const dayName = days[dateObject.getDay()];         

        // Update the date and temperature for the current forecast item

        forecastString.innerHTML = `<strong>${dayName}</strong>: ${Math.round(data.list[start].main.temp)}°F`

    }
}
apiforecastFetch()


// card creation 
const cards = document.querySelector('#boxes'); // Ensure there's an element container

async function getFetchData(file) {
    try {
        const response = await fetch(file);
        
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        console.log('test 1')

        const data = await response.json();
        // console.table(data); // Log the fetched data for debugging

        // Convert the object into an array to use for display
        const members = Object.values(data); // Get the values as an array
        displayBusinesses(members);
        
        


         // Pass the array to display function
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const displayBusinesses = (members) => {
    // Filter members with membership level
    const eligibleMembers = members.filter(member => member.membershipLevel >= 2);

    // Shufflemembers
    const shuffledMembers = eligibleMembers.sort(() => 0.5 - Math.random());

    // Select the first 3 members
    const selectedMembers = shuffledMembers.slice(0, 3);

    selectedMembers.forEach(member => {        
        if (member.membershipLevel >=2){
            console.log(member.name)
            const card = document.createElement('section');

            card.classList.add("box");
    
            const businessName = document.createElement('h3');            
            const phoneNumber = document.createElement('p')
            const webUrl = document.createElement('a'); 
            const img = document.createElement('img');

            businessName.classList.add("title")
     
    
            //properties of the created elements
            businessName.textContent = member.name;            
            phoneNumber.innerHTML = `<strong>Phone</strong>: ${member.phoneNumber}`
            webUrl.innerHTML = `<strong> Website </strong>: ${member.url}`; // Link text         
            img.setAttribute('src', member.image);
            img.setAttribute('alt', `Company is ${member.name}`);
            img.setAttribute('loading', 'lazy')
            img.setAttribute('width', 100)
            img.setAttribute('height', 100)            
            
            // Append the elements to the card
            card.appendChild(img);
            card.appendChild(businessName);          
            card.appendChild(phoneNumber)
            card.appendChild(webUrl);
    
            // Append the card to the cards container
            cards.appendChild(card);



        }


    });
}


const fileName = "data/members.json"; // Ensure the path is correct

getFetchData(fileName);
