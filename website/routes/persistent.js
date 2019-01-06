let store = "";
exports.controller = function (req, res) {
    if (req.query.leak) {
        store = store + req.query.leak;
    }
    // noinspection JSDeprecatedSymbols
    res.send(`<html lang="de">
                <head>
                    <title>Persistent oder beständiges XSS</title>
                </head>
                <body>
                    <label for="watched">Beobachtetes Feld</label>
                    <input id="watched">
                    ${escape(store)}
                    </body>
              </html>`);
};