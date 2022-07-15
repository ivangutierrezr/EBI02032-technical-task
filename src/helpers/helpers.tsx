import { DataObject, HeatMapItem, HeatMapGeneItem } from './interfaces'

export function buildHeatMapData(orderedDataSet: Array<DataObject>) {
    let dataHeatMap: Array<HeatMapItem> = [];
    for (let i = 0; i < orderedDataSet.length; i++) {
        const dataSetItem = orderedDataSet[i];
        let gene_symbol = dataSetItem["gene_symbol"];
        let dataGene: Array<HeatMapGeneItem> = [];
        for (let j = 0; j < dataSetItem["diagnoses"].length; j++) {
            const diagnosis = dataSetItem["diagnoses"][j];
            for (let k = 0; k < diagnosis["models"].length; k++) {
                const model = diagnosis["models"][k];
                let objDataGene: HeatMapGeneItem = {
                    "x": model["model_id"],
                    "y": parseFloat((model["z_score"] / model["total_scores"]).toFixed(3)),
                    "gene_symbol": gene_symbol,
                    "diagnosis": diagnosis["diagnosis"],
                    "chromosome": model["chromosome"],
                    "seq_start_position": model["seq_start_position"],
                    "seq_end_position": model["seq_end_position"],
                    "gene_id_ensembl": model["gene_id_ensembl"],
                }
                dataGene.push(objDataGene);
            }
        }
        let objGene: HeatMapItem = {
            "id": gene_symbol,
            "data": dataGene
        };
        dataHeatMap.push(objGene);
    }
    // setHeatMapData(dataHeatMap);
    return dataHeatMap;
}

export function getMaxValue(heatMapData: Array<HeatMapItem>) {
    let maxValue: number = 0;
    for (let i = 0; i < heatMapData.length; i++) {
        const itemHeatMapGene = heatMapData[i];
        for (let j = 0; j < itemHeatMapGene["data"].length; j++) {
            const itemHeatMapGeneData = itemHeatMapGene["data"][j]["y"];
            if (itemHeatMapGeneData > maxValue) {
                maxValue = Math.ceil(itemHeatMapGeneData);
            }
        }
        
    }
    return maxValue;
}

export function getMinValue(heatMapData: Array<HeatMapItem>) {
    let minValue: number = 0;
    for (let i = 0; i < heatMapData.length; i++) {
        const itemHeatMapGene = heatMapData[i];
        for (let j = 0; j < itemHeatMapGene["data"].length; j++) {
            const itemHeatMapGeneData = itemHeatMapGene["data"][j]["y"];
            if (itemHeatMapGeneData < minValue) {
                minValue = Math.floor(itemHeatMapGeneData)
            }
        }
        
    }
    return minValue;
}