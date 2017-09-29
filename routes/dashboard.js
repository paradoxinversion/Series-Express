const express = require('express');
const router = express.Router();

// Set up our Dashboard route
router.get('/', function(request, response) {
  const user = request.cookies.username;
  //if we don't have a cookie, we need to go to the login page
  if (!user){
    return response.redirect("/login");
  }

  response.render("dashboard", {user});
});

module.exports = router;
