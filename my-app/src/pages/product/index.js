import React, { Component } from 'react'
import api from '../../services/api'

import './styles.css';

export default class Product extends Component {
    state = {
        product: {},
    };

    async componentDidMount() {
        const { id } = this.props.match.props;

        const response = await api.get(`/products/${id}`);

        this.setState({ product: response.data });
    }

    render() {
        const { product } = this.state;

        return (
            <div className="product-info">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>
                    URL: <a href={product.url}>{product.url}</a>
                </p>
                {/* <h2>Teste</h2>
                <p>Teste descricao bla bla bla bla bla  bla</p>
                <p>
                    URL: <a href="www.google.com">alsdflkasjdflkajsdf</a>
                </p> */}
            </div>
        );
    }
}