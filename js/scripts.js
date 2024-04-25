window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollBtn").style.display = "block";
  } else {
    document.getElementById("scrollBtn").style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.getElementById("recommendationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Show Bootstrap modal popup
    $('#exampleModal').modal('show');
});