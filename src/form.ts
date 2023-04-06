// Get the form
export const form = document.querySelector("form");

// Function to clear the form
function clearForm() {
  form!.reset();
}

// Listen for form submission
form!.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission behavior

  // Submit the form asynchronously
  fetch(form!.action, {
    method: "POST",
    body: new FormData(form!),
    headers: { Accept: "application/json" },
  })
    .then((response) => {
      // Handle successful form submission
      console.log(response);
      alert("Thanks for your submission B!");
      clearForm();
    })
    .catch((error) => {
      // Handle form submission error
      console.log(error);
      alert("Oops! There was a problem submitting your form.");
    });
});
