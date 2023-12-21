
import express, { Request, Response, json } from 'express'
import mongoose from 'mongoose';
import { createEvent, getEvent, getEvents } from './database';
import { getEventWithTemperature } from './getEventWithTemperature';
import { getWeather } from './weather';


export const app = express()
const port = 3000

app.use(json());

app.get('/events', async (req, res) => {
    const events = await getEvents();
    res.json(events);
})

app.get('/event/:id', async (req, res) => {
    const id = req.params.id;

    // const event = await getEvent(id);
    // const weather = await getWeather();

    const [ event, weather ] = await Promise.all([getEvent(id), getWeather()]);

    if (event && weather) {
        const eventWithTemperature = getEventWithTemperature(event.toObject(), weather);
        res.json(eventWithTemperature);
    } else {
        res.send(500);
    }    
})

app.post('/event', async (req, res) => {
    const newEvent = await createEvent(req.body);
    res.json(newEvent);
})

mongoose.connect('mongodb://localhost:27017/event').then(() => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
})