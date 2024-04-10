document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Fetch form values
    var name = this.elements['name'].value;
    var email = this.elements['email'].value;
    var message = this.elements['message'].value;

    // You can perform further actions here, like sending the data to a server
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // For demonstration, let's just clear the form
    this.reset();
});
