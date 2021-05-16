
//Global booking variables
var fName, lName, phone, email, arrivalDate, departureDate, guests;

// show booking details div and save user inputs
function showBookingDetails() {
    fName = document.getElementById("txtFirstName").value;
    lName = document.getElementById("txtLastName").value;
    phone = document.getElementById("txtPhone").value;
    email = document.getElementById("txtEmail").value;

    //form validation
    if (fName == "" || lName == "" || phone == "" || email == "") {
        let fError = (fName == "") ? "First name is required!" : "";
        document.getElementById("fNameError").innerHTML = fError;
        let lError = (lName == "") ? "Last name is required!" : "";
        document.getElementById("lNameError").innerHTML = lError;
        let pError = (phone == "") ? "Phone is required!" : "";
        document.getElementById("phoneError").innerHTML = pError;
        let eError = (email == "") ? "Email is required!" : "";
        document.getElementById("emailError").innerHTML = eError;
    } else {
        var bookingDetails = document.getElementById("bookingDetails");
        if (bookingDetails.style.display === "none") {
            bookingDetails.style.display = "block";
        }
        document.getElementById("bookingAboutYou").style.display = "none";
        document.getElementById("bookingPayment").style.display = "none";
        document.getElementById("termsAndConditions").style.display = "none";
        resetErrorMsg();
    }
}

// show about you booking div
function showBookingAboutYou() {
    var bookingAboutYou = document.getElementById("bookingAboutYou");
    if (bookingAboutYou.style.display === "none") {
        bookingAboutYou.style.display = "block";
    }
    document.getElementById("bookingDetails").style.display = "none";
    document.getElementById("bookingPayment").style.display = "none";
    document.getElementById("termsAndConditions").style.display = "none";

}

// show booking payment div and and confirmation details
function showBookingPayment() {
    //save user booking detail input
    arrivalDate = document.getElementById("txtArrivalDate").value;
    departureDate = document.getElementById("txtDepartureDate").value;
    guests = document.getElementById("txtGuests").value;

    //form validation
    if (arrivalDate == "" || departureDate == "" || guests == "") {
        let aError = (arrivalDate == "") ? "Arrival date required" : "";
        document.getElementById("arrivalDateError").innerHTML = aError;
        let dError = (departureDate == "") ? "Departure date required" : "";
        document.getElementById("departDateError").innerHTML = dError;
        let gError = (guests == "") ? "No of guests required" : "";
        document.getElementById("guestError").innerHTML = gError;
    } else {
        var bookingPayment = document.getElementById("bookingPayment");
        if (bookingPayment.style.display === "none") {
            bookingPayment.style.display = "block";
        }
        document.getElementById("bookingDetails").style.display = "none";
        document.getElementById("bookingAboutYou").style.display = "none";
        document.getElementById("termsAndConditions").style.display = "none";
    }
    //display booking details on confirmation page
    document.getElementById("lblFirstName").textContent = fName;
    document.getElementById("lblLastName").textContent = lName;
    document.getElementById("lblPhone").textContent = phone;
    document.getElementById("lblEmail").textContent = email;
    document.getElementById("lblArrivalDate").textContent = arrivalDate;
    document.getElementById("lblDepartureDate").textContent = departureDate;
    document.getElementById("lblGuests").textContent = guests;
}

// show confirmation div
function showBookingConfirmation() {
    var bookingConfirmation = document.getElementById("confirmation");
    if (bookingConfirmation.style.display === "none") {
        bookingConfirmation.style.display = "block";
    }
    document.getElementById("bookingDetails").style.display = "none";
    document.getElementById("bookingPayment").style.display = "none";
    document.getElementById("bookingAboutYou").style.display = "none";
    document.getElementById("termsAndConditions").style.display = "none";
}

// show terms and conditions div
function showTermsAndConditions() {
    var bookingTermsAndConditions = document.getElementById("termsAndConditions");
    if (bookingTermsAndConditions.style.display === "none") {
        bookingTermsAndConditions.style.display = "block";
    }
    document.getElementById("bookingDetails").style.display = "none";
    document.getElementById("bookingPayment").style.display = "none";
    document.getElementById("bookingAboutYou").style.display = "none";
}

//go to homepage
function goHome() {
    document.location.href = "/index.html";
}

//reset all error messages
function resetErrorMsg() {
    document.getElementById("fNameError").innerHTML = "";
    document.getElementById("lNameError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("arrivalDateError").innerHTML = "";
    document.getElementById("departDateError").innerHTML = "";
    document.getElementById("guestError").innerHTML = "";

}