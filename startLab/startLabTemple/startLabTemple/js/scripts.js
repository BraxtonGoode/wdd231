import {url, temples} from '../data/temples.js'
// console.log(temples)
// console.log(url)

// displays all the temples here
const showHere = document.querySelector('#showHere')

// get a reference to the HTML dialog element
const mydialog = document.querySelector('#mydialog')
const mytitle = document.querySelector('#mydialog h2')
const myclose = document.querySelector('#mydialog button')
const myinfo = document.querySelector('#mydialog p')

myclose.addEventListener('click', ()=> {
    mydialog.close();
})
// display all the JSON array items
function displayItems(data){
    // console.log(data)
    data.forEach(item => {
        const photo = document.createElement('img')
        photo.src = `${url}${item.path}`
        photo.alt = `${item.name}`
        photo.addEventListener('click', () => {
            showstuff(item)
        })
        showHere.appendChild(photo)
    }); //end loop
}
displayItems(temples)

//populate the dialog with information
function showstuff(item){
    mytitle.innerHTML = item.name
    myinfo.innerHTML = `Dedicated ${item.dedicated} by ${item.person} as temple number ${item.number}`
    mydialog.showModal();
}//end function