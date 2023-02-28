import Link from "next/link";
import { useEffect, useState } from "react";
import { Categoria } from "../../interfaces";

const Categorias = () => {

    const [categoriaList, setCategoriaList] = useState([] as Categoria[])

    const RemoveData = (id: string) => {
        console.log(`RemoveData ${id}`)
    }

    const LoadCategorias = async () => {
        const res = await fetch("api/categorias");
        const data = await res.json();
        return data;
    }

    useEffect(() => {
        LoadCategorias().then(data => {
            setCategoriaList(data);
        }).catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <>
            <div className="row">
                <div className="col">
                    <h2>Categorias</h2>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <table className="table table-sm table-bordered">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>#</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Array.isArray(categoriaList) &&
                                categoriaList.map((categoria: Categoria, index: number) => {
                                    return (
                                        <tr key={index}>
                                            <td>{categoria.Nome}</td>
                                            <td className="text-center">
                                                <Link href={`/categorias/editar/${categoria.Id}`} className="ms-2 me-2">
                                                    <i className="fas fa-edit"></i>
                                                </Link>
                                                <span className="text-danger" onClick={(e) => { RemoveData(categoria.Id) }}>
                                                    <i className="fas fa-trash-alt"></i>
                                                </span>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            <tr>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Categorias;
