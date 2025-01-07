const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
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

const corsOptions = {
  origin: "https://dancewithpriyajayanthi.com",
  methods: "GET,POST,PUT,PATCH,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// routes
app.get("/", (req, res) => {
  return res.status(200).json({
    status: 200,
    message: "welcome to the event management api",
  });
});
app.use("/auth", authRouter);
app.use("/api/v1/classes", classRouter);
app.use("/api/v1/payments", paymentRoutes);
app.use("/api/v1/purchases", purchaseRoutes);
app.use("/api/v1/newsletters", newsLetterRouter);
app.use("/api/v1/attendees", attendeeRoute);

// 404 page
app.use("*", (req, res) => {
  return res.status(404).json({ status: 404, message: "page not found" });
});

app.listen(PORT, () => {
  dbConfig();
  console.log(`Server running on port:${PORT}`);
});

module.exports = app;

//Rizwan Amir Fahim
