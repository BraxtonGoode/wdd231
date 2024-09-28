// navigation menu

const hamMenuButton = document.querySelector('#menuButton');
const navigation = document.querySelector('#animateme')

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
        // console.table(data); // Log the fetched data for debugging

        // Convert the object into an array to use for display
        const members = Object.values(data); // Get the values as an array
        if (displayB.classList.contains("active")){
            displayBusinesses(members);
        } else if (listB.classList.contains("active")){
            listBusinesses(members)
        }
        


         // Pass the array to display function
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
        const phoneNumber = document.createElement('p')
        const webUrl = document.createElement('a'); 
        const img = document.createElement('img');
        const membershipLevel = document.createElement('p');

        //properties of the created elements
        businessName.textContent = member.name;
        address.textContent = member.address;
        phoneNumber.textContent = member.phoneNumber
        webUrl.textContent = "Visit Website"; // Link text
        webUrl.setAttribute('href', member.url); // Add the URL
        webUrl.setAttribute('target', '_blank'); // Open in a new tab
        img.setAttribute('src', member.image);
        img.setAttribute('alt', `Company is ${member.name}`);
        img.setAttribute('loading', 'lazy')
        img.setAttribute('width', 100)
        img.setAttribute('height', 100)
        membershipLevel.textContent = `Membership Level: ${member.membershipLevel}`; // Add membership level

        // Append the elements to the card
        card.appendChild(img);
        card.appendChild(businessName);
        card.appendChild(address);
        card.appendChild(phoneNumber)
        card.appendChild(webUrl);
        card.appendChild(membershipLevel);

        // Append the card to the cards container
        cards.appendChild(card);
    });
}


const list = document.querySelector('#list'); // Ensure there's an element with id "list"

const listBusinesses = (members) => {
    // Clear previous table or create a new one
    const existingTable = document.querySelector('.business-table');
    if (existingTable) {
        existingTable.remove();
    }

    const table = document.createElement('table');
    table.classList.add("business-table");

    // Create the table header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = `
        <th>Business Name</th>
        <th>Address</th>
        <th>Phone Number</th>
        <th>Website</th>
        <th>Level</th>
    `;
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create the table body
    const tbody = document.createElement('tbody');

    members.forEach(member => {
        const row = document.createElement('tr');

        // Create cells for each member property
        const businessNameCell = document.createElement('td');
        businessNameCell.textContent = member.name;

        const addressCell = document.createElement('td');
        addressCell.textContent = member.address;

        const phoneNumberCell = document.createElement('td');
        phoneNumberCell.textContent = member.phoneNumber;

        const webUrlCell = document.createElement('td');
        const webUrl = document.createElement('a');
        webUrl.textContent = "Visit Website";
        webUrl.setAttribute('href', member.url);
        webUrl.setAttribute('target', '_blank'); // Open in a new tab
        webUrlCell.appendChild(webUrl);

        const membershipLevelCell = document.createElement('td');
        membershipLevelCell.textContent = member.membershipLevel;

        // Append cells to the row
        row.appendChild(businessNameCell);
        row.appendChild(addressCell);
        row.appendChild(phoneNumberCell);
        row.appendChild(webUrlCell);
        row.appendChild(membershipLevelCell);

        // Append the row to the tbody
        tbody.appendChild(row);
    });

    // Append tbody to the table
    table.appendChild(tbody);

    // Append the table to the list container
    list.appendChild(table);
};

const getClear = () =>{
        // Clear existing content
        cards.innerHTML = ''; // Clear any existing cards or tables
        const existingTable = document.querySelector('.business-table');
        if (existingTable) {
            existingTable.remove(); // Remove existing table if it exists
        }
    
}

// Display button allows specific creation

const displayB = document.querySelector('#displaycard');
const listB = document.querySelector('#listcards')

displayB.addEventListener('click', () => {
    displayB.classList.add('active')
    listB.classList.remove('active'); // Ensure only one is active
    // Specify the file name and call the fetch function
    const fileName = "data/members.json"; // Ensure the path is correct
    getClear()
    getFetchData(fileName)
}
)

listB.addEventListener('click', () => {
    listB.classList.add('active')
    displayB.classList.remove('active'); // Ensure only one is active
    const fileName = "data/members.json"; // Ensure the path is correct
    getClear()
    getFetchData(fileName);
}
)

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