// grab url
const currenturl = window.location.href


// divide url
const baseUrl = currenturl.split('?')

// grab form data
let formData = baseUrl[1].split('&')

// console.log(formData)

// looped item to break it down and replace pieces
function show(item) {
    formData.forEach(element => {
        // Check if the element starts with the specified item
        if (element.startsWith(item)) {
            // Split the element at '=' and get the value
            const value = element.split('=')[1];

            if (value) {
                // Replace '%40' with '@' and all '+' with a space
                result = value.replace('%40', '@').replace(/\+/g, ' ').replace(/%2F/g, '/');
            }
        }
    });

    return result; 
}

console.log(show('first'))

const displayresults = document.getElementById('results')
displayresults.innerHTML = `
<p><strong>Your name is</strong>: ${show('first')} ${show('last')} </p>
<p><strong>The title of your organization is</strong>: ${show('organization-title')}</p>
<p><strong>The name of your organization is</strong>: ${show('business-organization-name')}</p>
<p><strong>your email is</strong>: ${show('email')}</p>
<p><strong>your mobile number is</strong>: ${show('phone')}</p>
<p><strong>your membership level is</strong>: ${show('membership-level')}</p>
<p><strong>Your business does</strong>: ${show('description')}</p>
<p><strong>You submitted at</strong>: ${show('timestamp')}</p>
`