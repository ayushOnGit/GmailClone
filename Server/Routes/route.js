// route.js
const express = require('express');
const emailController = require('../Controller/email-controller');
const toggleStarredEmails = require('../Controller/email-controller');

const routes = express.Router();

routes.post('/save', emailController.saveSentEmail);
routes.get('/emails/:types', emailController.getEmails);
routes.post('/save-draft', emailController.saveDraftEmail);
routes.post('/bin', emailController.moveEmailsToBin);
routes.post('/starred' ,emailController.toggleStarredEmails)
routes.delete('/delete' ,emailController.deleteEmails);

module.exports = routes;
