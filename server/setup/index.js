const setupSanitization = require("./sanitize");
const setupMongoDB = require("./db");
const socket = require("./socket");
const routes = require("../routes");
const host = require("../config/host");
const {
  errorHandler,
  errorConverter,
  unsupportedRouteHandler,
} = require("../middleware/apiError");
const passport = require("passport");
const { jwtStrategy } = require("../middleware/passport");

module.exports = (app, server) => {
  setupMongoDB();
  setupSanitization(app);
  app.use(passport.initialize());
  passport.use("jwt", jwtStrategy);
  app.use("/api", routes);
  app.use(unsupportedRouteHandler);
  app.use(errorConverter);
  app.use(errorHandler);

  socket(server);

  const PORT = process.env.PORT || host.server.port;
  app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
  });
};
