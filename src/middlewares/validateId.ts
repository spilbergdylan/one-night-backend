import { Request, Response, NextFunction } from 'express';

// Middleware to validate ID
export const validateId = (req: Request, res: Response, next: NextFunction): void => {
  const { id } = req.params;

  if (!id || isNaN(Number(id))) {
    res.status(400).json({ message: 'Invalid ID parameter' });
    return; // Ensure no further execution
  }

  next(); // Proceed to the next middleware or controller
};
