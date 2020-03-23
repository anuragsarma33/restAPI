const express = require('express');
const appRoute = express.Router();
const appControl = require('../controller');

appRoute.get('/', appControl.home);
appRoute.post('/add', appControl.newProduct);
appRoute.get('/edit/:id', appControl.editProduct)
appRoute.patch('/edit/:id', appControl.updateProduct)
appRoute.delete('/delete/:id', appControl.deleteProduct);

module.exports = appRoute;