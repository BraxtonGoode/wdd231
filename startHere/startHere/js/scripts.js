// grab the url
const currenturl = window.location.href;
// console.log(currenturl)

// divide current url in half

const baseurl = currenturl.split('?')
// console.log(baseurl)

// grab form data
let formData = baseurl[1].split('&')
// console.log(formData)

// looped item to show key value pairs
function show(cup) {
    // console.log(cup)
    formData.forEach(element => {
        // console.log(element)

        if (element.startsWith(cup)){
            result = element.split('=')[1].replace('%40','@')
   

        }
    });
    return result
}
// id info
const showinfo = document.querySelector('#results')
showinfo.innerHTML = `
<p>Appointment for ${show("first")}${show("last")}</p>
<p>Proxy ${show("ordinance")} on ${show("fecha")} in the ${show("location")}</p>
<p>Your phone number is: ${show('phone')}</p>
<p>Your email is: <a href="${show('email')}">${show('email')}</a></p>

`

