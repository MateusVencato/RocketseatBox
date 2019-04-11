const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

routes.post("/boxes", BoxController.store);
routes.get("/boxes/:id", BoxController.show);

routes.post('/boxes/:id/files', (data) => {
    console.log(data);
} );

routes.post('/xyz', (data) => {
    console.log(data);
} );

module.exports = routes;