import {Request,Response} from 'express';
import pool from '../database';

class ProductosController{

    public async list (req: Request, res: Response) {
        const productos=await pool.query('SELECT * FROM productos', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const productos = await pool.query('SELECT * FROM productos WHERE id = ?', [id]);
        console.log(Object.keys(productos).length);
        if (Object.keys(productos).length>0) {
            return res.json(Object.keys(productos)[0]);
        }
    }

    public async create(req:Request,res:Response): Promise<void>{
        await pool.query('INSERT INTO productos set ?',[req.body]);
          res.json({message: 'producto guardado '});
      
      }

     public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldProducto = req.body;
        await pool.query('UPDATE productos set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "el producto fue actualizado" });
    }
    

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM productos WHERE id = ?', [id]);
        res.json({ message: "el producto fue eliminado" });
    }
}

const productosController = new ProductosController();
export default productosController;