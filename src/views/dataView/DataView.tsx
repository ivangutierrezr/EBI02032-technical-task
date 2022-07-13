import React, { Component } from 'react'
import DataInit from '../../components/dataInit/DataInit';
import NavEBI from '../../components/nav/Nav';

export default class DataView extends Component {
    render() {
        return (
            <div>
                <NavEBI />
                <DataInit />
            </div>
        )
    }
}