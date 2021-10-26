import React, { Component } from 'react';
import Counter from '../Counter/ItemCount';
import ItemList from '../ItemList/ItemList';
import ItemDetailList from '../ItemDetailContainer/ItemDetailList.jsx';
import './HeaderStyle.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

export default class ItemListContainer extends Component {
    render() {
        return (
            <div>
                <div class="banner">
                    <img src="https://www2.hm.com/content/dam/TOOLBOX/PRE_SEASON/2021_s04/TCL4097_w37_women_SLS_3x2.jpg" alt="EliBel"/>
                    <div class="content">
                        <h2>Ropa EliBel</h2>
                        <p>Vestimos a mujeres únicas</p>
                    </div>
                </div>
                <section class="home-section">
                    <div class="home-content">
                        <span class="text">Productos</span>
                    </div>
                </section>
                <div id="ItemsList">
                    <ItemList/>
                </div>
            </div>
        )
    }
}
