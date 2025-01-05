const express = require("express");
const dotenv = require("dotenv");
const { dbConfig } = require("./db/dbConfig");
const authRouter = require("./routes/auth.routes");
const classRouter = require("./routes/classes.routes.js");
const paymentRoutes = require("./routes/paymentRoutes");
const purchaseRoutes = require("./routes/PurchaseRoutes");
const newsLetterRouter = require("./routes/newsLetter.routes");
const attendeeRoute = require("./routes/attendee.routes");

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

// middlewares
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.json({ message: "welcome to the event management api" });
});
app.use("/auth", authRouter);
app.use("/", classRouter);
app.use("/api", paymentRoutes);
app.use("/api", purchaseRoutes);
app.use("/newsletters", newsLetterRouter);
app.use("/attendee", attendeeRoute)

// 404 page
app.use("*", (req, res) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(PORT, () => {
  dbConfig();
  console.log(`Server running on port:${PORT}`);
});

module.exports = app;

//Rizwan Amir Fahim