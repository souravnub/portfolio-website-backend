let checkFormData = (req, res, next) => {
    function validateEmail(emailAdress) {
        if (emailAdress !== undefined && emailAdress.length > 0) {
            let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (emailAdress.match(regexEmail)) {
                return true;
            } else {
                return false;
            }
        }
        return false;
    }

    let errors = [];

    let isEmailValid = validateEmail(req.body.email);
    let isNameValid = req.body.name.trim().length >= 3;
    let isMessageValid = req.body.message.trim().length >= 10;

    if (!isEmailValid) {
        errors.push({
            location: "email",
            message: "Email address is invalid.",
        });
    }
    if (!isNameValid) {
        errors.push({
            location: "name",
            message: "Name should be 3 or more than 3 characters long.",
        });
    }
    if (!isMessageValid) {
        errors.push({
            location: "message",
            message: "Message should be 10 or more than 10 characters long.",
        });
    }

    if (errors.length > 0) {
        return res.status(400).json({ success: false, errors });
    }

    next();
};

module.exports = checkFormData;
