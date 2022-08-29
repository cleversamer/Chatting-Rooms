const AccessControl = require("accesscontrol");

const allRights = {
  "create:any": ["*"],
  "read:any": ["*"],
  "update:any": ["*"],
  "delete:any": ["*"],
};

let grantsObject = {
  admin: {
    user: allRights,
  },
  user: {
    user: {
      "read:own": ["*"],
      "update:own": ["*"],
    },
  },
};

const roles = new AccessControl(grantsObject);

module.exports = roles;
