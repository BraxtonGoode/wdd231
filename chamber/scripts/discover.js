const filename = "data/locations.json"
const locationsSpots = document.querySelector(".locations")
const placeOfTheDay = document.querySelector('.placePicture')
const welcomeMessage = document.querySelector('#message')

getFetchData(filename)


async function getFetchData(file) {
    try {
        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(`Network resonse was not ok: ${response.statusText}`)
        }
        const data = await response.json();

        const locations = Object.values(data)

        displayLocations(locations)
        displayPlaceOfTheDay(locations)
        displayWelcomeMessage()


    } catch (error) {
        console.error(`error fething data: ${error}`)
    }
    
}

const displayLocations = (locations) => {
    // console.log("test")
    // console.log(locations)
    locations.forEach(location => {
        // console.log("test")
        // console.log(location.image)
        const picture = document.createElement('figure')

        picture.classList.add("picture_location")

        const img = document.createElement('img')
        const figcaption = document.createElement('figcaption')

        img.setAttribute('src',location.image)
        img.setAttribute('alt', `The location is ${location.name}`);
        img.setAttribute('loading', 'lazy')
        img.setAttribute('width', 350)
        img.setAttribute('height', 200)
        figcaption.innerHTML = `<strong>${location.name}</strong>`

        picture.appendChild(figcaption)
        picture.appendChild(img)

        locationsSpots.appendChild(picture)
    });
}

const displayPlaceOfTheDay = (locations) => {
    const today = new Date()
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false };
    const currentDay = today.toLocaleDateString('en-US', options)
    if (localStorage.getItem('place of the day')!== null){

        if (localStorage.getItem('currentDay') === currentDay){ 

            placeOfTheDay.innerHTML= ""      
   
            // pulling info off of local storage and parsing back 
            const pictureInfo = JSON.parse(localStorage.getItem('place of the day'));
            const image = pictureInfo.image


            // creating HTML to put picture info into
            const picture = document.createElement('figure')

            picture.classList.add("placeOfTheDayPicture")

            const img = document.createElement('img')
            const figcaption = document.createElement('figcaption')

            img.setAttribute('src',image)
            img.setAttribute('alt', `The location is ${pictureInfo.name}`);
            img.setAttribute('loading', 'lazy')
            img.setAttribute('width', 250)
            img.setAttribute('height', 200)
            figcaption.innerHTML = `<strong>${pictureInfo.name}</strong>`


            picture.appendChild(img)
            picture.appendChild(figcaption)

            placeOfTheDay.appendChild(picture)

            // console.log(image)

        } else {
            randomLocationGenerator(locations)
        }

        
    } else {
        randomLocationGenerator(locations)

    }

}

const randomLocationGenerator = (locations)=>{
    
        // random generating location
        const randomIndex = Math.floor(Math.random() * locations.length);
        const placeOfTheDay = locations[randomIndex];
        localStorage.setItem('place of the day', JSON.stringify(placeOfTheDay) )

        // todays date long form
        const today = new Date();
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false };
        const currentDay = today.toLocaleDateString('en-US', options)
        localStorage.setItem('currentDay',currentDay)
}


const displayWelcomeMessage = () => {
    const today = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false };
    const currentDay = today.toLocaleString('en-US', options);

    const storedDay = localStorage.getItem('currentDay'); 

    // Check if there is a stored day
    if (storedDay === null) {
        welcomeMessage.innerHTML = `<strong>Welcome! Let us know if you have any questions.</strong>`;
    } else {
        const lastVisitDate = new Date(storedDay); 

        // Check if the last visit was today
        if (lastVisitDate.toDateString() === today.toDateString()) {
            welcomeMessage.innerHTML = `<strong>Back so soon! Awesome.</strong>`;
        } else {
            // Calculate the difference in days
            const differenceInTime = today - lastVisitDate;
            const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24)); // Convert ms to days
            welcomeMessage.innerHTML = `<strong>You last visited ${differenceInDays} day(s) ago.</strong>`;
        }
    }

    // updating the currentDay in localStorage for the next visit
    localStorage.setItem('currentDay', currentDay); // Store the current date and time
}








