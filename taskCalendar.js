function taskCalendar() {
    let day = prompt("Enter a day of the week:").toLowerCase();

    switch (day) {
        case "monday":
            alert("Task for Monday: Go to school.");
            break;
        case "tuesday":
            alert("Task for Tuesday: Study your lessons.");
            break;
        case "wednesday":
            alert("Task for Wednesday: Prepare for surprise quizzes.");
            break;
        case "thursday":
            alert("Task for Thursday: Have fun with your friends.");
            break;
        case "friday":
            alert("Task for Friday: Go home.");
            break;
        case "saturday":
            alert("Task for Saturday: Wash your clothes and clean your backyard.");
            break;
        case "sunday":
            alert("Task for Sunday: Go back to your boarding house.");
            break;
        default:
            alert("Invalid day entered, please enter a valid day of the week.");
    }
}
