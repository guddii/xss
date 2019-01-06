const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.all('/', require('./routes/index').controller);
app.all('/data*', require('./routes/data').controller);

app.listen(4000, function () {
    let host = "localhost";
    let port = this.address().port;
    console.log("Attacker listening at http://%s:%s", host, port)
});