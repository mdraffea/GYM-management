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

fetch('http://localhost:3000/users/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
    }),
  })
  .then(response => response.json())
  .then(data => {
    console.log('User registered:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  const Cashfree = require('cashfree-sdk');

  const paymentGateway = new Cashfree({
    appId: 'your_app_id',
    secretKey: 'your_secret_key',
    environment: 'PROD', // or 'TEST'
  });
  
  app.post('/payment/checkout', (req, res) => {
    const { amount, orderId, customerDetails } = req.body;
    const paymentData = {
      orderId,
      orderAmount: amount,
      orderCurrency: 'INR',
      customerDetails,
      returnUrl: 'https://yourdomain.com/payment/response',
    };
  
    paymentGateway.createOrder(paymentData)
      .then(order => res.json(order))
      .catch(err => res.status(500).json({ error: err.message }));
  });
    