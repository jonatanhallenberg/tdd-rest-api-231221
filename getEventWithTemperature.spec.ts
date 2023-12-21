import { weatherMock } from "./mocks/weatherMock"
import { getEventWithTemperature } from './getEventWithTemperature';

describe("get event with temperature", () => {
    it("should compute correct weather with temperature", () => {
        const event = {
            "startTime": new Date("2023-12-31T12:00:00.000Z"),
            "durationInMinutes": 60,
            "description": "Lektion",
        }

        const actual = getEventWithTemperature(event, weatherMock);

        const expected = {
            "startTime": new Date("2023-12-31T12:00:00.000Z"),
            "durationInMinutes": 60,
            "description": "Lektion",
            "temperature": 8.5
        }

        expect(actual).toEqual(expected);

    })
})