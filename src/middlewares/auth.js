export function isAuthorized(req, res, next) {

  User.findById(req.userId).exec(function (error, user) {
    if (error) {
      return next(error);
    } else {
      if (user === null) {
        var err = new Error('Not authorized! Must have JWT!');
        err.status = 401;
        return next(err);
      } else {
        return next();
      }
    }
  });
}