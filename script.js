const apodContainer = document.getElementById('apod');
const apiKey = 'cWPiGe45dWz8w0pje0PzfmlQ5vZEyhTyicPQyaZQ';

fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        apodContainer.innerHTML = `
            <h4>${data.title}</h4>
            <p>${data.date}</p>
            <img id="planet-img" src="${data.url}" alt="${data.title}">
        `;
    })
    .catch(error => {
        console.error('Error fetching the APOD data:', error);
        apodContainer.innerHTML = '<p>Failed to load the Astronomy Picture of the Day.</p>';
    });