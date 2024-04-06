const express = require("express");
const bodyParser = require("body-parser");
const dbConnect = require("./config/dbConnect");
const app = express();
const port = process.env.PORT || 3000;
const dotenv = require("dotenv").config();
const authRouter = require("./routes/authRoutes");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/user", authRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
