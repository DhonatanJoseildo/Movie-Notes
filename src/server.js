require("express-async-errors");

const migrationsRun = require("./database/sqlite/migrations");

const express = require("express");

const AppError = require("./Utils/AppError");

const routes = require("./routes");

const app = express();

app.use(express.json());

app.use(routes);

migrationsRun();

app.use((error, req, res, next) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal server error"
  });
})

const PORT = 3535;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
