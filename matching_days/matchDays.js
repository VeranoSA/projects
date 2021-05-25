function MatchingDays(day1, day2) {
    //console.log(day1, day2);


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


    var clearStyle = function () {
        let i = 6;
        while (i > 0) {
            days[i].status = '';
            i--;
        }
    }



    var match = function (day, day0) {
        return day == day0
    }


    if (match(day1, day2)) {
        clearStyle()
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
        clearStyle()
        for (let i = 0; i < days.length; i++) {
            if (days[i].day == day1) {
                days[i].status = 'nomatch';
            }
            if (days[i].day == day2) {
                days[i].status = 'nomatch1';
            }
        }
        return {
            days,
            match,
        }
    }
}