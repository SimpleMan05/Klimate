export interface Coordinates{
    lat : number;
    lon : number;
}

export interface WeatherCondition{
    id:number;
    main:string;
    description:string;
    icon:string;
}

export interface WeatherData{
    coord:Coordinates,
    weather:WeatherCondition[];
    main:{
        temp:number;
        feels_like:number;
        temp_min:number;
        temp_max:number;
        pressure:number;
        humidity:number;
    };
    wind:{
        sunrise: number;
        sunset: number;
        country:string;
    };
    name:string;
    dt:number;
}

export interface ForecastData{
    list: Array<{
        dt:number;
        maain:WeatherData["main"];
        wind:WeatherData["wind"];
        dt_txt:string;
    }>;

    city:{
        name:string;
        country:string;
        sunrise:string;
        sunset:string;
    }
}

export interface GeocodeResponse{
    name:string;
    local_name?:Record<string,string>;
    lat:number;
    lon:number;
    country:string;
    state?:string;
}