fetchWeather();
async function fetchWeather(){
    try {
        const response = await fetch ('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/pasay/today?unitGroup=metric&include=days&key=VDC7PX7MEU4NV29HN2GF88A37&contentType=json');
        
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


