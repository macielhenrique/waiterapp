import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function createCategory(req: Request,res: Response){
  res.send('OK POST CREATE CATEGORY');
}
