// Your code here
// var pets = [
//   { name: 'kylo', species: 'dog', human: 'kari', mammal: true },
//   { name: 'gecky', species: 'lizard', human: 'dan', mammal: false },
//   { name: 'hedwig', species: 'owl', human: 'harry', mammal: false },
//   { name: 'crookshanks', species: 'cat', human: 'hermione', mammal: true },
//   { name: 'scabbers', species: 'rat', human: 'ron', mammal: true }
// ];
//
// $(document).ready(function() { // anonymous function
//   for (var i = 0; i < pets.length; i++) {
//     // Will execute 5 times
//     var listItem = $('<tr><td>' +
//           pets[i].name + '</td><td>' + pets[i].species + '</td><td>' + pets[i].human + '</td><td>' + pets[i].mammal +
//            '</td></tr>');
//
//     $('.pets').append(listItem);
//   }
//   var tableHeaders = Object.keys(pets[0]);
//   for (var j = 0; j < tableHeaders.length; j++) {
//     var headerItem = $("<th>" + tableHeaders[j] + "</th>");
//     $('#pet-header').append(headerItem);
//   }
// });


// Getting Started
//
// Create a function which will do all of the work to calculate and
// show the time.
//
// Use the Date Library in Javascript to retrieve the current date
// and time information. Use the different methods that are provided
// to you for retrieving the individual hour, minute and second information.
//
// Use the setInterval method to utilize the function you've created
// to update each second.
//
// Your solution will include one CSS file which contains your page styles,
// one JS file which contains your clock logic and one HTML file which
// contains your page structure and loads the CSS and JS resources.
//
// Added fun!
//
// Update your clock to have world clock functionality which will show four
// different clocks in four different timezones of your choice
// Update your clock to show the full date with the day of the week, and the
// month, day and year

// SOURCE:
// http://stackoverflow.com/questions/3313875/javascript-date-ensure-getminutes-gethours-getseconds-puts-0-in-front-i
Number.prototype.pad = function (len) {
    return (new Array(len+1).join("0") + this).slice(-len);
};

var createSpans = function(item) {
  return '<span>' + item + '</span>';
};

var showClock = function() {
  var allMonths = ["January", "February", "March",
      "April", "May", "June", "July", "August",
      "September", "October", "November", "December"
    ];
  var allDays = ["Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday", "Saturday"];
  var totalDate = new Date();
  var clock = $('#clock');
  var calendar = $('#calendar');

  var month = totalDate.getMonth();
  var dayOfWeek = totalDate.getDay();
  var day = createSpans(totalDate.getDate().pad(2));
  var year = createSpans(totalDate.getFullYear());
  var hour = createSpans(totalDate.getHours().pad(2));
  var min = createSpans(totalDate.getMinutes().pad(2));
  var sec = createSpans(totalDate.getSeconds().pad(2));

  clock.html(hour + ":" + min + ":" + sec);
  calendar.html(allDays[dayOfWeek] + " " + allMonths[month] + " " + day + ", " + year);
};

var updateClock = setInterval(function() {
  showClock();
}, 1000);

$(document).ready(function() {
  updateClock();
});
