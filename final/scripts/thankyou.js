// get Url
const currentURL = window.location.href
// divide url
const baseURL = currentURL.split('?')

// get entries
let formData = baseURL[1].split('&')


function show(item) {
    formData.forEach(element => {
        if(element.startsWith(item)){
            const value = element.split('=')[1]

            if (value) {
                result = value.replace('%40', '@').replace(/\+/g, ' ').replace(/%2F/g, '/');
            } 
        }

    });
    return result
}

const displayResults = document.querySelector('.displayResults')

displayResults.innerHTML =
`<p><strong>Your name is</strong>: ${show('first')} ${show('last')}</p>
<p><strong>Your email is</strong>: ${show('email')}</p>
<p><strong>You Choose subcrition of</strong>: ${show('subtype')}</p>
`