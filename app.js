const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

require("./bootstrap/bootstrap")(app);
require("./bootstrap/routes")(app);
require("./bootstrap/error")(app);

app.listen(PORT, () => `Server running on port: ${PORT}`);
