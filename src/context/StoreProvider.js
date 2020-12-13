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
            },
            {
                id: 3,
                name: 'Phone',
                description: 'Lorem ipsum',
                slug: 'phone',
                image: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            },
            {
                id: 4,
                name: 'PC Units',
                description: 'Lorem ipsum',
                slug: 'pc-unit',
                image: 'https://images.unsplash.com/photo-1593152167544-085d3b9c4938?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            }
        ],
        products: [
            {
                id: 1,
                category_id: 1,
                name: 'Laptop 1',
                slug: 'laptop-1',
                image: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e',
                gallery: [
                    'https://images.unsplash.com/photo-1516387938699-a93567ec168e',
                    'https://images.unsplash.com/photo-1541807084-5c52b6b3adef',
                    'https://images.unsplash.com/photo-1577375729152-4c8b5fcda381',
                    'https://images.unsplash.com/photo-1587614380862-0294308ae58b'
                ],
                price: 1000,
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ducimus eum veniam explicabo itaque laudantium, reiciendis officiis maxime fugit sunt, quibusdam ab est aliquid dicta quisquam cumque autem ad reprehenderit.'
            },
            {
                id: 2,
                category_id: 1,
                name: 'Laptop 2',
                slug: 'laptop-2',
                image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef',
                price: 1200,
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ducimus eum veniam explicabo itaque laudantium, reiciendis officiis maxime fugit sunt, quibusdam ab est aliquid dicta quisquam cumque autem ad reprehenderit.'
            },
            {
                id: 3,
                category_id: 1,
                name: 'Laptop 3',
                slug: 'laptop-3',
                image: 'https://images.unsplash.com/photo-1587614380862-0294308ae58b',
                old_price: 1000,
                price: 900,
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ducimus eum veniam explicabo itaque laudantium, reiciendis officiis maxime fugit sunt, quibusdam ab est aliquid dicta quisquam cumque autem ad reprehenderit.'
            },
            {
                id: 4,
                category_id: 1,
                name: 'Laptop 4',
                slug: 'laptop-4',
                image: 'https://images.unsplash.com/photo-1577375729152-4c8b5fcda381',
                price: 750,
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ducimus eum veniam explicabo itaque laudantium, reiciendis officiis maxime fugit sunt, quibusdam ab est aliquid dicta quisquam cumque autem ad reprehenderit.'
            },
            {
                id: 5,
                category_id: 2,
                name: 'Tablet 1',
                slug: 'tablet-1',
                image: 'https://images.unsplash.com/photo-1565221287653-9a2713dbe4ef',
                price: 500,
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ducimus eum veniam explicabo itaque laudantium, reiciendis officiis maxime fugit sunt, quibusdam ab est aliquid dicta quisquam cumque autem ad reprehenderit.'
            },
        ],
        cart: ''
    }
    render() {
        return (
            <StoreContext.Provider
                value={{
                    categories: this.state.categories,
                    products: this.state.products,
                    cart: this.state.cart,
                    getCategories: () => this.state.categories,
                    getCategory: (slug) => this.state.categories.filter((category) => category.slug===slug),
                    getProductsByCategory: (category_id) => this.state.products.filter((product) => product.category_id===category_id),
                    getProduct: (slug) => {
                        const product = this.state.products.filter((product) => product.slug===slug)
                        const productObj = {
                            product: product,
                            category: this.state.categories.filter((category) => category.id===product[0].category_id)
                        }
                        return productObj
                    },
                    addProductToCart: (id) => {
                        let currentCart = []
                        if(localStorage.getItem('cart-app-cart') && localStorage.getItem('cart-app-cart') !== 'undefined') {
                            currentCart = JSON.parse(localStorage.getItem('cart-app-cart'))
                        }
                        if(!currentCart.filter(item => item.productId === id).length) {
                            currentCart.push({
                                productId: id,
                                quantity: 1
                            })
                        }
                        localStorage.setItem('cart-app-cart', JSON.stringify(currentCart))
                    },
                    isProductInCart: (id) => {
                        let currentCart = []
                        if(localStorage.getItem('cart-app-cart') && localStorage.getItem('cart-app-cart') !== 'undefined') {
                            currentCart = JSON.parse(localStorage.getItem('cart-app-cart'))
                        }
                        if(currentCart.filter(item => item.productId === id).length) return true
                        return false
                    },
                    getProductsQuantity: () => {
                        let quantity = 0
                        let currentCart = []
                        if(localStorage.getItem('cart-app-cart') && localStorage.getItem('cart-app-cart') !== 'undefined') {
                            currentCart = JSON.parse(localStorage.getItem('cart-app-cart'))
                        }
                        currentCart.map(item => {
                            quantity += +item.quantity
                        })
                        return quantity
                    },
                    getTotalPrice: () => {},
                    removeProductFromCart: (id) => {},
                    increaseProductQuantity: (id) => {},
                    decreaseProductQuantity: (id) => {},
                    
                }}
            >
                {this.props.children}
                
            </StoreContext.Provider>
        )
    }
}