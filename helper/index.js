const moment = require('moment');

const getTimeString = (dateTime) => moment(dateTime).format('HH:mm');
const buildWorkingHoursOfADay = (dateTime, number) => moment().hours(dateTime + number).format('HH:00');
const getDate = (date) => moment(date).format('DD/MM/YYYY');
const getTimeDifference = (dates) => {
    const timeDiff = moment(dates.end.dateTime).diff(dates.start.dateTime, 'minutes');
    return timeDiff % 60 === 0;
};

const getAvailableSlotsTaken = (scheduleItems) => {
    const validWorkHours = [];
    scheduleItems.forEach(item => {
        if (getTimeDifference(item)) {
            validWorkHours.push({
                date: getDate(item.start.dateTime),
                availableSlots: {
                    startTime: getTimeString(item.start.dateTime),
                    endTime: getTimeString(item.end.dateTime)
                },
            });
        }
    });
    return validWorkHours;
};

const buildAllSlots = (startTime, endTime, possibleAvailableHours) => {
    let arr = [];
    for (let i = 0; i < possibleAvailableHours; i++) {
        arr.push({
            startTime: buildWorkingHoursOfADay(startTime, i),
            endTime: buildWorkingHoursOfADay(startTime, i + 1)
        })
    }
    return arr;
};

module.exports = {
    buildAllSlots,
    getAvailableSlotsTaken,
};
