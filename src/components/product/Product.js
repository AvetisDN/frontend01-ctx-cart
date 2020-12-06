import React from 'react'
import {Grid, withStyles, Paper } from '@material-ui/core'
import StoreContext from '../../context/StoreContext'
import ProductGallery from './ProductGallery'
import ProductInfo from './ProductInfo'
import ProductDetails from './ProductDetails'

const styles = (theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1
    },
    content: {
    },
    cover: {
        width: 300,
        minHeight: 200
    },
    paper: {
        padding: theme.spacing(3)
    }
})

function Product(props) {

    const {classes} = props

    return (
        <StoreContext.Consumer>
            {(ctx) => (
                <Grid container spacing={3}>
                    {
                        ctx.getProduct(props.match.params.slug).map(product => (
                            <Grid item xs={12} key={product.id}>
                                <Paper className={classes.paper}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} md={8}>
                                            <ProductGallery 
                                                image={product.image} 
                                                gallery={product.gallery ? product.gallery : null} />
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <ProductInfo 
                                                name={product.name} 
                                                price={product.price} 
                                                old_price={product.old_price ? product.old_price : null}  />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <ProductDetails 
                                                description={product.description} />
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        ))
                    }
                </Grid>
            )}
        </StoreContext.Consumer>
    )
}

export default withStyles(styles)(Product)