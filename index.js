async function fetchWeather(){
    try {
        let response = await fetch ('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/san%20miguel%2C%20catanduanes?unitGroup=metric&key=VDC7PX7MEU4NV29HN2GF88A37&contentType=json');
        let data = await response.json();
        console.log(data.address);
        console.log(data);
        console.log(data.days);
    } catch (error) {
        console.error('failed to fetch weather', error)
    }
};

fetchWeather();