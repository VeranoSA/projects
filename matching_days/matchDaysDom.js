//================================ DOM ================================================//



document.addEventListener('DOMContentLoaded', function () {

    // date elements refs to the HTML
    var dateElement1 = document.getElementById('d1');
    var dateElement2 = document.getElementById('d2');


    // on page load
    display('nothing');

    //return a date object given a string
    let makeDate = function (dateString) {

        let dateObject = new Date(dateString);
        return dateObject
    }

    //return a weekday as string given a full date
    let getDay = function (date) {

        switch (date.getDay()) {
            case 0:
                return "Sunday";
                break
            case 1:
                return "Monday";
                break;
            case 2:
                return "Tuesday";
                break;
            case 3:
                return "Wednesday";
                break;
            case 4:
                return "Thursday";
                break;
            case 5:
                return "Friday";
                break;
            case 6:
                return "Saturday";
        }
    }


    //object to temporarily hold the weekdays to match
    var tmpDays = {};

    //function to create a template given an object with day(s) of the week
    function display(daysObject) {
        var weekdaysElement = document.getElementById("boxes-container");
        var weekdaysTemplateSource = document.getElementById("matchingTemplate").innerHTML;
        var weekdaysTemplate = Handlebars.compile(weekdaysTemplateSource);
        var daysData = MatchingDays(daysObject.d1, daysObject.d2);
        var weekdaysHTML = weekdaysTemplate(daysData);
        weekdaysElement.innerHTML = weekdaysHTML;
    }


    //event listeners for the two date inputs that will create date objects and store the weekdays into the weekDays object
    dateElement1.addEventListener('change', function (event) {
        if (event.target.value) {
            var dateObject = makeDate(event.target.value);
            tmpDays.d1 = getDay(dateObject);
            display(tmpDays);
        } else {
            tmpDays.d1 = '';
            MatchingDays();
            display('nothing');

        }

    });
    dateElement2.addEventListener('change', function (event) {
        if (event.target.value) {
            var dateObject = makeDate(event.target.value);
            tmpDays.d2 = getDay(dateObject);
            display(tmpDays);
        } else {
            tmpDays.d2 = '';
            MatchingDays();
            display('nothing');
        }

    });
}, false);