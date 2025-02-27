let menu =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menu.onclick =() =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}
window.onscroll =() =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
const typed = new Typed('.multiple-text', { // Use . for class selector
    strings: ['Physical Fitness', 'Weight Gain', 'Fat Loss', 'Strength Training', 'Weight Lifting'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
});

document.getElementById('loginForm').onsubmit = (event) => {
    event.preventDefault(); // Prevent form from reloading the page

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert(`Welcome, ${email}!`);
        // Add your authentication logic here
    } else {
        alert("Please fill in all fields.");
    }
};
const form = document.getElementById('loginForm');
        const successMessage = document.getElementById('successMessage');

        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form from refreshing the page

            // Show success message
            successMessage.style.display = 'block';

            // Optional: Clear form fields
            form.reset();

            // Hide the success message after 3 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 3000);
        });
//Typing text code//

 