function result{
var date = document.getElementById("date").value;
var month = document.getElementById("month").value;
var year = document.getElementById("year").value;
}
d.setDate(parseInt(date));
d.setMonth(parseInt(month));
d.setYear(parseInt(year));
var day = d.getDay();
if (day<0 || day >31){
    return day;
} else {
    alert("invalid day")
}
if (month <0 || >12) {
    return day;
} else {
    alert("invalid month")
}
function weekday() {
if (day === 0) {
    return "Sunday";
  } else if (day === 1) {
     return "Monday";
  } else if (day === 2) {
     return "Tuesday"; 
  } else if (day === 3) {
     return "Wednesday";
  } else if (day === 4) {
     return "Thursday";
  } else if (day === 5) { 
     return "Friday";
  } else if (day === 4) {
     return "Saturday";
  }
}

  // validation functions
  function monthValidator () {
    if (monthOfBirth > 1 || monthOfBirth < 12) {
      return true;
    } else {
      return false;
    }
  }
  function dayValidator () {
    if (monthOfBirth === 2 && Number(yearOfBirth)%4 === 0) {
      if (dayOfBirth < 28 || dayOfBirth > 1) {
        return true;
      } else if (monthOfBirth === 2 && dayOfBirth > 29) {
        return false;
      } else if (monthOfBirth === 2 && dayOfBirth < 1) {
        return false;
      } else {
        return true;
      }
    } else if (dayOfBirth < 1 || dayOfBirth > 31){
      return false;
    } else {
      return true;
    }
 }   

  var daysOfWeek = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];

  var genders = document.getElementsByName("gender");
 var maleAkanNames = [
    "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Kwaku", "Yaw", "Kofi", "Kwame"
  ];

 var femaleAkanNames = [
    "Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afua", "Ama"
  ]; 
function name() {
    if (maleAkanNames.checked == true) {
        alert("maleAkanNames+the day of the year[name()]")
    }else if (femaleAkanNames.checked == true) {
        alert("femaleAkanNames+the day of the year[name()]"
    }                 
}

