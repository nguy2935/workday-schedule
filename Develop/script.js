// date in the header
function getTodayDate() {
var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);
}

// loads today's date
getTodayDate();

// save all information function
$(document).ready(function(){
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // saves description/information in local storage
        localStorage.setItem(time, text);
    })

})


function trackTime() {
    var currentTime = moment().hour();
    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

    // this checks the time and determines whether it's in the past, present, or future. Will add background color indicators
    if (blockTime < currentTime ) {
    $(this).removeClass("present");
    $(this).removeClass("future");
    $(this).addClass("past");
    }

    else if (blockTime === currentTime ) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
    }

    else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");

        }
    })
}

// gets anything that is saved in local storage per hour
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

trackTime();