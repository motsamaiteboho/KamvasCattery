function weeklyWage(band, weeklyHours) {
    var hourlyRate = 0;
    switch (band) {
        case 'A':
            var hours = weeklyHours.split(',');
            let bandAtotal = 0;
            if (hours.length === 7) {
                for (let i = 0; i < hours.length; i++) {
                    bandAtotal += (hours[i] * 23)
                }
                hourlyRate = bandAtotal;
            }
            else {
                hourlyRate = "missing day"
            }
            break;
        case 'B':
            var hours = weeklyHours.split(',');
            let bandBtotal = 0;
            if (hours.length === 7) {
                for (let i = 0; i < hours.length; i++) {
                    bandBtotal += (hours[i] * 37)
                }
                hourlyRate = bandBtotal;
            }
            else {
                hourlyRate = "missing day"
            }
            break;
        case 'C':
            var hours = weeklyHours.split(',');
            let bandCtotal = 0;
            if (hours.length === 7) {
                for (let i = 0; i < hours.length; i++) {
                    bandCtotal += (hours[i] * 51)
                }
                hourlyRate = bandCtotal;
            }
            else {
                hourlyRate = "missing day"
            }
            break;
        default:
            hourlyRate =0;

    }
    return hourlyRate;
};
