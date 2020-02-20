const expectedFakeAvailableTime = [
    {"endTime": "09:00", "startTime": "08:00"},
    {"endTime": "10:00", "startTime": "09:00"},
    {"endTime": "11:00", "startTime": "10:00"},
    {"endTime": "12:00", "startTime": "11:00"},
    {"endTime": "13:00", "startTime": "12:00"},
    {"endTime": "14:00", "startTime": "13:00"},
    {"endTime": "15:00", "startTime": "14:00"},
    {"endTime": "16:00", "startTime": "15:00"},
    {"endTime": "17:00", "startTime": "16:00"},
];

const timeTaken = [
    {
        status: 'Tentative',
        start: {
            dateTime: '2018-08-06T09:00:00.0000000',
            timeZone: 'Pacific Standard Time'
        },
        end: {
            dateTime: '2018-08-06T10:30:00.0000000',
            timeZone: 'Pacific Standard Time'
        }
    },
    {
        status: 'Busy',
        start: {
            dateTime: '2018-08-06T11:00:00.0000000',
            timeZone: 'Pacific Standard Time'
        },
        end: {
            dateTime: '2018-08-06T13:00:00.0000000',
            timeZone: 'Pacific Standard Time'
        }
    },
    {
        status: 'Party',
        start: {
            dateTime: '2018-08-06T14:00:00.0000000',
            timeZone: 'Pacific Standard Time'
        },
        end: {
            dateTime: '2018-08-06T15:00:00.0000000',
            timeZone: 'Pacific Standard Time'
        }
    },
];

const bookedOutTime = [{"availableSlots": {"endTime": "13:00", "startTime": "11:00"}, "date": "06/08/2018"},
    {"availableSlots": { "endTime": "15:00", "startTime": "14:00" }, "date": "06/08/2018"}];


module.exports = {
    timeTaken,
    expectedFakeAvailableTime,
    bookedOutTime,
};
