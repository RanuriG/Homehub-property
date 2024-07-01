function openSearchPage() {
  var url = './pages/search.html';

  // Open the URL in a new tab
  window.open(url, '_blank');
}

function validateForm() {
  // Get form elements
  const typeResidence = document.getElementById('typeResidence');
  const postcode = document.getElementById('postcode');
  const minBedRoom = document.getElementById('minBedRoom');
  const maxBedRoom = document.getElementById('maxBedRoom');

  // Check if all required fields are filled
  if (typeResidence.value === "" || postcode.value === "" || minBedRoom.value === "" || maxBedRoom.value === "") {
    alert("Please fill in all mandatory fields (Type of Residence, Post Code, Min Bedrooms and Max Bedrooms).");
    return false; // Prevent form submission
  }

  return true; // Allow form submission if all validations pass
}
