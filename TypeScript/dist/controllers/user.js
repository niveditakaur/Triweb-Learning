"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkTypesAndInterface = exports.registerUser = void 0;
const user_1 = require("../models/user");
const registerUser = (req, res) => {
    const userName = "Nivedita";
    const password = "password";
    const age = 20;
    const result = (0, user_1.addUserToDB)(userName, password, age);
    res.send(result);
};
exports.registerUser = registerUser;
const checkTypesAndInterface = (req, res) => {
    let num = { x: 1, y: 2 };
    num.x = 4;
    let xState = "locked";
    const myUser = {
        id: 1,
        uname: "Nivedita",
        password: "psw123",
        age: 20,
        is_active: false,
        accountStatus: "locked"
    };
    const result = (0, user_1.updateUserData)(myUser);
    res.send(result);
};
exports.checkTypesAndInterface = checkTypesAndInterface;
