
//Global booking variables
var fName, lName, phone, email, arrivalDate, departureDate, guests;

// show booking details div
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
}

// show booking about you div
function showBookingAboutYou() {
    var bookingAboutYou = document.getElementById("bookingAboutYou");
    if(bookingAboutYou.style.display === "none"){
        bookingAboutYou.style.display = "block";
    }
    document.getElementById("bookingDetails").style.display = "none";
    document.getElementById("bookingPayment").style.display = "none";
}

// show booking payment div and booking details
function showBookingPayment() {
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
}



// function mSearch(){
//     var input, filter, table, tr, td, i, txtValue;
//     input = document.getElementById("searchbar");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("studentTable");
//     tr = table.getElementsByTagName("tr");
//     for (i = 0; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td")[1];
//         if (td) {
//         txtValue = td.textContent || td.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             tr[i].style.display = "";
//         } else {
//             tr[i].style.display = "none";
//         }
//         }       
//     }
// }


// var text = '{"employees":[' +
// '{"fullName":"John","phone":"12341241" },' +
// '{"fullName":"Anna","phone":"357358" },' +
// '{"fullName":"Peter","phone":"8094612543" }]}';

// function createTable1(){
//     mData = JSON.parse(text);
//     var table = document.getElementById("studentTable");
//     for (let index = 0; index < mData.employees.length; index++) {
//         const person = mData.employees[index];
//         console.log(person);
//         var row = table.insertRow();
//         var cell1 = row.insertCell();
//         cell1.innerHTML = index;
//         var cell2 = row.insertCell();
//         cell2.innerHTML = person.fullName;
//         var cell3 = row.insertCell();
//         cell3.innerHTML = person.phone;

//         var btn = document.createElement("input");
//         btn.type = "button";
//         btn.value = "remove";
//         btn.textContent = "Remove";
//         btn.className = "btn btn-primary";
//         btn.style = "100%";
//         btn.id = index + 1;
//         btn.onclick = removeTableRow;
//         var cell4 = row.insertCell();
//         cell4.append(btn);
//     }
// }


// function removeTableRow() {
//     console.log("Clicked", this.id);
//     document.getElementById("studentTable").rows[this.id].style.display = "none";
// }

// function myAlert() {
//     alert("Hello! I am an alert box!");
//   }

// function clearSearchBox() {
//     document.getElementById("searchbox").value = ""
// }

// function showHomeSectionOnly(){
//     var home= document.getElementById("home");
//     if(home.style.display === "none"){
//         home.style.display = "block";
//     }
//     document.getElementById("booking").style.display = "none";
//     document.getElementById("about").style.display = "none";
// }