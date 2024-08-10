const express = require("express");
const app = express();
require("./src/connection/db");
const router = require("./src/router/familyTreeRouter");
const PORT = process.env.PORT || 4824;

app.use(express.json());
app.use("/api", router);

app.listen( PORT, () => {
    console.log(`Port No.${PORT} is Connected :)`);
});