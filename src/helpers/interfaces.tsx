export interface DataObject extends Record<string, any> {};

export interface HeatMapGeneItem extends Record<string, any> {
    x: string;
    y: number;
    gene_symbol: string,
    diagnosis: string,
    chromosome: string,
    seq_start_position: string,
    seq_end_position: string,
    gene_id_ensembl: string,
}

export interface HeatMapItem extends Record<string, any> {
    id: string;
    data: Array<HeatMapGeneItem>;
}
