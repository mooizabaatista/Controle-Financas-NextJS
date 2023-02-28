import { NextApiRequest, NextApiResponse } from "next";
import { GetAll, Add } from '../../../controllers/Categorias.Controller';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'GET':
            GetAll()
                .then(data => {
                    res.status(200).json(data);
                })
                .catch(err => res.status(500).json(err))
            break;
        case 'POST':
            res.json("Foi post");
            break;
        default:
            res.status(405).json({ message: "Método não permitido!" });
    }
};