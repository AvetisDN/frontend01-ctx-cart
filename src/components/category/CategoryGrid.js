import React from 'react'
import { Card, CardContent, CardMedia, Grid, withStyles, Typography } from '@material-ui/core'
import StoreContext from '../../context/StoreContext'
import ProductCard from './ProductCard'

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
})

function CategoryGrid(props) {

    const {classes} = props

    let category_id

    return (
        <StoreContext.Consumer>
            {(ctx) => (
                <Grid container spacing={3}>
                    {
                        ctx.getCategory(props.match.params.slug).map(category => {
                            category_id = category.id
                            return (
                                <Grid item xs={12} key={category.id}>
                                    <Card className={classes.root}>
                                        <div className={classes.details}>
                                            <CardContent className={classes.content}>
                                                <Typography component="h1" variant="h4">
                                                    {category.name}
                                                </Typography>
                                                <Typography variant="subtitle1" color="textSecondary">
                                                    {category.description}
                                                </Typography>
                                            </CardContent>
                                        </div>
                                        <CardMedia
                                            className={classes.cover}
                                            image={category.image}
                                            title="Live from space album cover"
                                        />
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                    <Grid item xs={12}>
                        <Grid container spacing={3}>
                            {
                                ctx.getProductsByCategory(category_id).map((product) => (
                                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                                        <ProductCard product={product} />
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                </Grid>
            )}
        </StoreContext.Consumer>
    )
}

export default withStyles(styles)(CategoryGrid)