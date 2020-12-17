import React from 'react'
import {Grid, withStyles, Paper, Breadcrumbs, Link, Box } from '@material-ui/core'
import StoreContext from '../../context/StoreContext'
import ProductGallery from './ProductGallery'
import ProductInfo from './ProductInfo'
// import ProductDetails from './ProductDetails'
import { Link as RouterLink } from 'react-router-dom'

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
                    <Grid item xs={12}>
                        <Breadcrumbs>
                            <Link component={RouterLink} to='/'>
                                Home
                            </Link>
                            <Link component={RouterLink} to={`/category/${ctx.getProduct(props.match.params.slug).category[0].slug}`}>
                                {ctx.getProduct(props.match.params.slug).category[0].name}
                            </Link>
                            <Box>
                                {ctx.getProduct(props.match.params.slug).product[0].name}
                            </Box>
                        </Breadcrumbs>
                    </Grid>
                    {
                        ctx.getProduct(props.match.params.slug).product.map(product => (
                            <Grid item xs={12} key={product.id}>
                                <Paper className={classes.paper}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} md={7}>
                                            <ProductGallery 
                                                image={product.image} 
                                                gallery={product.gallery ? product.gallery : null} />
                                        </Grid>
                                        <Grid item xs={12} md={5}>
                                            <ProductInfo 
                                                id={product.id} 
                                                name={product.name} 
                                                price={product.price} 
                                                old_price={product.old_price ? product.old_price : null}  />
                                        </Grid>
                                        <Grid item xs={12}>
                                            {/* <ProductDetails 
                                                description={product.description} /> */}
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