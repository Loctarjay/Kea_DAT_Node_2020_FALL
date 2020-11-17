const router = require("express").Router();

const bcrypt = require("bcrypt");
const saltRounds = 12;

const plainTextPassword = "picards'secretpassword";
const hashedPassword = "$2b$12$oWUd/HhR0jv3zgsQhuUklOOGMyu9Gmsr0xvdfCJIABo6Fv.nZLzJW";

// bcrypt.hash(plainTextPassword, saltRounds, (error, hash) => {
//     console.log(hash);
// });

// bcrypt.compare(plainTextPassword, hashedPassword, (error, result) => {
//     console.log(result);
// });



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
