describe(' Matching Days function', function () {

    it('Should return true for matching days and false for non matching days given a 2 strings of days', function () {

        let matchDays = MatchingDays('Day1', 'Day2');
        assert.equal(matchDays.match('Saturday', 'Saturday'), true);
        assert.equal(matchDays.match('Tuesday', 'Monday'), false);
    });
});

describe('Matching Days factory', function () {

    it('Given two days as parameters it should return an array with days of the week and the status of the two days, match if they are the same, no match and alsoNomatch for non matching days ', function () {

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

        assert.deepEqual(MatchingDays('Monday', 'Thursday').days, testDays);
        assert.deepEqual(MatchingDays('Monday', 'Monday').days, testDays1);

    });
});