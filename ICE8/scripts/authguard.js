(function() {
    // Check if user is logged in and contact-list-btn session storage item exists
    if (!sessionStorage.getItem("user")) {
      // Redirect user to login.html
      location.href = 'login.html';
    } 
  })();
  