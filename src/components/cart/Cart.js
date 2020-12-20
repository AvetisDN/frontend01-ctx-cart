import { TableContainer, Paper, Table, TableBody, TableHead, TableRow, TableCell, withStyles, IconButton } from '@material-ui/core'
import { AddBoxRounded, DeleteForeverRounded, IndeterminateCheckBoxRounded } from '@material-ui/icons'
import React, { Component } from 'react'
import StoreContext from '../../context/StoreContext'

const styles = ((theme) => ({
    head: {
        backgroundColor: theme.palette.primary.light
    },
    tr: {
        '&:nth-of-type(even)': {
            backgroundColor: theme.palette.action.hover,
        }
    }
}))

class Cart extends Component {

    constructor(props) {
        super(props)
        this.classes = props.classes;

        this.handleRemove = this.handleRemove.bind(this)
        this.handleDecrease = this.handleDecrease.bind(this)
        this.handleIncrease = this.handleIncrease.bind(this)
    }

    static contextType = StoreContext;

    handleRemove(id) {
        if(window.confirm('Are you sure?')) {
            this.context.removeProductFromCart(id)
        }
    }

    handleIncrease(id) {
        this.context.increaseProductQuantity(id)
    }
    handleDecrease(id) {
        this.context.decreaseProductQuantity(id)
    }

    render() {
        return (
            <TableContainer component={Paper}>
                <Table>
                    <TableHead className={this.classes.head}>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell align="center" width={250}>Price</TableCell>
                            <TableCell align="center" width={250}>Quantity</TableCell>
                            <TableCell align="center" width={100}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.context.cart.length > 0 && 
                            this.context.cart.map((item,index) => (
                                <TableRow key={index} className={this.classes.tr}>
                                    <TableCell>
                                        {item.product.name}
                                    </TableCell>
                                    <TableCell align="center">
                                        {item.product.price}
                                    </TableCell>
                                    <TableCell align="center">
                                        <IconButton
                                            disabled={item.quantity === 1}
                                            onClick={() => {this.handleDecrease(item.product.id)} }
                                            >
                                            <IndeterminateCheckBoxRounded/>
                                        </IconButton>
                                        {item.quantity}
                                        <IconButton
                                            onClick={() => {this.handleIncrease(item.product.id)} }
                                            >
                                            <AddBoxRounded/>
                                        </IconButton>
                                    </TableCell>
                                    <TableCell align="center">
                                        <IconButton 
                                            color='secondary' 
                                            onClick={() => {this.handleRemove(item.product.id)} }
                                            >
                                            <DeleteForeverRounded/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                        <TableRow className={this.classes.tr}>
                            <TableCell colSpan={4} align="right">
                                <h2>
                                    Total Summ: {this.context.getTotalPrice()}
                                </h2>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}

export default withStyles(styles)(Cart)