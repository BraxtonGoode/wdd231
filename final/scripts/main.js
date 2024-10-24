// nav
const hamButton = document.getElementById('menuButton')
const navigation = document.getElementById('animateme')

hamButton.addEventListener('click', ()=>{
    navigation.classList.toggle('open')
    hamButton.classList.toggle('open')
})

// footer
const date = new Date()

const currentyear = document.querySelector('#currentyear')
currentyear.textContent = `${date.getFullYear()}`

const lastModified = document.querySelector('#lastModified')
const lastMod = document.lastModified
lastModified.textContent = `Last modified: ${lastMod}`