import 'dotenv/config';

const express = require('express');
const app = express();

const userCredentials = {
    firstname: 'Robin'
};
const userDetails = {
    nationality: 'German'
};

const user = {
    ...userCredentials,
    ...userDetails,
};

console.log(user, "--ee--user");
module.exports = app;