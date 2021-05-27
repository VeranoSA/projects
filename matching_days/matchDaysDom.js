//================================ DOM ===================================//

//Method Used:
//Event_Target - The target event property returns the element that triggered the event.

document.addEventListener('DOMContentLoaded', function () {

    //refs to the HTML of the date elements
    var dateElement1 = document.getElementById('d1');
    var dateElement2 = document.getElementById('d2');

    //an instance of the reg Factory
    var match = MatchingDays();

    //object to temporarily hold the weekdays to match
    var tmpDays = {};

    //on page load should display nothing
    display('nothing');

    //this returns a weekday as string given a full date
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

    //this returns a date object given a string
    let makeDate = function (dateString) {

        let dateObject = new Date(dateString);
        return dateObject
    }
    //=========================Template Compilation===========================//
    //The function to create a template given an object with day(s) of the week
    function display(daysObject) {
        var weekdaysElement = document.getElementById("boxes-container");
        var weekdaysTemplateSource = document.getElementById("matchingTemplate").innerHTML;
        var weekdaysTemplate = Handlebars.compile(weekdaysTemplateSource);
        var daysData = MatchingDays(daysObject.d1, daysObject.d2);
        var weekdaysHTML = weekdaysTemplate(daysData);
        weekdaysElement.innerHTML = weekdaysHTML;
    }

    //This event listeners for the two date inputs that will create date objects and store the weekdays into the weekDays object
    dateElement1.addEventListener('change', function (event) {
        if (event.target.value) {
            var dateObject = makeDate(event.target.value);
            tmpDays.d1 = getDay(dateObject);
            display(tmpDays);
        } else {
            tmpDays.d1 = '';
            match.MatchingDays();
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
            match.MatchingDays();
            display('nothing');
        }

    });
}, false);