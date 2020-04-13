const bodyParser = require('body-parser');
let express = require('express');
let cors = require('cors');

let app = express();
app.use(bodyParser.json());
app.use(cors());

let server = app.listen(2020, function () {
    console.log('listing to port 2020')
});

require("./socket")(server);
require("./router")(app);
app.get('/', function(req, res) {
    res.render('../views/index.ejs');
});





