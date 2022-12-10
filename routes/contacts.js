const express = require("express");
const checkFormData = require("../middlewares/checkFormData");
const Contacts = require("../models/Contacts");
const router = express.Router();
router.post("/", checkFormData, async (req, res) => {
    try {
        await Contacts.create(req.body);

        res.status(200).json({
            success: true,
            message: "Message sent successfully !",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error,
            message: "Some internal server error occured....",
        });
    }
});

module.exports = router;
