module.exports = (app) => {

    let controller_instancer = require('./lib/controller_instancer.js')(__dirname + '/controllers');

    app.get('/', (req, res) => {
        controller_instancer.invokeAction('MainController@index', req, res);
    });

};