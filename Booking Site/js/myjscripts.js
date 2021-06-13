
//Global booking variables
var fName, lName, phone, email, checkInDate, checkOutDate, guests, localchkInDay, localchkOutDay;

// show booking details div and save user inputs
function showBookingDetails() {

    var bookingDetails = document.getElementById("bookingDetails");
    if (bookingDetails.style.display === "none") {
        bookingDetails.style.display = "block";
    }
    document.getElementById("bookingAboutYou").style.display = "none";
    document.getElementById("bookingPayment").style.display = "none";
    document.getElementById("termsAndConditions").style.display = "none";
    resetErrorMsg();
}

// show about you booking div
function showBookingAboutYou() {
    //save user booking detail input
    checkInDate = document.getElementById("txtArrivalDate").value;
    checkOutDate = document.getElementById("txtDepartureDate").value;
    guests = document.getElementById("txtGuests").value;

    //Get day for date and convert to int
    localchkInDay = new Date(checkInDate);
    localchkOutDay = new Date(checkOutDate);
    //Zero out time stamp to compare only date
    localchkInDay.setHours(0, 0, 0, 0);
    localchkOutDay.setHours(0, 0, 0, 0);

    //form validation
    if (checkInDate == "" || checkOutDate == "" || guests == "" || localchkOutDay - localchkInDay <= 0) {
        let aError = (checkInDate == "") ? "Arrival date required" : "";
        document.getElementById("arrivalDateError").innerHTML = aError;
        if (checkOutDate < checkInDate) document.getElementById("departDateError").innerHTML = "dError";
        let dError = (checkOutDate == "") ? "Departure date required" : "";
        document.getElementById("departDateError").innerHTML = dError;
        let gError = (guests == "") ? "No of guests required" : "";
        document.getElementById("guestError").innerHTML = gError;

        if (localchkOutDay - localchkInDay <= 0) {
            document.getElementById("departDateError").innerHTML = "Departure date can't be earlier or same as arrival date";
        }
    } else {
        var bookingAboutYou = document.getElementById("bookingAboutYou");
        if (bookingAboutYou.style.display === "none") {
            bookingAboutYou.style.display = "block";
        }
        document.getElementById("bookingDetails").style.display = "none";
        document.getElementById("bookingPayment").style.display = "none";
        document.getElementById("termsAndConditions").style.display = "none";
    }
}

// show booking payment div and and confirmation details
function showBookingPayment() {
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
    document.getElementById("lblArrivalDate").textContent = checkInDate;
    document.getElementById("lblDepartureDate").textContent = checkOutDate;
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
    document.location.href = "./index.html";
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

//add unavailable dates to calender
var mcalendarEvents = [];
function hello() {
    console.log("Hello world!! Add event");
    for(let x = 1; x < 5; x++){
    mcalendarEvents.push({
      id: 'event1', // Event's ID (required)
      name: "aaaa Year", // Event name (required)
      date: "January/ " + x +"/2020", // Event date (required)
      description: "My Happy New year peeps!!",
      type: "holiday", // Event type (required)
      everyYear: true // Same event every year (optional)
  });
}
  console.log(mcalendarEvents);
  sessionStorage.setItem("mEvents", JSON.stringify(mcalendarEvents));


}
