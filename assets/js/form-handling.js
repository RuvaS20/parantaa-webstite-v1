const subForm = document.getElementById("subscription__form");

// Subscription form prevent autosubmit + get email value
subForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    // console.log(email); for error checking
});

//Show thank you submission message for subscription form
const thankMessage = document.getElementById("thank__message");

if (subForm) {
  subForm.addEventListener("submit", () => {
    subForm.classList.add("hide__subscription__form");
    thankMessage.classList.remove("hide__thank__message");
  });
}