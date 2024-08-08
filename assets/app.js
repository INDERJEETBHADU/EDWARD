document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    Swal.fire({
        title: 'Thank you for subscribing!',
        text: 'You will receive our latest news and exclusive offers.',
        icon: 'success',
        timer: 3000, 
        showConfirmButton: false
    });

    event.target.reset();
});

function openNav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflow_hidden");
    document.querySelector(".menu").classList.toggle("cross")
}
