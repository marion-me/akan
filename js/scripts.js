const maleNames = ["Kwasi", "Kwandwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const femaleNames = ["Akosua", "Adwoa", "Abenea", "Akua", "Yaa", "Afua", "Ama"];

function getNames() {
    var dayy = new Date();
    var year = parseInt(document.getElementById("year").value);
    var month = parseInt(document.getElementById("month").value) - 1;
    var date = parseInt(document.getElementById("day").value);
    dayy.setDate(date);
    dayy.setMonth(month);
    dayy.setFullYear(year);
    var day = dayy.getDay();
    if (day <= 0 || day > 31) {
        alert("Please enter a valid day");
    } else if (month < 0 || month > 12 || month == 2 && day > 29) {
        alert("Please enter a valid month");
    } else {
        return day;
    }
}
function weekday() {
    if (getNames() === 0) {
        return "Sunday";
    } else if (getNames() === 1) {
        return "Monday";
    } else if (getNames() === 2) {
        return "Tuesday";
    } else if (getNames() === 3) {
        return "Wednesday";
    } else if (getNames() === 4) {
        return "Thursday";
    } else if (getNames() === 5) {
        return "Friday";
    } else if (getNames() === 6) {
        return "Saturday";
    }
}

function akanNames() {
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var maleNames = ["Kwasi", "Kwandwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var femaleNames = ["Akosua", "Adwoa", "Abenea", "Akua", "Yaa", "Afua", "Ama"];
    if (male.checked == true) {
        alert("You were born on " + days[getNames()] + " and Your Akan name is " + maleNames[getNames()]);
    }
    else if (female.checked == true) {
        alert("You were born on " + days[getNames()] + " and Your Akan name is " + femaleNames[getNames()])
    }
}
