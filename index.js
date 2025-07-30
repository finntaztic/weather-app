


async function fetchWeather(location){
    try {

        const response = await fetch (`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=metric&include=days&key=VDC7PX7MEU4NV29HN2GF88A37&contentType=json`);
        
        //if search btn aint clicked yet, in

        if (!response.ok){
            throw new Error ('Could not fetch resource');
        }

        const data = await response.json();
        console.log(data);
        console.log(data.resolvedAddress);//address
        console.log(data.days[0].icon); //icon
        console.log(data.days[0].description); //description
        console.log(data.days[0].feelslike); //temparature
    } catch (error) {
        console.error(error)
    }
};

fetchWeather('pasay');

//change location based on inputs
const searchBtn = document.querySelector('#searchBtn');
searchBtn.addEventListener('click', () => {
    const newLocation = document.getElementById('search').value.toLowerCase();
    fetchWeather(newLocation);
});

//change temperature unit of measure


