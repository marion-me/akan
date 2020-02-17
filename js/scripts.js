var day = d

function result{
var date = document.getElementById("date").value;
var month = document.getElementById("month").value;
var year = document.getElementById("year").value;
}
d.setDate(parseInt(date));
d.setMonth(parseInt(month));
d.setYear(parseInt(year));
var day = d.getDay();
var dayOfWeekNumber = Math.floor((((Number(yearOfBirth.slice(0,2))/4)-2*Number(yearOfBirth.slice(0,2))-1)+
          ((5*Number(yearOfBirth.slice(2,4))/4))+((26*(monthOfBirth+1)/10))+dayOfBirth)%7);
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
  var month = <=12
  var day = <=31
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
  }   

  var genders = document.getElementsByName("gender");

 //creating arrays of Akan names for males and females
var maleAkanNames = [
    "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Kwaku", "Yaw", "Kofi", "Kwame"
  ];

var femaleAkanNames = [
    "Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afua", "Ama"
  ]; 
  var month = document.getElementById("month")

  if (myGenderValue == "male" && monthValid && dayValid) {
    document.getElementById('result').textContent="You were born on a " + daysOfWeek[index] + " , your Akan name is " + maleAkanNames[index];
    document.getElementById('display-name').textContent = "Here is your Akan name: ";
    document.getElementById('result').style.fontSize = "18px";
    document.querySelector('h1').textContent = "Hello" + " " + maleAkanNames[index]
    return true;
  } else if (myGenderValue == "female" && monthValid && dayValid) {
    document.getElementById('result').textContent="You were born on a " + daysOfWeek[index] + " , your Akan name is " + maleAkanNames[index];
    document.getElementById('display-name').textContent = "Here is your Akan name: ";
    document.getElementById('result').style.fontSize = "18px";
    document.querySelector('h1').textContent = "Hello" + " " + femaleAkanNames[index]
    return true;
  } else {
    alert("invalid day or month, please try again");
  }
}

if (myGenderValue =="male" && monthValid && dayValid)
switch (dayOfWeek)


 

 



