const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json({ extended: false }));

app.use("/details", require("./routes/details"));
app.use("/update", require("./routes/update"));
app.use("/image", require("./routes/image"));
app.use("/insert", require("./routes/insert"));
app.use("/delete", require("./routes/delete"));

app.listen(PORT, () => {
    console.log("Server listening at port", PORT)
  })
