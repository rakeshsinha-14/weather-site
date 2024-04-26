const card = document.querySelector(`.card`);
const search = document.querySelector(`.search button`);
const weatherBox = document.querySelector(`weather-box`);
const weatherDetails = document.querySelector(`.weather-details`);

search.addEventListener('click', () => {

    const APIKey = 'API KEY';
    const city = document.querySelector('.search input').value;

    if (city === '')
        return;

    fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}')
        .then(response => response.json())
        .then(json => {

        const image = document.querySelector('.weather-box img');
        const temp = document.querySelector('.weather-box .temp');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'clear.png';
                break;
            case 'Cloud':
                image.src = 'cloud.png';
                break;
            case 'Mist':
                image.src = 'mist.png';
                break;
            case 'Rain':
                image.src = 'rain.png';
                break;
            case 'Snow':
                image.src = 'snow.png';
                break;
                                
            default:
                image.src = 'cloud.png';

        }
        
        temp.innerHTML = '${parseInt(json.main.temp)}<span>°C</span>';
        description.innerHTML = '${json.weather[0].description}';
        humidity.innerHTML = '${json.main.humidity}%';
        wind.innerHTML = '${parseInt(json.wind.speed)}km/hr';

    });
});