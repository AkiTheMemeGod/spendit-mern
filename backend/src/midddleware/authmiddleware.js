import jwt from 'jsonwebtoken';

export async function auth(req, res, next) {
  const token = await req.header("Authorization")?.split(" ")[1];
  if (!token) return res.status(401).json({ msg: "No token, access denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // attach user info
    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid token" });
  }
}

export default auth;