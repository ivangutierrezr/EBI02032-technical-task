import React, { Component } from 'react'
import NavEBI from '../../components/nav/Nav';
import HomeInfo from '../../components/homeInfo/HomeInfo';

export default class HomeView extends Component {
    render() {
        return (
            <div>
                <NavEBI />
                <HomeInfo />
            </div>
        )
    }
}