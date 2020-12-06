import React from 'react'
import {
    Typography,
    Button,
    withStyles,
    Grid,
} from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'


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

    const {classes, name, price, old_price} = props

    return (
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
                >
                    <ShoppingCartIcon/>
                    Add to cart
                </Button>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(ProductInfo)
