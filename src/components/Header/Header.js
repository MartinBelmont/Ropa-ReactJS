import React, { Component } from 'react';
import Counter from './ItemCount';
import ItemList from './ItemList';
import './HeaderStyle.css';

export default class Header extends Component {
    render() {
        return (
            <div>
                <section class="home-section">
                    <div class="home-content">
                        <i class="fas fa-bars"></i>
                        <span class="text">Ropa EliBel</span>
                    </div>
                </section>
                <div id="counter"><Counter stock = {5} initial = {1} /></div>
                <div id="ItemsList"><ItemList/></div>
            </div>
        )
    }
}
