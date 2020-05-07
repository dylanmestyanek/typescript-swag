"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    else {
        res.status(403);
        res.send("go away");
    }
}
router.get("/", function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n            <div>\n                <div>You are logged in</div>\n                <a href=\"/logout\">Logout</a>\n            </div>\n        ");
    }
    else {
        res.send("\n            <div>\n                <div>You are not logged in idiot</div>\n                <a href=\"/login\">Log In</a>\n            </div>\n        ");
    }
});
router.get("/logout", function (req, res) {
    req.session = undefined;
    res.redirect("/");
});
router.get("/protected", requireAuth, function (req, res) {
    res.send("Wuddup homie dawg");
});
