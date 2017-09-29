const express = require('express');
const router = express.Router();

router.post('/', (request, response) => {
  response.clearCookie("username");
  response.redirect("/login");
});
module.exports = router;
