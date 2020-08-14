const onlyAdmins = (req, next) => {
  // check user permissions
  next();
};

module.exports = {
  onlyAdmins,
};
