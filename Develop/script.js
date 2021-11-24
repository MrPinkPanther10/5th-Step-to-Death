// Display today's day, date, exact hour and minute
var todayDate = moment().format('LLLL');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    // Click Listener for Save Button
    $(".saveBtn").on("click", function () {
        // get text from description sibling
        var text = $(this)
            .siblings(".description")
            .val();

        // get time from description parent id
        var time = $(this)
            .parent()
            .attr("id");


        // Local Storage 
        localStorage.setItem(time, text);
    })
})