const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
require("dotenv").config();

const staff = require("./routes/staffRoutes");
const department = require("./routes/departmentRoutes");

app.use(bodyParser.json());
app.use("/api/staff", staff);
app.use("/api/department", department);

app.listen(port, () => console.log(`server is running on port ${port}`));
