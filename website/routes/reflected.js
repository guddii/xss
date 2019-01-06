exports.controller = function (req, res) {
    // noinspection JSDeprecatedSymbols
    res.send(`<html lang="de">
                <head>
                    <title>Reflektiert oder nicht-persistentes XSS</title>
                </head>
                <body>
                    <label for="watched">Beobachtetes Feld</label>
                    <input id="watched">
                    ${escape(req.query.leak)}
                    </body>
              </html>`);
};