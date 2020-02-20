const { buildAllSlots, getAvailableSlotsTaken } = require('.');
const { expectedFakeAvailableTime, timeTaken, bookedOutTime } = require('../testData');

test('should be defined', () => {
    expect(buildAllSlots).toBeDefined()
    expect(getAvailableSlotsTaken).toBeDefined()
});

test('Should build timeSlots', () => {
    expect(buildAllSlots(8, 9, 9)).toEqual(expectedFakeAvailableTime)
});

test('Should return available valid timeSlots', () => {
    expect(getAvailableSlotsTaken(timeTaken)).toEqual(bookedOutTime);
});

test('Should fail if no available timeSlots is provided', () => {
    expect(getAvailableSlotsTaken('')).toBeNull();
});
