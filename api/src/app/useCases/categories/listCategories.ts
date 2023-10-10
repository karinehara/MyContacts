import { Request, Response } from 'express';
import { Category } from '../../models/Category';


export async function listCategories(req: Request, res: Response) {
  try {
    const categories = await Category.find();
    res.json(categories);
  }catch  {
    return res.sendStatus(500);
  }
}