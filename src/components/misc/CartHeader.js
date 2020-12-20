import { Badge, Button, IconButton, Menu, MenuItem } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import StoreContext from '../../context/StoreContext'

class CartHeader extends Component {

    constructor(props) {
        super(props)
        this.state = {
            anchorEl: null,
            total: 0,
            totalSumm: 0,
            productsInCart: []
        }
        this.handleClose = this.handleClose.bind(this)
        this.handleCloseAndLink = this.handleCloseAndLink.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault()
        this.setState({
            anchorEl: e.currentTarget
        })
    }

    handleClose(e) {
        e.preventDefault()
        this.setState({
            anchorEl: null
        })
    }
    handleCloseAndLink(e) {
        e.preventDefault()
        this.setState({
            anchorEl: null
        })
        this.props.history.push('/cart')
    }

    static contextType = StoreContext; 
    
    render() {
        return (
            <React.Fragment>
                <IconButton aria-controls="cart-menu" aria-haspopup="true" onClick={this.handleClick}>
                    <Badge badgeContent={this.context.getProductsQuantity()} color='secondary'>
                        <ShoppingCart/>
                    </Badge>
                </IconButton>
                <Menu
                    id="cart-menu"
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClose={this.handleClose}>
                        Total summ: ${this.context.getTotalPrice()}
                    </MenuItem>
                    <MenuItem>
                        <Button variant='contained'
                                onClick={this.handleCloseAndLink} 
                                color='secondary'
                        >
                            Proceed to cart
                        </Button>
                    </MenuItem>
                </Menu>
            </React.Fragment>
        )
    }
}

export default withRouter(CartHeader)