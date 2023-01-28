const passport = require("passport");
const validator = require("validator");
const User = require("../models/User");

exports.login= (req, res, next) =>{
    const validationErroes = [];
    if(!validator.isEmail(req.body.email)){
        validationErroes.push({ msg: "Enter valid Email"});
    }
    if ( validator.isEmpty(req.body.password)) {
        validationErroes.push({ msg: "Enter valid Password"});
    }
    if (validationErroes.length >0) {
        return res.redirect("/login");
    }

    req.body.email = validator.normalizeEmail(req.body.email, {
        gmail_remove_dots: true
    });

    passport.authenticate("local", (err, user, info) =>{
        if(err) {
            return next(err)
        }
        if(!user){
            return res.redirect("/login");
        }

        req.lo
    })
    }
