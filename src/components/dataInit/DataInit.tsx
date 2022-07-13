import React, { Component } from 'react';
import './DataInit.css'
import { Link } from 'react-router-dom';


const DataInit = () => {

    // let dataSet = []
    
    interface DataObject extends Record<string, any> {}
    let fullDataSet: Array<DataObject> = new Array<DataObject>();

    const [filteredDataSet, setFilterDataSet] = React.useState(fullDataSet);

    var request = new XMLHttpRequest();
    request.open('GET', 'https://raw.githubusercontent.com/PDCMFinder/expression-data-test/main/Expression.tsv', true);
    request.send(null);
    request.onreadystatechange = function () {
        console.log(request.readyState)
        console.log(request.status)
        if (request.readyState === 4 && request.status === 200) {
            var typeOfRequest = request.getResponseHeader('Content-Type');
            // console.log(typeOfRequest)
            if (typeOfRequest != null) {
                if (typeOfRequest.indexOf("text") !== 1) {
                    if (typeOfRequest.indexOf("text") !== 1) {
                        // console.log(request.responseText)
                        let tsv = request.responseText
                        const lines = tsv.split("\r\n");
                        const headers = lines[0].split("\t");

                        for (let i = 1; i < lines.length; i++) {
                            var obj: DataObject = {};
                            const currentline = lines[i].split("\t");

                            for (let j = 0; j < headers.length; j++) {
                                if (headers[j] == "z_score") {
                                    obj[headers[j]] = parseFloat(currentline[j]);
                                } else {
                                    obj[headers[j]] = currentline[j];
                                }
                            }

                            fullDataSet.push(obj);
                        }
                        console.log(fullDataSet)
                        setFilterDataSet(fullDataSet)
                        console.log(filteredDataSet)

                    }
                }
            }
        }
    }

    // console.log(request.responseText)
    // let text = request.responseText.split('\n')                               // split lines
    //     .map(line => line.split('\t').join(','))  // split spaces then join with ,
    //     .join('\n')                                // rejoin lines

    // console.log(text)

    // if (typeOfRequest != null) {
    //     if (typeOfRequest.indexOf("text") !== 1) {
    //         console.log(request.responseText)
    //         let tsv = request.responseText
    //         const lines = tsv.split("\n");
    //         const result = [];
    //         const headers = lines[0].split("\t");

    //         for (let i = 1; i < lines.length; i++) {
    //             let obj: any;
    //             const currentline = lines[i].split("\t");

    //             for (let j = 0; j < headers.length; j++) {
    //                 obj[headers[j]] = currentline[j];
    //             }

    //             result.push(obj);
    //         }
    //         console.log(result)
    //     }
    // }

    // var httpRequest = new XMLHttpRequest();
    // httpRequest.onreadystatechange = function () {
    //     if (httpRequest.readyState === 4) {
    //         if (httpRequest.status === 200) {
    //             var data = JSON.parse(httpRequest.responseText);
    //             console.log(data);
    //         }
    //     }
    // };
    // httpRequest.open('GET', "https://raw.githubusercontent.com/PDCMFinder/expression-data-test/main/Expression.tsv");
    // httpRequest.send();

    return (
        <>
            DataView
        </>
    );
}

export default DataInit;