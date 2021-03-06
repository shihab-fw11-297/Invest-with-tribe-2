const cors = require("cors");
const exp = require("express");
const bp = require("body-parser");
const { connect } = require("mongoose");
const { success, error } = require("consola");
const userController = require('./routes/userRoutes');


// Bring in the app constants
const { DB, PORT } = require("./config");
// Initialize the application
const app = exp();

// Middlewares
app.use(cors());
app.use(bp.json());


// User Router Middleware
app.use("/api/users", userController);

const startApp = async () => {
    try {
      // Connection With DB
      await connect(DB);
  
      success({
        message: `Successfully connected with the Database `,
        badge: true
      });
  
      // Start Listenting for the server on PORT
      app.listen(PORT, () =>
        success({ message: `Server started on PORT ${PORT}`})
      );
    } catch (err) {
      error({
        message: `Unable to connect with Database \n${err}`,
        badge: true
      });
    }
  };
  
  startApp();