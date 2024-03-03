import type { NextFunction, Request, Response } from 'express';

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
): Response | void {
  if (req.user) return next();
  else return res.status(401).send();
}
