function MatchingDays(day1, day2) {

    //variable with day and status objects
    var days = [{
            day: 'Sunday',
            status: ''
        },
        {
            day: 'Monday',
            status: ''
        },
        {
            day: 'Tuesday',
            status: ''
        },
        {
            day: 'Wednesday',
            status: ''
        },
        {
            day: 'Thursday',
            status: ''
        },
        {
            day: 'Friday',
            status: ''
        },
        {
            day: 'Saturday',
            status: ''
        }


    ];

    var styleClear = function () {
        let i = 6;
        while (i > 0) {
            days[i].status = '';
            i--;
        }
    }

    var match = function (day, day0) {
        return day == day0
    }
    //setting up my color classes if days are the same should be green
    if (match(day1, day2)) {
        styleClear()
        for (let i = 0; i < 7; i++) {
            if (days[i].day == day1) {
                days[i].status = 'match';
            }
        }
        return {
            days,
            match
        }
    } else {
        styleClear()
    //setting up my color classes if days are not the same should be orange and green
        for (let i = 0; i < days.length; i++) {
            if (days[i].day == day1) {
                days[i].status = 'nomatch';
            }
            if (days[i].day == day2) {
                days[i].status = 'alsoNomatch';
            }
        }
        return {
            days,
            match,
        }
    }
}