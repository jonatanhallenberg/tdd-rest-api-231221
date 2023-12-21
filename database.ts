import mongoose from 'mongoose';

export type Event = {
    startTime: Date,
    durationInMinutes: number,
    description: string,
    temperature?: number
}

const eventSchema = new mongoose.Schema<Event>({
    startTime: Date,
    durationInMinutes: Number,
    description: String
})

const EventModel = mongoose.model('event', eventSchema);

export const createEvent = async(eventData: Event) => {
    return await (new EventModel(eventData)).save();
}

export const getEvents = async() => {
    return await EventModel.find();
}

export const getEvent = async(id: string) => {
    return await EventModel.findById(id);
}