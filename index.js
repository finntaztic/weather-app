async function fetchWeather(){
    try {
        let response = await fetch ();
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('failed to fetch weather', error)
    }
};

fetchWeather();