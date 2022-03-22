
$("#currentDay").text(moment().format("MMM Do YY"));

// color code time slots according to current time 
$(".time-block").each(function(){

    var currentTime = moment().hours(); 
    console.log($(this)
            .children()[0].textContent
            .split(" ")[0]
            );

    var timeSlot = $(this)
    .children()[0].textContent
    .split(" ")[0];

    console.log(currentTime);

    if(currentTime > timeSlot) {
        $(this).addClass("past");
    } else if (currentTime == timeSlot) {
        $(this).addClass("present");
    } else {$(this).addClass("future")};

});

// save to data to local storage 
var saveTasks = function(time, task) {

    localStorage.setItem(time, task);
}

// save tasks when clicking a save button 

$(".saveBtn").on("click", function() {

    var task = $(this).siblings()[1].value;

    var time = $(this).siblings()[0].textContent
                .split(" ")[0];
    

    saveTasks(time, task)
  });


