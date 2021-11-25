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

    // getting value from local storage to show description
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    function currentTime() {
        // tracks current hour
        var currentHour = moment().hour();

        // loop over time-blocks
        $(".time-block").each(function () {
            var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

            // check time and add classes 
            if (timeBlock < currentHour) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (timeBlock === currentHour) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    currentTime();
})