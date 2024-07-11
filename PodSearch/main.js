// Theme Switching
const btnSwitch = document.querySelector('#switch');

// Load the theme from localStorage
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light');
        btnSwitch.classList.add('active');
    }
});

// Toggle the theme and save it to localStorage
btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('light');
    btnSwitch.classList.toggle('active');
    
    if (document.body.classList.contains('light')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.removeItem('theme');
    }
});

// Clone Image Function (not used in HTML, assuming for future use)
function cloneImage(event) {
    const clickedImage = event.target;
    const clonedImage = clickedImage.cloneNode(true);

    clickedImage.parentNode.appendChild(clonedImage);
}

// Search Podcasts Function
function searchPodcasts() {
    const searchTitle = document.getElementById('search-title').value.trim();

    if (searchTitle === '') {
        document.getElementById('status-message').textContent = "Bitte geben Sie einen Suchbegriff ein.";
        return;
    }

    document.getElementById('status-message').textContent = "Suche läuft...";

    fetchPodcasts(searchTitle);
}

// Fetch Podcasts from API
async function fetchPodcasts(title) {
    const url = new URL('https://api.fyyd.de/0.2/search/podcast/');
    url.searchParams.append('title', title);

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        insertSearchResults(data);
    }
    catch(error) {
        console.error('Fetch error:', error);
        document.getElementById('status-message').textContent = "Fehler beim Laden der Daten.";
    }
}

// Insert Search Results into HTML
function insertSearchResults(data) {
    const resultsDiv = document.getElementById('podcast-list');
    resultsDiv.innerHTML = '';

    data.data.forEach(podcast => {
        const podcastDiv = document.createElement('div');
        const titleDiv = document.createElement('h3');
        const descriptionDiv = document.createElement('p');
        const podcastImage = document.createElement('img');
        const podcastLink = document.createElement('a');

        titleDiv.textContent = podcast.title;
        descriptionDiv.textContent = podcast.description;
        podcastImage.src = podcast.image;
        podcastLink.href = podcast.url;
        podcastLink.textContent = "Zum Podcast";

        podcastDiv.appendChild(titleDiv);
        podcastDiv.appendChild(descriptionDiv);
        podcastDiv.appendChild(podcastImage);
        podcastDiv.appendChild(podcastLink);

        resultsDiv.appendChild(podcastDiv);
    });
}
