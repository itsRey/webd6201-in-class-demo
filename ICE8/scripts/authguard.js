(function(){
    // Check if user is logged in
    if(!sessionStorage.getItem("user")){
        // redirect user to login.html
        location.href = 'login.html'
    }
})()