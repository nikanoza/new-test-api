import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res
      .status(403)
      .send({ message: "You have not permission for this action" });
  } else {
    const [, token] = authorization.trim().split(" ");
    jwt.verify(token, process.env.JWT_SECRET || "", (err, decoded) => {
      if (err) {
        console.log("JWT verification failed:", err);
        res
          .status(403)
          .send({ message: "You have not permission for this action" });
      } else {
        next();
      }
    });
  }
};

export default authMiddleware;
