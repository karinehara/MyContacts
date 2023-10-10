import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export async function deleteCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;
    await Category.findByIdAndDelete(categoryId);
    return res.status(204).send();
  }catch  {
    return res.sendStatus(500);
  }
}
