export class Clima {
    constructor(cityName, countryCode) {
        this.cityName = cityName;
        this.countryCode = countryCode;

        // default data
        this._apiKey = '576c3f8b08a0142c0531393e28130472';
        this._currentWheatherURL = 'https://api.openweathermap.org/data/2.5/weather';
        this.units = 'metric';
        this.data = null;
    }

    async getCountryCode() {
        let data = await this.getData();
        return data.sys.country;
    }

    async getCiudad() {
        let data = await this.getData();
        return data.name;
    }

    async getTemperatura() {
        let data = await this.getData();
        return data.main.temp;
    }

    async getHumedad() {
        let data = await this.getData();
        return data.main.humidity;
    }

    async getData(actualizar = false) {
        if(this.data != null && !actualizar) {
            console.log("Devulelvo datos ya guardados.");
            return this.data;
        }
        console.log("Consultando los datos desde la API.");        
        let url = `${this._currentWheatherURL}?q=${this.cityName},${this.countryCode}&units=metric&appid=${this._apiKey}&lang=es`;
        
        if(typeof window === 'undefined') {
            let p = await import('cross-fetch/polyfill');
        }

        try {
            let response = await fetch(url);
            let data = await response.json();
            this.data = data;
            return data;
        } catch(error) {
            console.error(error);
        }
        return;
    }
}

let city = 'Iquique';
let clima = new Clima(city, 'cl');
clima.getData();
let temp = clima.getTemperatura();
temp.then(t => console.log(`Temperatura en ${city}: ${t}º`));


