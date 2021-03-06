const enquiryBtn = document.getElementById("enquiry-btn");
const enquiryClose = document.getElementById("enquiry-close");
const enquiryForm = document.getElementById("enquiry-form");

enquiryBtn.addEventListener("click", (click) => {
  enquiryForm.style.right = 0;
});

enquiryClose.addEventListener("click", (click) => {
  enquiryForm.style.right = "-350px";
});

// Preloader Function
function loderfunction() {
  document.getElementById("loading").style.display = "none";
}
