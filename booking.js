document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("fullName").value;
  const service = document.getElementById("service").value;

  alert(`Thank you, ${name}! Your ${service} has been booked. Time to own your crown.`);

  this.reset();
});