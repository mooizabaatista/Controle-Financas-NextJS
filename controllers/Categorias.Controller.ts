import pool from "../database/db";
import { Categoria } from "../interfaces";

export const GetAll = () => {

    const querie = "SELECT * FROM Categorias Order By Nome";

    return new Promise(async (resolve, reject) => {
        try {
            await pool.connect();
            const result = await pool.request().query(querie);
            resolve(result.recordset)
        }
        catch (err) {
            reject(err);
        }
    });
};
export const GetById = (id: string) => { };
export const Add = (categoria: Categoria) => { };
export const Update = (categoria: Categoria) => { };
export const Remove = (id: string) => { };
