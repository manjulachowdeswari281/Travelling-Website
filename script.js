
function showPage(pageName) {

    var pages = document.querySelectorAll(".page");

    pages.forEach(function (page) {
        page.classList.remove("active");
    });

    document.getElementById(pageName).classList.add("active");
}


// Add places to trip

function addPlace(place) {

    var list = document.getElementById("tripList");
    var item = document.createElement("li");

    item.textContent = place;

    list.appendChild(item);

    alert(place + " added to your trip!");
}


// Contact form

document.getElementById("contactForm").addEventListener("submit", function (event) {

    event.preventDefault();

    var name = document.getElementById("name").value;

    document.getElementById("result").textContent =
        "Thank you " + name + "! Your message was received.";

    this.reset();
});


// Open home page first

showPage("home");
