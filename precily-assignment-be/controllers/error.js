exports.getErrorPage = (req, res, next) => {
  res.render("404Error", {
    path: "/",
    pageTitle: "Page Not Found",
  });
};
