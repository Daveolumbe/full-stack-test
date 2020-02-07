const express = require('express');
const router = express.Router();
const data = require('./data');
const {
    buildAllSlots,
    getAvailableSlotsTaken,
} = require('../helper');

/* GET calendar listing. */
router.get('/', function(req, res, next) {

    if (!data) {
        return;
    }

    const {
        scheduleItems,
        workingHours,
    } = data.value[0];

    const { startTime, endTime } = workingHours;

    const startTimeInt = parseInt(startTime.split(':', 1)[0]);

    const endTimeInt = parseInt(endTime.split(':', 1)[0]);

    const possibleAvailableHours = endTimeInt - startTimeInt;

    const slotsPerDay = buildAllSlots(startTimeInt, endTimeInt, possibleAvailableHours);

    const availableSlotsTaken = getAvailableSlotsTaken(scheduleItems);

    const available = availableSlotsTaken.map(o => {
        return {
            date: o.date,
            availableSlots: slotsPerDay.filter(x => !(x.startTime === o.availableSlots.startTime
                || x.endTime === o.availableSlots.endTime))
        };
    });

    res.send(available);
});

module.exports = router;
