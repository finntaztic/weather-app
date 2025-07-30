
let initialLocation = 'pasay';
let initialUnit = 'metric';

fetchWeather(initialLocation, initialUnit);

async function fetchWeather(location, unit = 'metric'){

    try {
        const response = await fetch (`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=${unit}&include=days&key=VDC7PX7MEU4NV29HN2GF88A37&contentType=json`);
        
        //if search btn aint clicked yet, in

        if (!response.ok){
            throw new Error ('Could not fetch resource');
        }

        const data = await response.json();

        insertWeather(data);
    } catch (error) {
        console.error(error)
    }
};

function insertWeather(data){
    const weatherInfo = document.querySelector ('.weather-desc');
    weatherInfo.innerHTML = '';

    const address = document.createElement('p');
    address.textContent = data.resolvedAddress;
    weatherInfo.appendChild(address);

    //should be image 
    const icon = document.createElement('p');
    icon.textContent = data.days[0].icon;
    weatherInfo.appendChild(icon);

    const description = document.createElement('p');
    description.textContent = data.days[0].description;
    weatherInfo.appendChild(description);

    const temparature = document.createElement('p');
    temparature.textContent = data.days[0].feelslike;
    weatherInfo.appendChild(temparature);
};
//change location based on inputs
const searchBtn = document.querySelector('#searchBtn');
searchBtn.addEventListener('click', () => {
    const newLocation = document.getElementById('search').value.toLowerCase();
    const toggle = document.querySelector('.toggle');
     
    if (newLocation){
        initialLocation = newLocation;
        fetchWeather(newLocation);
    } else {
        alert("Please enter a new location");
    }

    //changes the temperature unit on click
    let clickCount = 0;
    toggle.addEventListener('click', () => {
            clickCount++
            console.log(clickCount);

        if (clickCount % 2 !== 0){
            fetchWeather(newLocation, unit = 'us');
        } else if (clickCount % 2 === 0){
            fetchWeather(newLocation, unit = 'metric');
        }
    })
});

//change temperature unit of measure

const toggle = document.querySelector('.toggle');
   let clickCount = 0;
    toggle.addEventListener('click', () => {
            clickCount++
            console.log(clickCount);

        if (clickCount % 2 !== 0){
            fetchWeather(initialLocation, initialUnit = 'us')
        } else if (clickCount % 2 === 0){
            fetchWeather(initialLocation, initialUnit = 'metric');
        }
    })

toggle.addEventListener('click', () => {
    initialUnit = 'us';
    fetchWeather(initialLocation, initialUnit)
})
