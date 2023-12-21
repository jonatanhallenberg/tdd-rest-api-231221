
POST /event

{
    startTime: Date,
    durationInMinutes: number,
    description: string
}

GET /event/:id

{
    startTime: Date,
    durationInMinutes: number,
    description: string,
    temperature: number
}