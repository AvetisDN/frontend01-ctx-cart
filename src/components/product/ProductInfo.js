import React, {useState, useContext} from 'react'
import {
    Typography,
    Button,
    withStyles,
    Grid,
} from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import StoreContext from '../../context/StoreContext'


const styles = (theme) => ({
    price: {
        color: theme.palette.secondary.main
    },
    oldPrice: {
        color: theme.palette.primary.light,
        paddingLeft: '1em',
        fontWeight: 400,
        textDecoration: 'line-through'
    }
})

function ProductInfo(props) {

    const {classes, name, price, old_price, id} = props

    const context = useContext(StoreContext)

    const [inCart, setInCart] = useState(context.isProductInCart(id))

    return (
        <StoreContext.Consumer>
            {(ctx) => (
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        
                        
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5" className={classes.price} component="p">
                            ${price}
                            {old_price &&
                                <Typography variant="h6" className={classes.oldPrice} component="span">
                                    ${old_price}
                                </Typography>
                            }
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="secondary"
                            disabled = { inCart }
                            onClick = {() => { ctx.addProductToCart(id); setInCart(true) }}
                        >
                            <ShoppingCartIcon/>
                            Add to cart
                        </Button>
                    </Grid>
                </Grid>
            )}
        </StoreContext.Consumer>
    )
}

export default withStyles(styles)(ProductInfo)
