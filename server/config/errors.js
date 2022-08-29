const system = {
  internal:
    "An un expected error happened on the server. That's not your fault.",
  unsupportedRoute: "Unsupported route.",
};

const auth = {
  invalidToken: "You're unauthorized.",
  hasNoRights: "You don't have enough rights.",
  emailNotUsed: "Email is not used.",
  emailUsed: "Email is already used.",
  incorrectCredentials: "Incorrect email or password.",
  passwordsNotEqual: "Passwords are not the same.",
  invalidEmail: "Invalid email address.",
  invalidPassword: "Password should be (8 ~ 32 characters) length.",
  invalidName: "Name should be (1 ~ 64 characters) length.",
};

const user = {
  notFound: "User was not found.",
  alreadyVerified: "User is already verified.",
};

module.exports = {
  system,
  auth,
  user,
};
