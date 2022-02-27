const router = require("express").Router()
const {
    userRegister,
    userLogin
} = require("../utils/Auth");


// Users Registeration Route
router.post("/register-user", async (req, res) => {
    await userRegister(req.body, "customer", res);
});

// Admin Registration Route
router.post("/register-admin", async (req, res) => {
    await userRegister(req.body, "admin", res);
});

// Users Login Route
router.post("/login-user", async (req, res) => {
    await userLogin(req.body, "customer", res);
});

// Admin Login Route
router.post("/login-admin", async (req, res) => {
    await userLogin(req.body, "admin", res);
});

module.exports = router

