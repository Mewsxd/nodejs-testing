const dotenv = require("dotenv");
const express = require("express");
const twilioRoutes = require("./routes/twilioRoutes");

dotenv.config();
const app = express();
app.get("/", (req, res) => {
  res.status(200).send("Listening");
});
app.use("/twilio-sms", twilioRoutes);
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
