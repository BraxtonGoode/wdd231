// const API KEY
const APIKEY = 'AIzaSyCE0P-Z8rcgYzWQhQD_CuC6zoMjDz-kZqU'

// chnnel ID
const channelID = "UCQfgtVsyi5H4csi3JZDHylg"
// Uploads ID
const uploadsID = "UUQfgtVsyi5H4csi3JZDHylg"
// URL to input KEY
const fethURL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=UUQfgtVsyi5H4csi3JZDHylg&key=AIzaSyCE0P-Z8rcgYzWQhQD_CuC6zoMjDz-kZqU`
// cards of what the videos will be in
const cards = document.querySelector(".displayVideos")

// fetch video info
async function getFetchData(file){
    try {
        const response = await fetch(file)
        if (!response.ok){
            throw new Error('Network response was not ok: ' + response.statusText)
        }
        const data = await response.json();
        console.log(data)
        const videos = data.items
        // display videos
        displayVideos(videos)
    } catch (error) {
        console.log(error)

    }
}


const displayVideos = (videos) => {
    cards.innerHTML = ""; // Clear previous content
    videos.forEach(video => {

        if (!(video.snippet.description =="")){
            const videoId = video.snippet.resourceId.videoId; // Get the video ID

            // Create an iframe element
            const iframe = document.createElement('iframe');
            iframe.width = '560'; // Set the desired width
            iframe.height = '315'; // Set the desired height        

            // Use the appropriate embed URL
            iframe.src = `https://www.youtube.com/embed/${videoId}`;
            
        
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'; // Set allowed features
            iframe.allowFullscreen = true; // Allow fullscreen
            iframe.loading = 'lazy';

            // Create a title element
            const title = document.createElement('h3');
            title.innerText = video.snippet.title; // Set the title text

            // Create a container div for each video
            const videoContainer = document.createElement('div');
            videoContainer.classList.add('video-container'); // Optional: add a class for styling

            // Append the title and iframe to the container
            videoContainer.appendChild(title);
            videoContainer.appendChild(iframe);

            // Append the video container to the cards element
            cards.appendChild(videoContainer);
        }

    });
};


getFetchData(fethURL)
