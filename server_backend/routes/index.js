const projectsRouter = require('./projectsRouter');
const userRouter = require('./userRouter');
const comentaryRouter = require('./comentaryRouter');
const express = require('express');
//const analystsRuter = require('./analystsRuter');
function routerApi(app){
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/projects',projectsRouter);
    router.use('/projects/comentary',comentaryRouter);
    router.use('/user',userRouter);
}

module.exports = routerApi; 