const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();

class HandlerGenerator {
  // TO DO
}

function main() {
  let app = express(); // Export app for other routes to use
  let handlers = new HandlerGenerator();
  const port = process.env.PORT || 3001;

  app.use(
    bodyParser.urlencoded({
      // Middleware
      extended: true
    })
  );
  app.use(pino);

  app.get("/greeting", (req, res) => {
    const name = req.query.name || "World";
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
  });

  app.listen(port, () => console.log(`Server is listening on port: ${port}`));
}

main();
