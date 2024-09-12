//Selecting a Rating
const ratingBtns = document.querySelectorAll('.btn');
let selectedRating = 0;

ratingBtns.forEach(button => {
  button.addEventListener('click', function () {
    // Remove 'selected' class from all buttons
    ratingBtns.forEach(function (btn) {
      btn.classList.remove('selected');
    });

    // Add 'selected' class to the clicked button
    this.classList.add('selected');

    // Store the selected rating
    selectedRating = this.textContent;
  });
});

// Submit button handling
const submitBtn = document.querySelector('.submit');
const thankYouContainer = document.querySelector('.thankyou-container');
const ratingStateContainer = document.querySelector('.container');
const ratingDisplay = document.querySelector('.rate-selected p');

submitBtn.addEventListener('click', () => {
  if (selectedRating > 0) {
    ratingStateContainer.style.display = 'none';
    thankYouContainer.style.display = 'flex';
    ratingDisplay.textContent = `You selected ${selectedRating} out of 5`;
  } else {
    alert('Please select a rating before submitting.');
  }
});
