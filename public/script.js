document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("response-message").innerText = "Thank you, " + name + "! We will contact you soon.";
        this.reset();
    } else {
        document.getElementById("response-message").innerText = "Please fill out all fields.";
    }
});