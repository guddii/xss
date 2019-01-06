exports.controller = function (req, res) {
    res.send(`<html lang="de">
                <head>
                    <title>DOM-basiert oder lokales XSS</title>
                </head>
                <body>
                    <label for="watched">Beobachtetes Feld</label>
                    <input id="watched">
                    <script nonce="${res.locals.cspToken}">
                        const urlParams = new URLSearchParams(window.location.search);
                        const leak = urlParams.get('leak');
                        document.writeln(leak);
                    </script>
                </body>
              </html>`);
};