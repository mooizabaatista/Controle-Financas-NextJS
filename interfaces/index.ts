export interface Categoria {
    Id: string;
    Nome: string;
}

export interface Lancamento {
    Id: string;
    Descricao: string;
    Valor: number;
    DtLancamento: Date;
}