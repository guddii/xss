const express = require('express');
const app = express();

app.all('/reflected', require('./routes/reflected').controller);
app.all('/persistent', require('./routes/persistent').controller);
app.all('/dom', require('./routes/dom').controller);

app.listen(3000, function () {
    let host = "localhost";
    let port = this.address().port;
    console.log("Website listening at http://%s:%s", host, port);
});