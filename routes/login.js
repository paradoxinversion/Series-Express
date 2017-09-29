const express = require('express');
const router = express.Router();

// Set up our Login route
router.get('/', function(request, response) {
  // See if we have a username cookie, proceed to main page if we do
  const name = request.cookies.username;
  if (name){
    response.redirect("/");
  }else{
    //Send the user to the login page again if it is invalid/there is no cookie
    response.render("login");
  }
});

router.post('/', (request, response) => {
  response.cookie("username", request.body.username);
  response.redirect("/dashboard");
});
module.exports = router;
