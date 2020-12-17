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
        this.updateTotal = this.updateTotal.bind(this)
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

    updateTotal() {
        this.setState({
            total: this.context.getProductsQuantity(),
            totalSumm: this.context.getTotalPrice()
        });
        setTimeout(this.updateTotal, 1000)
    }

    static contextType = StoreContext; 
    
    componentDidMount() {
        this.updateTotal()
    }

    render() {
        return (
            <React.Fragment>
                <IconButton aria-controls="cart-menu" aria-haspopup="true" onClick={this.handleClick}>
                    <Badge badgeContent={this.state.total} color='secondary'>
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
                        Total summ: ${this.state.totalSumm}
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