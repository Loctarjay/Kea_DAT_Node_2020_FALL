const router = require("express").Router();

const bcrypt = require("bcrypt");
const saltRounds = 12;

const plainTextPassword = "picards'secretpassword";

bcrypt.hash(plainTextPassword, saltRounds, (error, hash) => {
    console.log(hash);
});



router.post("/auth/login", (req, res) => {
    return res.status(501).send();
});

router.post("/auth/register", (req, res) => {
    return res.status(501).send();
});

router.get("/auth/logout", (req, res) => {
    return res.status(501).send();
});

module.exports = router;
