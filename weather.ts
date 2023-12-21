export type Weather = {
    latitude: number,
    longitude: number,
    generationtime_ms: number,
    utc_offset_seconds: number,
    timezone: string,
    timezone_abbreviation: string,
    elevation: number,
    current_units: {
        time: string,
        interval: string,
        temperature_2m: string,
        wind_speed_10m: string
    },
    current: {
        time: string,
        interval: number,
        temperature_2m: number,
        wind_speed_10m: number
    },
    hourly_units: {
        time: string,
        temperature_2m: string,
        relative_humidity_2m: string,
        wind_speed_10m: string
    },
    hourly: {
        time: string[],
        temperature_2m: number[],
        relative_humidity_2m: number[],
        wind_speed_10m: number[]
    }
}

export const getWeather = async (): Promise<Weather> => {
    const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m");
    const data = await res.json();
    return data as Weather;
}