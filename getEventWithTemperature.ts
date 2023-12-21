import { Weather } from "./weather";
import { Event } from './database';

export const getEventWithTemperature = (event: Event, weather: Weather) => {
    
    const tempIndex = weather.hourly.time.findIndex((time => (new Date(time)).getHours() === event.startTime.getHours()));
    
    return {
        ...event,
        temperature: weather.hourly.temperature_2m[tempIndex]
    }
}