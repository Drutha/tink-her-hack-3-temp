document.getElementById("travel-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const destination = document.getElementById("destination").value;
    const accessibility = document.getElementById("accessibility").value;
    const date = document.getElementById("date").value;
    if (name && email && destination && accessibility && date) {
        alert(`Application submitted successfully!\n\nName: ${name}\nEmail: ${email}\nDestination: ${destination}\nDate: ${date}\nAccessibility needs: ${accessibility}`);
    } else {
        alert("Please fill in all fields before submitting.");
    }
});