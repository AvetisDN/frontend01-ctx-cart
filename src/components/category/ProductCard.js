import {
    Card,
    Button,
    CardMedia,
    CardContent,
    Typography,
    withStyles,
    CardActions
} from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {
    Link
} from 'react-router-dom'
import React, {useContext, useState} from 'react'
import StoreContext from '../../context/StoreContext'

const styles = (theme) => ({
    media: {
        height: 200
    },
    price: {
        color: theme.palette.secondary.main
    },
    oldPrice: {
        color: theme.palette.primary.light,
        paddingLeft: '1em',
        fontWeight: 400,
        textDecoration: 'line-through'
    },
    buttons: {
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        display: 'flex',
        justifyContent: 'space-between'
    }
})

function ProductCard(props) {
    const {classes, product} = props

    const context = useContext(StoreContext)

    const [inCart, setInCart] = useState(context.isProductInCart(product.id))

    return (
        <Card>
            <CardMedia
                className={classes.media}
                title={product.name}
                image={product.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                </Typography>
                <Typography variant="h5" className={classes.price} component="p">
                    ${product.price}
                    {product.old_price &&
                        <Typography variant="h6" className={classes.oldPrice} component="span">
                            ${product.old_price}
                        </Typography>
                    }
                </Typography>
            </CardContent>
            <CardActions className={classes.buttons}>
                <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to={`/product/${product.slug}`}
                >
                    More...
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    disabled = { inCart }
                    onClick = {() => {
                        context.addProductToCart(product)
                        setInCart(true)
                    }}
                >
                    <ShoppingCartIcon/>
                </Button>
            </CardActions>          
        </Card>
    )
}

export default withStyles(styles)(ProductCard)