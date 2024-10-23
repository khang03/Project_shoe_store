const postRoute = require('./postRoute.js');
const userRoute = require('./userRoute.js');


// init Routes for all route
function Routes(app) {
    app.use('/posts', postRoute);
    app.use('/users', userRoute);
    // app.use('/', (req,res) => {
    //     res.send('this is index page');
    // })
}

module.exports = Routes;