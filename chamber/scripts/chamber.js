// navigation menu

const hamMenuButton = document.querySelector('#menuButton');
const navigation = document.querySelector('#animateme')

hamMenuButton.addEventListener('click', () => {
    navigation.classList.toggle('open')
    hamMenuButton.classList.toggle('open')
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