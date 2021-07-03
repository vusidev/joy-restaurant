
function validate() {
const fname = document.getElementById("fname");
if (fname.value.trim() == "") {
document.getElementById("error1").innerHTML = "Please fill this field";
document.getElementById("fname").style.borderColor = "red";
return false;
} else {
document.getElementById("error1").innerHTML = "";
}

const lname = document.getElementById("lname");
if (lname.value.trim() == "") {
document.getElementById("error2").innerHTML = "Please fill this field";
document.getElementById("lname").style.borderColor = "red";
return false;
} else {
document.getElementById("error2").innerHTML = "";
}

const email = document.getElementById("email").value;
     var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos < 2 || dotpos < atpos +2 || dotpos+2>=email.length)      {
document.getElementById("error3").innerHTML = "Please enter valid email";
document.getElementById("email").style.borderColor = "red";
return false;
} else {
document.getElementById("error3").innerHTML = "";
}


const phone = document.getElementById("phone");
if (phone.value.trim().length < 10) {
document.getElementById("error4").innerHTML = "Please fill this field";
document.getElementById("phone").style.borderColor = "red";
return false;
} else {
document.getElementById("error4").innerHTML = "";
}

const guest = document.getElementById("guest");
if (guest.value.trim() == "") {
document.getElementById("error5").innerHTML = "Please fill this field";
document.getElementById("guest").style.borderColor = "red";
return false;
} else {
document.getElementById("error5").innerHTML = "";
}


const date = document.getElementById("date");
if (date.value.trim() == "") {
document.getElementById("error6").innerHTML = "Please select a date";
document.getElementById("date").style.borderColor = "red";
return false;
} else {
document.getElementById("error6").innerHTML = "";
}


const time = document.getElementById("time");
if (time.value.trim() == "") {
document.getElementById("error7").innerHTML = "Please select time";
document.getElementById("time").style.borderColor = "red";
return false;
} else {
document.getElementById("error7").innerHTML = "";
}


const e = document.getElementById("ddlType");
var strUser = e.options[e.selectedIndex].value;
 var strUser1 = e.options[e.selectedIndex].text;
   if(strUser==0) { document.getElementById("error8").innerHTML = "Please select an option";
document.getElementById("ddlType").style.borderColor = "red";
return false;
   } else {
document.getElementById("error8").innerHTML = "";
}
}
