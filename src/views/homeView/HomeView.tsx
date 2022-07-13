import React, { Component } from 'react'
import NavEBI from '../../components/nav/Nav';
import HomeInfo from '../../components/homeInfo/HomeInfo';
// import FooterComponent from '/imports/ui/components/footerComponent/footerComponent';


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