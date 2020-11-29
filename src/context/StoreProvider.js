import React, { Component } from 'react'
import StoreContext from './StoreContext'

export default class StoreProvider extends Component {
    state  = {
        categories: [
            {
                id: 1,
                name: 'Laptops',
                description: 'Lorem ipsum',
                slug: 'laptop',
                image: 'https://images.unsplash.com/photo-1542393545-10f5cde2c810?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=701&q=80'
            },
            {
                id: 2,
                name: 'Tablets',
                description: 'Lorem ipsum',
                slug: 'tablet',
                image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80'
            }
        ],
        products: [],
        cart: ''
    }
    render() {
        return (
            <StoreContext.Provider
                value={{
                    categories: this.state.categories,
                    products: this.state.products,
                    cart: this.state.cart,
                    getCategories: () => this.state.categories
                }}
            >
                {this.props.children}
            </StoreContext.Provider>
        )
    }
}