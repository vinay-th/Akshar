import { getUser } from "../service/auth.js";

export const filterUrl = async (req, res, next) => {
  let sessionId = req.cookies?.uuid;

  if (!sessionId) return res.send("Token not found.");
  let user = getUser(sessionId);
  if (!user) return res.send("User Not Found");

  req.user = user;
  next();
};
