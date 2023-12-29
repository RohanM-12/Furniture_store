const express = require("express");
// const { getApi } = require("./controller/getApi");

const app = express();

// app.get("/api", getApi);

app.listen(process.env.PORT, () => {
  console.log("Server Up and Running ");
});
