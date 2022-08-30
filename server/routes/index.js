const { Router } = require("express");
const router = Router();
const authRoute = require("./auth.route");
const usersRoute = require("./users.route");
const roomsRoute = require("./rooms.route");

const routes = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/users",
    route: usersRoute,
  },
  {
    path: "/rooms",
    route: roomsRoute,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
