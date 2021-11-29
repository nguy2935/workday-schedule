// date in the header
function getTodayDate() {
var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);
}

// loads today's date
getTodayDate();

// local storage


// save
$(document).ready(function(){
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

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

trackTime();

// json 