// navigation menu

const hamMenuButton = document.querySelector('#menu');
const navigation = document.querySelector('.menuLinks')

hamMenuButton.addEventListener('click', () => {
    navigation.classList.toggle('open')
    hamMenuButton.classList.toggle('open')
}
)







// card creation 
const cards = document.querySelector('#cards'); // Ensure there's an element with id "cards"

async function getFetchData(file) {
    try {
        const response = await fetch(file);
        
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }

        const data = await response.json();
        console.table(data); // Log the fetched data for debugging

        // Convert the object into an array to use for display
        const members = Object.values(data); // Get the values as an array
        displayBusinesses(members); // Pass the array to display function
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const displayBusinesses = (members) => {
    cards.innerHTML = ''; // Clear previous cards

    members.forEach(member => {
        const card = document.createElement('section');

        card.classList.add("buissnessCard");

        const businessName = document.createElement('h2');
        const address = document.createElement('p');
        const webUrl = document.createElement('a'); // Use anchor element for the URL
        const img = document.createElement('img');
        const membershipLevel = document.createElement('p');

        // Set the properties of the created elements
        businessName.textContent = member.name;
        address.textContent = member.address; // Use addresses from JSON
        webUrl.textContent = "Visit Website"; // Link text
        webUrl.setAttribute('href', member.url); // Add the URL
        webUrl.setAttribute('target', '_blank'); // Open in a new tab
        img.setAttribute('src', member.image);
        img.setAttribute('alt', `Company is ${member.name}`);
        membershipLevel.textContent = `Membership Level: ${member.membershipLevel}`; // Add membership level

        // Append the elements to the card
        card.appendChild(img);
        card.appendChild(businessName);
        card.appendChild(address);
        card.appendChild(webUrl);
        card.appendChild(membershipLevel);

        // Append the card to the cards container
        cards.appendChild(card);
    });
}

// Specify the file name and call the fetch function
const fileName = "data/members.json"; // Ensure the path is correct
getFetchData(fileName);



// footer year and last modified
// todays date
const date = new Date();

//find current year
const currentyear = document.querySelector("#currentyear");
currentyear.textContent = `${date.getFullYear()}`;

//find last modified

const lastModified = document.querySelector("#lastModified")
const lastMod = document.lastModified;
lastModified.innerHTML = `Last Updated: ${lastMod}`;