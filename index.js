let express = require('express');
let app = express();

let routes = require('./routes.js');

routes(app);

app.listen(8080, '0.0.0.0', () => {
    console.log('Started at 8080 port');
});