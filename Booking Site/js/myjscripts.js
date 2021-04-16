
//Global booking variables
var fName, lName, phone, email, arrivalDate, departureDate, guests;

// show booking details div and save user inputs
function showBookingDetails() {
    fName = document.getElementById("txtFirstName").value;
    lName = document.getElementById("txtLastName").value;
    phone = document.getElementById("txtPhone").value;
    email = document.getElementById("txtEmail").value;

    var bookingDetails = document.getElementById("bookingDetails");
    if(bookingDetails.style.display === "none"){
        bookingDetails.style.display = "block";
    }
    document.getElementById("bookingAboutYou").style.display = "none";
    document.getElementById("bookingPayment").style.display = "none";
    document.getElementById("termsAndConditions").style.display = "none";

}

// show about you booking div
function showBookingAboutYou() {
    var bookingAboutYou = document.getElementById("bookingAboutYou");
    if(bookingAboutYou.style.display === "none"){
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
    
    //display booking details on confirmation page
    document.getElementById("lblFirstName").textContent = fName;
    document.getElementById("lblLastName").textContent = lName;
    document.getElementById("lblPhone").textContent = phone;
    document.getElementById("lblEmail").textContent = email;
    document.getElementById("lblArrivalDate").textContent = arrivalDate;
    document.getElementById("lblDepartureDate").textContent = departureDate;
    document.getElementById("lblGuests").textContent = guests;
    
    var bookingPayment = document.getElementById("bookingPayment");
    if(bookingPayment.style.display === "none"){
        bookingPayment.style.display = "block";
    }
    document.getElementById("bookingDetails").style.display = "none";
    document.getElementById("bookingAboutYou").style.display = "none";
    document.getElementById("termsAndConditions").style.display = "none";

}

// show about you booking div
function showBookingConfirmation() {
    var bookingConfirmation = document.getElementById("confirmation");
    if(bookingConfirmation.style.display === "none"){
        bookingConfirmation.style.display = "block";
    }
    document.getElementById("bookingDetails").style.display = "none";
    document.getElementById("bookingPayment").style.display = "none";
    document.getElementById("bookingAboutYou").style.display = "none";
    document.getElementById("termsAndConditions").style.display = "none";

}

// show about you booking div
function showTermsAndConditions() {
    var bookingTermsAndConditions = document.getElementById("termsAndConditions");
    if(bookingTermsAndConditions.style.display === "none"){
        bookingTermsAndConditions.style.display = "block";
    }
    document.getElementById("bookingDetails").style.display = "none";
    document.getElementById("bookingPayment").style.display = "none";
    document.getElementById("bookingAboutYou").style.display = "none";
}

//go to homepage
function goHome() {
    document.location.href="/index.html";
}