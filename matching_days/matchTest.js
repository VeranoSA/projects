describe(' Matching Days function', function () {

    it('Should return true for matching days given 2 strings of days', function () {

        let matchDays = MatchingDays('Day1', 'Day2');
        assert.equal(matchDays.match('Saturday', 'Saturday'), true);
        assert.equal(matchDays.match('Monday', 'Monday'), true);
        assert.equal(matchDays.match('Thursday', 'Thursday'), true);
        assert.equal(matchDays.match('Friday', 'Friday'), true);
        assert.equal(matchDays.match('Sunday', 'Sunday'), true);
    });
    it('Should return false for matching days given 2 strings of days', function () {

        let matchDays = MatchingDays('Day1', 'Day2');
        assert.equal(matchDays.match('Saturday', 'Sunday'), false);
        assert.equal(matchDays.match('Tuesday', 'Monday'), false);
        assert.equal(matchDays.match('Saturday', 'Sunday'), false);
        assert.equal(matchDays.match('Tuesday', 'Friday'), false);
    });
    it('should return an array with days of the week and the status of the two days, no match and alsoNomatch for non matching days ', function () {

        var testDays = [{
                day: 'Sunday',
                status: ''
            },
            {
                day: 'Monday',
                status: 'nomatch'
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
                status: 'alsoNomatch'
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

        var testDays1 = [{
            day: 'Sunday',
            status: ''
        },
        {
            day: 'Monday',
            status: ''
        },
        {
            day: 'Tuesday',
            status: 'nomatch'
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
            status: 'alsoNomatch'
        },
        {
            day: 'Saturday',
            status: ''
        }
    ];

        

        assert.deepEqual(MatchingDays('Monday', 'Thursday').days, testDays);
        assert.deepEqual(MatchingDays('Tuesday', 'Friday').days, testDays1);

    });
    it('should return an array with days of the week and the status of the two days, match if they are the same', function () {

        var testDays3 = [{
                day: 'Sunday',
                status: ''
            },
            {
                day: 'Monday',
                status: 'match'
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

        var testDays4 = [{
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
            status: 'match'
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
        assert.deepEqual(MatchingDays('Monday', 'Monday').days, testDays3);
        assert.deepEqual(MatchingDays('Wednesday', 'Wednesday').days, testDays4);
    });

});