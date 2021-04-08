const router = require("express").Router();
const controller = require("./route.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

/**
 * Route chaining, all appended with .all(methodNotAllowed)
 * for any invalid HTTP calls for each route
 */

router.route("/").all(methodNotAllowed);

module.exports = router;
