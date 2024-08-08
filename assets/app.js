document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Show SweetAlert popup
    Swal.fire({
        title: 'Thank you for subscribing!',
        text: 'You will receive our latest news and exclusive offers.',
        icon: 'success',
        timer: 3000, // Show the popup for 3 seconds
        showConfirmButton: false // Hide the confirm button
    });

    // Optionally clear the form
    event.target.reset();
});
