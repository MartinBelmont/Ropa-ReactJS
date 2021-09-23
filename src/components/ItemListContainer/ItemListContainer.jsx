import React, { Component } from 'react';
import Counter from '../Counter/ItemCount';
import ItemList from '../ItemList/ItemList';
import ItemDetailList from '../ItemDetailContainer/ItemDetailList.jsx';
import './HeaderStyle.css';

export default class ItemListContainer extends Component {
    render() {
        return (
            <div>
                <section class="home-section">
                    <div class="home-content">
                        <i class="fas fa-bars"></i>
                        <span class="text">Ropa EliBel</span>
                    </div>
                </section>
                <div id="ItemsList"><ItemList/></div>
                <div id="ItemsList"><ItemDetailList/></div>
            </div>
        )
    }
}
