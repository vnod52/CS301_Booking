function myAlert() {
    alert("Hello! I am an alert box!");
  }

function clearSearchBox() {
    document.getElementById("searchbox").value = ""
}

function showHomeSectionOnly(){
    var home= document.getElementById("home");
    if(home.style.display === "none"){
        home.style.display = "block";
    }
    document.getElementById("booking").style.display = "none";
    document.getElementById("about").style.display = "none";
}

// show booking details div
function showBookingDetails() {
    var bookingDetails = document.getElementById("bookingDetails");
    if(bookingDetails.style.display === "none"){
        bookingDetails.style.display = "block";
    }
    document.getElementById("bookingAboutYou").style.display = "none";
}

// show booking about you div
function showBookingAboutYou() {
    var bookingAboutYou = document.getElementById("bookingAboutYou");
    if(bookingAboutYou.style.display === "none"){
        bookingAboutYou.style.display = "block";
    }
    document.getElementById("bookingDetails").style.display = "none";
}

var text = '{"employees":[' +
'{"fullName":"John","phone":"12341241" },' +
'{"fullName":"Anna","phone":"357358" },' +
'{"fullName":"Peter","phone":"8094612543" }]}';

function createTable(){
    mData = JSON.parse(text);
    var table = document.getElementById("studentTable");
    for (let index = 0; index < mData.employees.length; index++) {
        const person = mData.employees[index];
        console.log(person);
        var row = table.insertRow();
        var cell1 = row.insertCell();
        cell1.innerHTML = index;
        var cell2 = row.insertCell();
        cell2.innerHTML = person.fullName;
        var cell3 = row.insertCell();
        cell3.innerHTML = person.phone;

        var btn = document.createElement("input");
        btn.type = "button";
        btn.value = "remove";
        btn.textContent = "Remove";
        btn.className = "btn btn-primary";
        btn.style = "100%";
        btn.id = index + 1;
        btn.onclick = removeTableRow;
        var cell4 = row.insertCell();
        cell4.append(btn);
    }
}

function removeTableRow() {
    console.log("Clicked", this.id);
    document.getElementById("studentTable").rows[this.id].style.display = "none";
}

function mSearch(){
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();
    table = document.getElementById("studentTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
        }       
    }
}



