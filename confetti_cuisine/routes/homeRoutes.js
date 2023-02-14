const router = require("express").Router(),
    homeController = require("../controllers/homeController");


router.get("/", homeController.index);
router.get("/courses", homeController.contact);


module.exports = router;