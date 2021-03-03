import {Request,Response} from 'express';

class IndexController{

    public index (req: Request,res: Response){

        res.json({text: 'LA API SE ENCUENTRA EN /api/productos'})

    }


}
export const indexController = new IndexController();