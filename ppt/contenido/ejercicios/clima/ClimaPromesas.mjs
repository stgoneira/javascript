export class Clima {
    constructor(cityName, countryCode) {
        this.cityName = cityName;
        this.countryCode = countryCode;

        // default data
        this._apiKey = '576c3f8b08a0142c0531393e28130472';
        this._currentWheatherURL = 'https://api.openweathermap.org/data/2.5/weather';
        this.units = 'metric';
    }

    getTemperatura() {
        console.log('getTemperatura()');
        this.data.then(d => d.main.temp)
        .catch(error => console.error(error));
    }

    fetchData() {
        let url = `${this._currentWheatherURL}?q=${this.cityName},${this.countryCode}&units=metric&appid=${this._apiKey}`;
        this.data = fetch(url)
        .then( response => {
            this.data = response.json()
        }).catch( error => {
            console.error(error);
        });
    }
}